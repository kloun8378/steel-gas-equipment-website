import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { sendOrderEmail } from "@/services/emailService";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/useToast";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const { cart, removeFromCart, updateQuantity, clearCart, getTotalPrice, getTotalItems } = useCart();
  const { showSuccess, showError, showInfo } = useToast();
  const [companyData, setCompanyData] = useState({
    name: '',
    inn: '',
    address: '',
    phone: '',
    email: '',
    description: ''
  });

  useEffect(() => {
    if (user) {
      // Загружаем данные компании для этого пользователя
      const companyInfo = localStorage.getItem(`company_${user.email}`);
      if (companyInfo) {
        setCompanyData(JSON.parse(companyInfo));
      } else {
        // Заполняем данными из профиля пользователя
        setCompanyData({
          name: user.company,
          inn: '',
          address: user.address,
          phone: user.phone,
          email: user.email,
          description: ''
        });
      }
    }
  }, [user]);

  const handleCompanyDataChange = (field: string, value: string) => {
    setCompanyData(prev => ({ ...prev, [field]: value }));
  };

  const saveCompanyData = () => {
    if (user) {
      localStorage.setItem(`company_${user.email}`, JSON.stringify(companyData));
      showSuccess('Данные компании сохранены!');
    }
  };

  const handleLogout = () => {
    logout();
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <Icon name="Loader2" className="h-8 w-8 animate-spin mx-auto mb-4" />
          <p className="text-gray-600 mb-4">Загрузка...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Icon name="Factory" className="h-8 w-8 text-primary mr-3" />
              <h1 className="text-2xl font-bold text-gray-900">СтальПро - Личный кабинет</h1>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-600">Добро пожаловать, {user.email}</span>
              <Button variant="outline" onClick={() => window.location.href = '/'}>
                <Icon name="Home" className="mr-2 h-4 w-4" />
                На главную
              </Button>
              <Button variant="outline" onClick={handleLogout}>
                <Icon name="LogOut" className="mr-2 h-4 w-4" />
                Выйти
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Карточка предприятия */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="Building2" className="mr-2 h-5 w-5" />
                Карточка предприятия
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="company-name">Название предприятия</Label>
                <Input
                  id="company-name"
                  value={companyData.name}
                  onChange={(e) => handleCompanyDataChange('name', e.target.value)}
                  placeholder="ООО 'Ваша компания'"
                />
              </div>
              
              <div>
                <Label htmlFor="company-inn">ИНН</Label>
                <Input
                  id="company-inn"
                  value={companyData.inn}
                  onChange={(e) => handleCompanyDataChange('inn', e.target.value)}
                  placeholder="1234567890"
                />
              </div>
              
              <div>
                <Label htmlFor="company-address">Адрес</Label>
                <Input
                  id="company-address"
                  value={companyData.address}
                  onChange={(e) => handleCompanyDataChange('address', e.target.value)}
                  placeholder="г. Барнаул, ул. Примерная 1"
                />
              </div>
              
              <div>
                <Label htmlFor="company-phone">Телефон</Label>
                <Input
                  id="company-phone"
                  value={companyData.phone}
                  onChange={(e) => handleCompanyDataChange('phone', e.target.value)}
                  placeholder="+7 (999) 123-45-67"
                />
              </div>
              
              <div>
                <Label htmlFor="company-email">Email</Label>
                <Input
                  id="company-email"
                  value={companyData.email}
                  onChange={(e) => handleCompanyDataChange('email', e.target.value)}
                  placeholder="company@example.com"
                />
              </div>
              
              <div>
                <Label htmlFor="company-description">Адрес доставки</Label>
                <Textarea
                  id="company-description"
                  value={companyData.description}
                  onChange={(e) => handleCompanyDataChange('description', e.target.value)}
                  placeholder="Адрес для доставки заказов"
                  rows={3}
                />
              </div>
              
              <Button onClick={saveCompanyData} className="w-full">
                <Icon name="Save" className="mr-2 h-4 w-4" />
                Сохранить данные
              </Button>
            </CardContent>
          </Card>

          {/* Моя корзина */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center">
                  <Icon name="ShoppingCart" className="mr-2 h-5 w-5" />
                  Моя корзина
                </div>
                <span className="text-sm font-normal text-gray-500">
                  {cart.length} {cart.length === 1 ? 'товар' : cart.length < 5 ? 'товара' : 'товаров'}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {cart.length === 0 ? (
                <div className="text-center py-8">
                  <Icon name="ShoppingCart" className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Корзина пуста</p>
                  <p className="text-sm text-gray-400 mt-2">
                    Добавьте товары из каталога на главной странице
                  </p>
                  <a href="/#products">
                    <Button 
                      variant="outline" 
                      className="mt-4 w-full"
                    >
                      Перейти к каталогу
                    </Button>
                  </a>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 p-4 border rounded-lg">
                      {item.image && (
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded"
                        />
                      )}
                      
                      <div className="flex-1">
                        <h4 className="font-medium">{item.name}</h4>
                        {item.description && <p className="text-sm text-gray-500">{item.description}</p>}
                        <div className="text-lg font-bold text-primary mt-1">
                          {item.price.toLocaleString()} ₽ за шт.
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
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
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
                          variant="outline"
                          size="sm"
                          onClick={() => removeFromCart(item.id)}
                          className="mt-2"
                        >
                          <Icon name="Trash2" className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center font-bold text-lg mb-4">
                      <span>ИТОГО:</span>
                      <span>{getTotalPrice().toLocaleString()} ₽</span>
                    </div>
                    
                    <div className="flex gap-4">
                      <Button 
                        className="flex-1"
                        onClick={async () => {
                          if (cart.length === 0) {
                            showError('Корзина пуста! Добавьте товары для оформления заказа.');
                            return;
                          }

                          showInfo('Отправляю заказ через EmailJS...');

                          // Собираем данные заказа
                          const orderData = {
                            company: user?.company || 'Неизвестная компания',
                            contact: user?.name || 'Неизвестный контакт',
                            phone: user?.phone || 'Не указан', 
                            email: user?.email || 'Не указан',
                            address: user?.address || 'Не указан',
                            cart: cart,
                            total: getTotalPrice()
                          };

                          try {
                            const result = await sendOrderEmail(orderData);
                            
                            if (result) {
                              showSuccess('✅ ЗАКАЗ ПРИНЯТ! Данные сохранены. В реальном проекте будет отправлен email на sadoxa1996@mail.ru');
                              clearCart();
                            } else {
                              showError('❌ Ошибка при сохранении заказа. Попробуйте еще раз.');
                            }
                          } catch (error) {
                            console.error('❌ EmailJS error:', error);
                            showError(`❌ Ошибка EmailJS: ${error instanceof Error ? error.message : String(error)}\n💡 Проверьте настройки в .env файле`);
                          }
                        }}
                      >
                        <Icon name="Send" className="mr-2 h-4 w-4" />
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
              )}
            </CardContent>
          </Card>
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;