import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function PumpEquipment() {
  const [quantity2, setQuantity2] = useState(1);
  const { addToCart, cart, removeFromCart, updateQuantity, clearCart, getTotalPrice, getTotalItems } = useCart();
  const { user } = useAuth();

  const handleAddToCart = (product: Record<string, unknown>) => {
    if (!user) {
      window.location.href = '/login';
      return;
    }
    addToCart(product as Parameters<typeof addToCart>[0]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => window.location.href = '/'}
              className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
            >
              <Icon name="ArrowLeft" className="h-5 w-5" />
              <span className="text-sm">На главную</span>
            </button>
            <span className="text-gray-300">|</span>
            <div className="flex items-center gap-2">
              <Icon name="Gauge" className="h-5 w-5 text-primary" />
              <span className="font-semibold text-gray-900">Насосное оборудование</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <span
            className="hover:text-primary cursor-pointer"
            onClick={() => window.location.href = '/'}
          >Главная</span>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Насосное оборудование</span>
        </nav>

        {/* Title */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Насосное оборудование
          </h1>
          <p className="text-lg text-gray-600">
            Насосы для перекачки сжиженных углеводородных газов
          </p>
        </div>

        {/* Product Gallery */}
        <div className="flex flex-wrap justify-center gap-6 items-stretch">
          {/* Рама насоса Corken FD 150 */}
          <Card className="w-full max-w-md flex flex-col">
            <CardContent className="p-6 flex flex-col flex-1">
              <div className="w-56 h-56 mx-auto mb-4 rounded-lg border overflow-hidden bg-white flex items-center justify-center">
                <img
                  src="https://cdn.poehali.dev/files/1e711c1f-0c57-4748-b5e9-177dc632096d.png"
                  alt="Рама насоса Corken FD 150"
                  className="w-full h-full object-contain p-2"
                  loading="lazy"
                />
              </div>
              <div className="text-center flex flex-col flex-1">
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  Рама насоса Corken FD 150
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  Единая усиленная стальная рама для крепления насоса и двигателя. Обеспечивает жесткость конструкции, предотвращает перекосы при монтаже на основание. Является основой всего агрегата.
                </p>
                <div className="text-2xl font-bold text-primary mb-4">
                  3 800 ₽ <span className="text-sm text-gray-500">с НДС</span>
                </div>
                <div className="mt-auto">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <input
                      type="number"
                      value={quantity2}
                      onChange={(e) => setQuantity2(Math.max(1, parseInt(e.target.value) || 1))}
                      min="1"
                      className="w-20 px-3 py-2 text-sm border rounded text-center"
                    />
                    <span className="text-sm text-gray-600">шт.</span>
                  </div>
                  <Button
                    size="lg"
                    className="w-full"
                    onClick={() => handleAddToCart({
                      id: 'pump-frame-corken-fd150',
                      name: 'Рама насоса Corken FD 150',
                      price: 3800,
                      image: 'https://cdn.poehali.dev/files/1e711c1f-0c57-4748-b5e9-177dc632096d.png',
                      description: 'Единая усиленная стальная рама для крепления насоса и двигателя',
                      quantity: quantity2
                    })}
                  >
                    <Icon name="ShoppingCart" className="mr-1 h-3 w-3" />
                    Заказать
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Корзина */}
      {cart.length > 0 && (
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
                      {item.price > 0 ? `${item.price.toLocaleString()} ₽` : 'По запросу'}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="outline" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</Button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <Button size="sm" variant="outline" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</Button>
                  </div>
                  <Button size="sm" variant="ghost" onClick={() => removeFromCart(item.id)}>
                    <Icon name="Trash2" className="h-4 w-4 text-red-500" />
                  </Button>
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-between items-center">
              <div className="text-xl font-bold">
                Итого: {getTotalPrice().toLocaleString()} ₽
              </div>
              <div className="flex gap-3">
                <Button variant="outline" onClick={clearCart}>Очистить корзину</Button>
                <Button size="lg">
                  <Icon name="Send" className="mr-2 h-4 w-4" />
                  Оформить заказ ({getTotalItems()} шт.)
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}