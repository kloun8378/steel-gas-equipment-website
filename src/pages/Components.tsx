import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Icon from '@/components/ui/icon';
import { useState, useEffect } from 'react';

export default function Components() {
  const [quantitySpring, setQuantitySpring] = useState(1);
  const [quantityValve, setQuantityValve] = useState(1);
  const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = () => {
    try {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      setCartItems(cart);
    } catch (error) {
      console.error('Ошибка загрузки корзины:', error);
      setCartItems([]);
    }
  };

  const addToCart = (product: any) => {
    console.log('Добавляем товар:', product);
    
    try {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      const existingItem = cart.find((item: any) => item.id === product.id);
      
      if (existingItem) {
        existingItem.quantity += product.quantity;
      } else {
        cart.push(product);
      }
      
      localStorage.setItem('cart', JSON.stringify(cart));
      setCartItems(cart);
      alert(`Товар "${product.name}" добавлен в корзину (${product.quantity} шт.)`);
    } catch (error) {
      console.error('Ошибка:', error);
      alert('Ошибка при добавлении товара');
    }
  };

  const removeFromCart = (productId: string) => {
    try {
      const cart = cartItems.filter(item => item.id !== productId);
      localStorage.setItem('cart', JSON.stringify(cart));
      setCartItems(cart);
    } catch (error) {
      console.error('Ошибка удаления:', error);
    }
  };

  const updateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    try {
      const cart = cartItems.map(item => 
        item.id === productId ? { ...item, quantity: newQuantity } : item
      );
      localStorage.setItem('cart', JSON.stringify(cart));
      setCartItems(cart);
    } catch (error) {
      console.error('Ошибка обновления количества:', error);
    }
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };
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
            <span>Комплектующие</span>
          </div>

          {/* Page Title */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Комплектующие
            </h1>
            <p className="text-lg text-gray-600">
              Широкий ассортимент комплектующих для промышленной арматуры
            </p>
          </div>

          {/* Products Grid */}
          <div className="mb-12">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Пружина */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Popover>
                    <PopoverTrigger asChild>
                      <div className="bg-white p-6 rounded-lg mb-4 border cursor-pointer hover:shadow-md transition-shadow">
                        <img 
                          src="https://cdn.poehali.dev/files/0dbb6381-c034-430c-92d1-6219babf932a.jpg" 
                          alt="Пружина ППЦЗ-12"
                          className="w-full h-48 object-contain bg-white rounded"
                          style={{backgroundColor: '#ffffff'}}
                        />
                      </div>
                    </PopoverTrigger>
                    <PopoverContent className="w-80 p-0">
                      <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                        <div className="bg-gray-50 p-4 border-b">
                          <h3 className="text-lg font-bold text-gray-900">Пружина ППЦЗ-12</h3>
                        </div>
                        <div className="p-4 space-y-3 text-sm">
                          <p className="text-gray-700">
                            Пружина предохранительного клапана применяется в клапане ППЦЗ-12.
                          </p>
                          <p className="text-gray-700">
                            Служит для замены пружины в старом клапане, которая потеряла свои свойства.
                          </p>
                          <div className="border-t pt-3 mt-3">
                            <div className="text-lg font-bold text-primary">
                              2 700 ₽ <span className="text-sm text-gray-500">с НДС</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                  <CardTitle className="text-xl">Пружина ППЦЗ-12</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-6">
                    <p className="text-2xl font-bold text-primary mb-2">2 700 ₽</p>
                    <p className="text-sm text-gray-600">с НДС</p>
                  </div>
                  
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <label className="text-sm font-medium">Количество:</label>
                    <input 
                      type="number" 
                      min="1" 
                      value={quantitySpring}
                      onChange={(e) => setQuantitySpring(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-16 px-2 py-1 border rounded text-center"
                    />
                  </div>
                  
                  <Button 
                    className="w-full" 
                    size="lg"
                    onClick={() => addToCart({
                      id: 'spring-ppcz12',
                      name: 'Пружина ППЦЗ-12',
                      price: 2700,
                      image: 'https://cdn.poehali.dev/files/0dbb6381-c034-430c-92d1-6219babf932a.jpg',
                      description: 'Пружина предохранительного клапана для замены в старом клапане',
                      quantity: quantitySpring
                    })}
                  >
                    <Icon name="ShoppingCart" className="mr-2 h-5 w-5" />
                    Заказать
                  </Button>
                </CardContent>
              </Card>

              {/* Золотник */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Popover>
                    <PopoverTrigger asChild>
                      <div className="bg-white p-6 rounded-lg mb-4 border cursor-pointer hover:shadow-md transition-shadow">
                        <img 
                          src="https://cdn.poehali.dev/files/7bb7d237-f284-4013-a981-6846c8504c80.jpg" 
                          alt="Золотник ППЦЗ-12"
                          className="w-full h-48 object-contain bg-white rounded"
                          style={{backgroundColor: '#ffffff'}}
                        />
                      </div>
                    </PopoverTrigger>
                    <PopoverContent className="w-96 p-0">
                      <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                        <div className="bg-gray-50 p-4 border-b">
                          <h3 className="text-lg font-bold text-gray-900">Золотник ППЦЗ-12</h3>
                        </div>
                        <div className="p-4 space-y-3 text-sm">
                          <p className="text-gray-700">
                            Золотник для пружинного клапана прямого действия ППЦЗ-12, который предназначен для установки на перевозчиках и стационарных емкостях работающих с сжиженными углеводородными газами (СУГ).
                          </p>
                          <div className="border-t pt-3 mt-3">
                            <div className="text-lg font-bold text-primary">
                              1 110 ₽ <span className="text-sm text-gray-500">с НДС</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                  <CardTitle className="text-xl">Золотник ППЦЗ-12</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-6">
                    <p className="text-2xl font-bold text-primary mb-2">1 110 ₽</p>
                    <p className="text-sm text-gray-600">с НДС</p>
                  </div>
                  
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <label className="text-sm font-medium">Количество:</label>
                    <input 
                      type="number" 
                      min="1" 
                      value={quantityValve}
                      onChange={(e) => setQuantityValve(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-16 px-2 py-1 border rounded text-center"
                    />
                  </div>
                  
                  <Button 
                    className="w-full" 
                    size="lg"
                    onClick={() => addToCart({
                      id: 'valve-ppcz12',
                      name: 'Золотник ППЦЗ-12',
                      price: 1110,
                      image: 'https://cdn.poehali.dev/files/7bb7d237-f284-4013-a981-6846c8504c80.jpg',
                      description: 'Золотник для пружинного клапана прямого действия ППЦЗ-12',
                      quantity: quantityValve
                    })}
                  >
                    <Icon name="ShoppingCart" className="mr-2 h-5 w-5" />
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>


        </div>

        {/* МОЯ КОРЗИНА */}
        {cartItems.length > 0 && (
          <section className="bg-white py-8 border-t">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">МОЯ КОРЗИНА</h2>
              
              <div className="space-y-4">
                {cartItems.map((item) => (
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
                    onClick={() => alert('Функция оформления заказа будет добавлена позже')}
                  >
                    <Icon name="ShoppingCart" className="mr-2 h-4 w-4" />
                    Оформить заказ
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => {
                      localStorage.removeItem('cart');
                      setCartItems([]);
                    }}
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