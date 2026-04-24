import { Button } from "@/components/ui/button";
import Icon from '@/components/ui/icon';
import { useCart } from '@/context/CartContext';

export default function ComponentsCart() {
  const { cart, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart();

  if (cart.length === 0) return null;

  return (
    <section className="bg-white py-8 border-t">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">МОЯ КОРЗИНА</h2>

        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center gap-4 p-4 border rounded-lg">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
                <div className="text-lg font-bold text-primary mt-1">
                  {item.price.toLocaleString()} ₽
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button size="sm" variant="outline" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</Button>
                <span className="w-8 text-center">{item.quantity}</span>
                <Button size="sm" variant="outline" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</Button>
              </div>
              <div className="text-right">
                <div className="font-bold text-lg">
                  {(item.price * item.quantity).toLocaleString()} ₽
                </div>
                <Button size="sm" variant="destructive" onClick={() => removeFromCart(item.id)} className="mt-2">
                  <Icon name="Trash2" className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t">
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold">ИТОГО:</span>
            <span className="text-2xl font-bold text-primary">{getTotalPrice().toLocaleString()} ₽</span>
          </div>
          <div className="mt-4 flex gap-4">
            <Button className="flex-1" onClick={() => window.location.href = '/dashboard'}>
              <Icon name="ShoppingCart" className="mr-2 h-4 w-4" />
              Оформить заказ
            </Button>
            <Button variant="outline" onClick={clearCart}>
              <Icon name="Trash2" className="mr-2 h-4 w-4" />
              Очистить корзину
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
