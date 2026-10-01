import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { reachGoal } from '@/lib/metrika';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart, getTotalPrice, getTotalItems } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleCheckout = () => {
    reachGoal('begin_checkout', { total: getTotalPrice(), items: getTotalItems() });
    navigate(user ? '/dashboard' : '/login');
  };

  return (
    <>
      <Helmet>
        <title>Корзина — СтальПроКлапан</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <Header />
      <main className="container mx-auto px-4 md:px-6 py-8 min-h-[50vh]">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Корзина</h1>

          {cart.length === 0 ? (
            <div className="text-center py-16 border rounded-lg bg-white">
              <Icon name="ShoppingCart" className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <p className="text-lg text-gray-700 mb-6">Ваша корзина пуста</p>
              <Button onClick={() => navigate('/#products')}>Перейти к товарам</Button>
            </div>
          ) : (
            <>
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 border rounded-lg bg-white">
                    <img src={item.image} alt={item.name} loading="lazy" className="w-20 h-20 object-cover rounded" />
                    <div className="flex-1">
                      <h2 className="font-semibold text-gray-900">{item.name}</h2>
                      {item.description && <p className="text-sm text-gray-600">{item.description}</p>}
                      <div className="text-lg font-bold text-primary mt-1">
                        {item.price > 0 ? `${item.price.toLocaleString('ru-RU')} ₽` : 'По запросу'}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button size="sm" variant="outline" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button size="sm" variant="outline" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</Button>
                    </div>
                    <div className="flex items-center justify-between sm:block sm:text-right">
                      <div className="font-bold text-lg">
                        {(item.price * item.quantity).toLocaleString('ru-RU')} ₽
                      </div>
                      <Button size="sm" variant="ghost" onClick={() => removeFromCart(item.id)} aria-label="Удалить">
                        <Icon name="Trash2" className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                <div className="text-2xl font-bold">
                  Итого: {getTotalPrice().toLocaleString('ru-RU')} ₽
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="outline" onClick={clearCart}>Очистить корзину</Button>
                  <Button size="lg" onClick={handleCheckout}>
                    <Icon name="Send" className="mr-2 h-4 w-4" />
                    Оформить заказ ({getTotalItems()} шт.)
                  </Button>
                </div>
              </div>
              {!user && (
                <p className="text-sm text-gray-500 mt-4">
                  Для оформления заказа потребуется войти или зарегистрироваться. Товары в корзине сохранятся.
                </p>
              )}
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
