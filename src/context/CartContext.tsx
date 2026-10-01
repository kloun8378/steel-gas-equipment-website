import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { useAuth } from './AuthContext';
import api from '@/services/api';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  description?: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const GUEST_CART_KEY = 'guest_cart';

const readGuestCart = (): CartItem[] => {
  try {
    const raw = localStorage.getItem(GUEST_CART_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const writeGuestCart = (items: CartItem[]) => {
  try {
    if (items.length === 0) {
      localStorage.removeItem(GUEST_CART_KEY);
    } else {
      localStorage.setItem(GUEST_CART_KEY, JSON.stringify(items));
    }
  } catch {
    return;
  }
};

const mergeCarts = (base: CartItem[], extra: CartItem[]): CartItem[] => {
  const result = base.map(item => ({ ...item }));
  extra.forEach(item => {
    const existing = result.find(r => r.id === item.id);
    if (existing) {
      existing.quantity += item.quantity;
    } else {
      result.push({ ...item });
    }
  });
  return result;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => readGuestCart());
  const { user, isLoading } = useAuth();
  const syncTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (isLoading) return;
    if (user) {
      const guestItems = readGuestCart();
      api.getCart()
        .then((data) => {
          const serverItems: CartItem[] = data.cart || [];
          if (guestItems.length > 0) {
            const merged = mergeCarts(serverItems, guestItems);
            writeGuestCart([]);
            setCart(merged);
            api.updateCart(merged).catch(() => {});
          } else {
            setCart(serverItems);
          }
        })
        .catch(() => setCart(guestItems));
    } else {
      setCart(readGuestCart());
    }
  }, [user, isLoading]);

  const syncToServer = (items: CartItem[]) => {
    if (!user) {
      writeGuestCart(items);
      return;
    }
    if (syncTimer.current) clearTimeout(syncTimer.current);
    syncTimer.current = setTimeout(() => {
      api.updateCart(items).catch(() => {});
    }, 500);
  };

  const addToCart = (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => {
    const addQty = item.quantity ?? 1;
    setCart(currentCart => {
      const existingItem = currentCart.find(cartItem => cartItem.id === item.id);
      let newCart: CartItem[];
      if (existingItem) {
        newCart = currentCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + addQty }
            : cartItem
        );
      } else {
        newCart = [...currentCart, { ...item, quantity: addQty }];
      }
      syncToServer(newCart);
      return newCart;
    });
  };

  const removeFromCart = (id: string) => {
    setCart(currentCart => {
      const newCart = currentCart.filter(item => item.id !== id);
      syncToServer(newCart);
      return newCart;
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCart(currentCart => {
      const newCart = currentCart.map(item =>
        item.id === id ? { ...item, quantity } : item
      );
      syncToServer(newCart);
      return newCart;
    });
  };

  const clearCart = () => {
    setCart([]);
    if (user) {
      api.updateCart([]).catch(() => {});
    } else {
      writeGuestCart([]);
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
    getTotalItems,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};