import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';

export default function Components() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-primary text-white py-4 px-4 md:px-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Settings" className="h-8 w-8" />
            <div>
              <h1 className="text-xl md:text-2xl font-bold">СтальПро</h1>
              <p className="text-sm opacity-90">Клапанные технологии</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6 text-sm">
            <a href="/" className="hover:text-gray-200 transition-colors">Главная</a>
            <a href="#" className="text-white font-medium">Продукция</a>
            <a href="#" className="hover:text-gray-200 transition-colors">О компании</a>
            <a href="#" className="hover:text-gray-200 transition-colors">Контакты</a>
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

          {/* Components Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Cog" className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Приводы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Электрические, пневматические и гидравлические приводы для автоматизации клапанов</p>
                <div className="flex gap-2">
                  <Badge>Автоматизация</Badge>
                  <Badge variant="secondary">Надёжность</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Gauge" className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Датчики положения</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Контроль и мониторинг положения затвора клапанов в режиме реального времени</p>
                <div className="flex gap-2">
                  <Badge>Мониторинг</Badge>
                  <Badge variant="secondary">Точность</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Zap" className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Электромагнитные клапаны</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Быстродействующие электромагнитные клапаны для управления потоками</p>
                <div className="flex gap-2">
                  <Badge>Скорость</Badge>
                  <Badge variant="secondary">Управление</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Wrench" className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Запорные элементы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Высококачественные затворы, седла и уплотнения для различных типов клапанов</p>
                <div className="flex gap-2">
                  <Badge>Герметичность</Badge>
                  <Badge variant="secondary">Износостойкость</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Activity" className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Регуляторы давления</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Точные регуляторы для поддержания заданного давления в системах</p>
                <div className="flex gap-2">
                  <Badge>Регулирование</Badge>
                  <Badge variant="secondary">Стабильность</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Filter" className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Фильтры</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Фильтрующие элементы для защиты клапанов от загрязнений</p>
                <div className="flex gap-2">
                  <Badge>Защита</Badge>
                  <Badge variant="secondary">Чистота</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Services */}
          <div className="bg-white rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Дополнительные услуги</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Icon name="Wrench" className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Монтаж и наладка</h3>
                <p className="text-sm text-gray-600">Профессиональная установка и настройка оборудования</p>
              </div>
              
              <div className="text-center">
                <Icon name="Settings" className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Техническое обслуживание</h3>
                <p className="text-sm text-gray-600">Регулярное обслуживание и профилактический ремонт</p>
              </div>
              
              <div className="text-center">
                <Icon name="Phone" className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Техподдержка 24/7</h3>
                <p className="text-sm text-gray-600">Круглосуточная техническая поддержка специалистов</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Icon name="FileText" className="mr-2 h-5 w-5" />
                Скачать каталог комплектующих
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="Phone" className="mr-2 h-5 w-5" />
                Получить консультацию
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