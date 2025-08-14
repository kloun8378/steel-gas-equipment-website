import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Dashboard = () => {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [companyData, setCompanyData] = useState({
    name: '',
    inn: '',
    address: '',
    phone: '',
    email: '',
    description: ''
  });
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    // Получаем данные текущего пользователя
    const userData = localStorage.getItem('currentUser');
    if (userData) {
      const user = JSON.parse(userData);
      setCurrentUser(user);
      
      // Загружаем данные компании для этого пользователя
      const companyInfo = localStorage.getItem(`company_${user.email}`);
      if (companyInfo) {
        setCompanyData(JSON.parse(companyInfo));
      }
      
      // Загружаем корзину для этого пользователя
      const userCart = localStorage.getItem(`cart_${user.email}`);
      if (userCart) {
        setCart(JSON.parse(userCart));
      }
    } else {
      // Если пользователь не авторизован, перенаправляем на главную
      window.location.href = '/';
    }
  }, []);

  const handleCompanyDataChange = (field: string, value: string) => {
    setCompanyData(prev => ({ ...prev, [field]: value }));
  };

  const saveCompanyData = () => {
    if (currentUser) {
      localStorage.setItem(`company_${currentUser.email}`, JSON.stringify(companyData));
      alert('Данные предприятия сохранены!');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    window.location.href = '/';
  };

  const removeFromCart = (index: number) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
    if (currentUser) {
      localStorage.setItem(`cart_${currentUser.email}`, JSON.stringify(newCart));
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  if (!currentUser) {
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
              <span className="text-gray-600">Добро пожаловать, {currentUser.email}</span>
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
                  placeholder="ООО \"Ваша компания\""
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
                <Label htmlFor="company-description">Описание деятельности</Label>
                <Textarea
                  id="company-description"
                  value={companyData.description}
                  onChange={(e) => handleCompanyDataChange('description', e.target.value)}
                  placeholder="Краткое описание деятельности предприятия"
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
                  <Button 
                    variant="outline" 
                    onClick={() => window.location.href = '/'} 
                    className="mt-4"
                  >
                    Перейти к каталогу
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-gray-500">{item.description}</p>
                        <div className="flex items-center mt-2">
                          <span className="text-sm">Количество: {item.quantity}</span>
                          <span className="ml-4 font-medium">
                            {(item.price * item.quantity).toLocaleString()} ₽
                          </span>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => removeFromCart(index)}
                        className="ml-4"
                      >
                        <Icon name="Trash2" className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center font-bold text-lg">
                      <span>Итого:</span>
                      <span>{getTotalPrice().toLocaleString()} ₽</span>
                    </div>
                    <Button className="w-full mt-4">
                      <Icon name="Send" className="mr-2 h-4 w-4" />
                      Оформить заказ
                    </Button>
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