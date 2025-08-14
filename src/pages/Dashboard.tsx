import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from '@/components/ui/icon';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [user, setUser] = useState<{email: string} | null>(null);

  useEffect(() => {
    // Проверяем авторизацию пользователя
    const savedCredentials = localStorage.getItem('userCredentials');
    if (savedCredentials) {
      const { email } = JSON.parse(savedCredentials);
      setUser({ email });
    } else {
      // Если пользователь не авторизован, перенаправляем на главную
      window.location.href = '/';
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userCredentials');
    window.location.href = '/';
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Icon name="Loader2" className="h-8 w-8 animate-spin mx-auto mb-4" />
          <p>Загрузка...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-primary text-white py-4 px-4 md:px-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="User" className="h-8 w-8" />
            <div>
              <h1 className="text-xl md:text-2xl font-bold">СтальПро</h1>
              <p className="text-sm opacity-90">Личный кабинет</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="/" className="hover:text-gray-200 transition-colors text-sm">
              На главную
            </a>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleLogout}
              className="text-white border-white hover:bg-white hover:text-primary"
            >
              <Icon name="LogOut" className="mr-2 h-4 w-4" />
              Выйти
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-6 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Добро пожаловать!
            </h1>
            <p className="text-lg text-gray-600">
              Добро пожаловать в ваш личный кабинет, <span className="font-semibold">{user.email}</span>
            </p>
          </div>

          {/* Dashboard Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Profile Card */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="User" className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Мой профиль</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Управление личными данными и настройками аккаунта</p>
                <Button size="sm" className="w-full">Редактировать профиль</Button>
              </CardContent>
            </Card>

            {/* Orders Card */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="ShoppingCart" className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Мои заказы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">История заказов и текущий статус доставки</p>
                <Button size="sm" variant="outline" className="w-full">Посмотреть заказы</Button>
              </CardContent>
            </Card>

            {/* Support Card */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Phone" className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Поддержка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Техническая поддержка и консультации по продукции</p>
                <Button size="sm" variant="outline" className="w-full">Связаться</Button>
              </CardContent>
            </Card>

            {/* Catalog Card */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="FileText" className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Каталоги</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Скачать каталоги продукции и технические характеристики</p>
                <Button size="sm" variant="outline" className="w-full">Скачать</Button>
              </CardContent>
            </Card>

            {/* Settings Card */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Settings" className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Настройки</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Настройки уведомлений и конфиденциальности</p>
                <Button size="sm" variant="outline" className="w-full">Настроить</Button>
              </CardContent>
            </Card>

            {/* Products Card */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Package" className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Продукция</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Просмотр полного каталога наших клапанов и комплектующих</p>
                <Button size="sm" variant="outline" className="w-full">Каталог</Button>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Быстрые действия</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button className="flex items-center justify-center">
                <Icon name="Plus" className="mr-2 h-4 w-4" />
                Новый заказ
              </Button>
              <Button variant="outline" className="flex items-center justify-center">
                <Icon name="Download" className="mr-2 h-4 w-4" />
                Скачать прайс
              </Button>
              <Button variant="outline" className="flex items-center justify-center">
                <Icon name="MessageSquare" className="mr-2 h-4 w-4" />
                Задать вопрос
              </Button>
              <Button variant="outline" className="flex items-center justify-center">
                <Icon name="Calculator" className="mr-2 h-4 w-4" />
                Калькулятор
              </Button>
            </div>
          </div>
        </div>
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