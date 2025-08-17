import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Icon from '@/components/ui/icon';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';

export default function SafetyValve() {
  const [quantity, setQuantity] = useState(1);
  const { addToCart, cart, removeFromCart, updateQuantity, clearCart, getTotalPrice, getTotalItems } = useCart();
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-primary text-white py-4 px-4 md:px-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Factory" className="h-8 w-8 text-white" />
            <div>
              <h1 className="text-xl md:text-2xl font-bold">СтальПро</h1>
              <p className="text-sm opacity-90">Клапанные технологии</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6 text-sm">
            <a href="/" className="hover:text-gray-200 transition-colors">Главная</a>
            <a href="/#products" className="text-white font-medium">Продукция</a>
            <a href="/#contacts" className="hover:text-gray-200 transition-colors">Контакты</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-6 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-6 text-sm text-gray-600">
            <a href="/" className="hover:text-primary">Главная</a>
            <span className="mx-2">/</span>
            <span>Предохранительный клапан</span>
          </div>

          {/* Page Title */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Предохранительный клапан
            </h1>
            <p className="text-lg text-gray-600">
              Надежная защита оборудования от превышения давления
            </p>
          </div>

          {/* Product Gallery */}
          <div className="flex justify-center">
            {/* ППЦЗ-12 */}
            <Card className="max-w-xs">
              <CardContent className="p-4">
                <Popover>
                  <PopoverTrigger asChild>
                    <div className="aspect-square bg-white rounded-lg mb-3 border overflow-hidden w-40 h-40 mx-auto cursor-pointer hover:shadow-lg transition-shadow">
                      <img 
                        src="https://cdn.poehali.dev/files/5b63616f-f204-4d56-a0f3-7223f98ee9d4.jpeg" 
                        alt="Предохранительные клапаны ППЦЗ-12"
                        className="w-full h-full object-contain rounded-lg p-2"
                      />
                    </div>
                  </PopoverTrigger>
                  <PopoverContent className="w-[480px] p-0">
                    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                      <div className="bg-gray-50 p-4 border-b">
                        <h3 className="text-lg font-bold text-gray-900">Технические характеристики ППЦЗ-12</h3>
                      </div>
                      <div className="p-4 space-y-2 text-sm">
                        <div className="grid grid-cols-2 gap-4">
                          <div><span className="font-semibold">Тип клапана:</span> Пружинный прямого действия</div>
                          <div><span className="font-semibold">Рабочая среда:</span> СУГ по ГОСТ 20448-90 или ГОСТ 27578-87</div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div><span className="font-semibold">Рабочее давление Рр, МПа:</span> 1,6</div>
                          <div><span className="font-semibold">Расчетное давление Ррасч, МПа:</span> 1,84</div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div><span className="font-semibold">Давление настройки Рн, МПа:</span> от 1,6 до 1,84</div>
                          <div><span className="font-semibold">Диаметр условного прохода Ду,мм:</span> 25</div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div><span className="font-semibold">Расчетное проходное сечение F, мм²:</span> 412</div>
                          <div><span className="font-semibold">Пропускная способность G, кг/час:</span> 4271</div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div><span className="font-semibold">Коэффициент расхода для газообразных сред:</span> 0,58</div>
                          <div><span className="font-semibold">Рабочая температура, °С:</span> от -40 до +45</div>
                        </div>
                        <div className="border-t pt-3 mt-3">
                          <div className="font-semibold mb-2">Габаритные размеры:</div>
                          <div className="grid grid-cols-3 gap-4 text-xs">
                            <div><span className="font-medium">Диаметр, мм:</span> 83(92)</div>
                            <div><span className="font-medium">Высота, мм:</span> 231(238)</div>
                            <div><span className="font-medium">Масса, кг не более:</span> 3,6</div>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div><span className="font-semibold">Средний срок службы, лет, не менее:</span> 15</div>
                          <div><span className="font-semibold">Тип соединения с сосудом:</span> Резьбовое М 72х2</div>
                        </div>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
                <div className="text-center">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">
                    Предохранительные клапаны ППЦЗ-12
                  </h3>
                  <p className="text-xs text-gray-600 mb-2">
                    Надежная защита оборудования от превышения давления
                  </p>
                  <div className="text-lg font-bold text-primary mb-3">
                    9 000 ₽ <span className="text-xs text-gray-500">с НДС</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <input 
                      type="number" 
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      min="1" 
                      className="w-16 px-2 py-1 text-xs border rounded text-center"
                    />
                    <span className="text-xs text-gray-600">шт.</span>
                  </div>
                  <Button 
                    size="sm" 
                    className="w-full text-xs"
                    onClick={() => addToCart({
                      id: 'safety-valve-ppcz12',
                      name: 'Предохранительные клапаны ППЦЗ-12',
                      price: 9000,
                      image: 'https://cdn.poehali.dev/files/5b63616f-f204-4d56-a0f3-7223f98ee9d4.jpeg',
                      description: 'Надежная защита оборудования от превышения давления',
                      quantity: quantity
                    })}
                  >
                    <Icon name="ShoppingCart" className="mr-1 h-3 w-3" />
                    Заказать
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>

        {/* МОЯ КОРЗИНА */}
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
                        {item.price.toLocaleString()} ₽
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        -
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </Button>
                    </div>
                    
                    <div className="text-right">
                      <div className="font-bold text-lg">
                        {(item.price * item.quantity).toLocaleString()} ₽
                      </div>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => removeFromCart(item.id)}
                        className="mt-2"
                      >
                        <Icon name="Trash2" className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">ИТОГО:</span>
                  <span className="text-2xl font-bold text-primary">
                    {getTotalPrice().toLocaleString()} ₽
                  </span>
                </div>
                
                <div className="mt-4 flex gap-4">
                  <Button 
                    className="flex-1"
                    onClick={() => window.location.href = '/dashboard'}
                  >
                    <Icon name="ShoppingCart" className="mr-2 h-4 w-4" />
                    Оформить заказ
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={clearCart}
                  >
                    <Icon name="Trash2" className="mr-2 h-4 w-4" />
                    Очистить корзину
                  </Button>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Icon name="Factory" className="h-8 w-8 text-primary mr-3" />
                <h5 className="text-xl font-bold">СтальПро</h5>
              </div>
              <p className="text-gray-400">Надёжные решения промышленного газового оборудования для вашего бизнеса.</p>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Продукция</h6>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/speed-valve" className="hover:text-white transition-colors">Скоростной клапан</a></li>
                <li><a href="/safety-valve" className="hover:text-white transition-colors">Предохранительный клапан</a></li>
                <li><a href="/components" className="hover:text-white transition-colors">Комплектующие</a></li>
              </ul>
            </div>

            <div>
              <h6 className="font-semibold mb-4">Контакты</h6>
              <ul className="space-y-2 text-gray-400">
                <li>Алтайский край, г. Барнаул, ул. Кавалерийская 14, бокс 171</li>
                <li>+7 960 937-35-42, +7 960 950-59-04</li>
                <li>sadoxa1996@mail.ru</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 СтальПро. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}