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
import api from "@/services/api";

interface Order {
  id: number;
  totalPrice: number;
  status: string;
  companyName: string;
  items: Array<{ id: string; name: string; price: number; quantity: number }>;
  createdAt: string;
}

const STATUS_LABELS: Record<string, string> = {
  'new': 'Новый',
  'processing': 'В обработке',
  'shipped': 'Отправлен',
  'delivered': 'Доставлен',
  'cancelled': 'Отменён',
};

const STATUS_COLORS: Record<string, string> = {
  'new': 'bg-blue-100 text-blue-800',
  'processing': 'bg-yellow-100 text-yellow-800',
  'shipped': 'bg-purple-100 text-purple-800',
  'delivered': 'bg-green-100 text-green-800',
  'cancelled': 'bg-red-100 text-red-800',
};

const Dashboard = () => {
  const { user, logout } = useAuth();
  const { cart, removeFromCart, updateQuantity, clearCart, getTotalPrice, getTotalItems } = useCart();
  const { showSuccess, showError, showInfo } = useToast();
  const [orders, setOrders] = useState<Order[]>([]);
  const [ordersLoading, setOrdersLoading] = useState(true);
  const [companyData, setCompanyData] = useState({
    name: '',
    inn: '',
    address: '',
    phone: '',
    email: '',
    description: ''
  });

  const loadOrders = () => {
    setOrdersLoading(true);
    api.getOrders()
      .then((data) => setOrders(data.orders || []))
      .catch(() => setOrders([]))
      .finally(() => setOrdersLoading(false));
  };

  useEffect(() => {
    if (user) {
      api.getProfile()
        .then((data) => {
          if (data.profile) {
            setCompanyData(data.profile);
          }
        })
        .catch(() => {
          setCompanyData({
            name: user.company,
            inn: '',
            address: user.address,
            phone: user.phone,
            email: user.email,
            description: ''
          });
        });
      loadOrders();
    }
  }, [user]);

  const handleCompanyDataChange = (field: string, value: string) => {
    setCompanyData(prev => ({ ...prev, [field]: value }));
  };

  const saveCompanyData = async () => {
    if (user) {
      try {
        await api.saveProfile(companyData);
        showSuccess('Данные компании сохранены!');
      } catch {
        showError('Ошибка сохранения данных');
      }
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

                          showInfo('Оформляю заказ...');

                          try {
                            const orderResult = await api.createOrder();

                            const orderData = {
                              company: user?.company || 'Неизвестная компания',
                              contact: user?.name || 'Неизвестный контакт',
                              phone: user?.phone || 'Не указан', 
                              email: user?.email || 'Не указан',
                              address: user?.address || 'Не указан',
                              cart: orderResult.order.items,
                              total: orderResult.order.total,
                              companyData: companyData
                            };

                            clearCart();
                            loadOrders();

                            try {
                              await sendOrderEmail(orderData);
                            } catch {
                              // email необязателен
                            }

                            showSuccess(`Заказ #${orderResult.order.id} успешно оформлен!`);
                          } catch (error) {
                            showError(error instanceof Error ? error.message : 'Ошибка оформления заказа');
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

        {/* История заказов */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Icon name="ClipboardList" className="mr-2 h-5 w-5" />
              История заказов
            </CardTitle>
          </CardHeader>
          <CardContent>
            {ordersLoading ? (
              <div className="flex justify-center py-8">
                <Icon name="Loader2" className="h-8 w-8 animate-spin text-gray-400" />
              </div>
            ) : orders.length === 0 ? (
              <div className="text-center py-8">
                <Icon name="Package" className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">Заказов пока нет</p>
                <p className="text-sm text-gray-400 mt-2">Оформите первый заказ через корзину</p>
              </div>
            ) : (
              <div className="space-y-4">
                {orders.map((order) => (
                  <div key={order.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-semibold text-lg">Заказ #{order.id}</h4>
                        <p className="text-sm text-gray-500">
                          {new Date(order.createdAt).toLocaleDateString('ru-RU', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${STATUS_COLORS[order.status] || 'bg-gray-100 text-gray-800'}`}>
                          {STATUS_LABELS[order.status] || order.status}
                        </span>
                        <span className="font-bold text-lg">{order.totalPrice.toLocaleString()} ₽</span>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-md p-3">
                      <div className="space-y-1">
                        {order.items.map((item, idx) => (
                          <div key={idx} className="flex justify-between text-sm">
                            <span className="text-gray-700">{item.name} x{item.quantity}</span>
                            <span className="text-gray-600">{(item.price * item.quantity).toLocaleString()} ₽</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;