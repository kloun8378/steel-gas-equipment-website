import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from '@/components/ui/icon';

export default function SpeedValve() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-primary text-white py-4 px-4 md:px-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Zap" className="h-8 w-8" />
            <div>
              <h1 className="text-xl md:text-2xl font-bold">СТАРТКЛАПАН</h1>
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
            <span>Скоростной клапан</span>
          </div>

          {/* Page Title */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Скоростной клапан
            </h1>
            <p className="text-lg text-gray-600">
              Высокоскоростные клапанные решения для промышленных применений
            </p>
          </div>

          {/* Product Tabs */}
          <div className="mb-8">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                <button className="border-b-2 border-primary text-primary py-2 px-1 text-sm font-medium">
                  Скоростной межфланцевый клапан
                </button>
              </nav>
            </div>
          </div>

          {/* Product Content */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                    <Icon name="Settings" className="h-24 w-24 text-gray-400" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Скоростной межфланцевый клапан</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Высокоскоростной межфланцевый клапан обеспечивает быстрое и надежное 
                      перекрытие потока в трубопроводных системах.
                    </p>
                    
                    <div>
                      <h3 className="font-semibold mb-2">Особенности:</h3>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Время срабатывания менее 0.5 секунды</li>
                        <li>Межфланцевое соединение</li>
                        <li>Высокая герметичность</li>
                        <li>Устойчивость к коррозии</li>
                        <li>Простота обслуживания</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Технические характеристики:</h3>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>Диаметр: DN 50-300</div>
                        <div>Давление: PN 16-40</div>
                        <div>Температура: -20°C до +180°C</div>
                        <div>Материал: Нержавеющая сталь</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="flex-1">
                  <Icon name="FileText" className="mr-2 h-5 w-5" />
                  Скачать каталог
                </Button>
                <Button size="lg" variant="outline" className="flex-1">
                  <Icon name="Phone" className="mr-2 h-5 w-5" />
                  Получить консультацию
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 md:px-6 mt-16">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Zap" className="h-6 w-6" />
                <span className="font-bold text-lg">СТАРТКЛАПАН</span>
              </div>
              <p className="text-gray-400 text-sm">
                Надежные клапанные решения для промышленности
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p>+7 960 937-35-42</p>
                <p>info@startklапan.ru</p>
                <p>г. Москва, ул. Промышленная, 1</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Продукция</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p>Скоростные клапаны</p>
                <p>Предохранительные клапаны</p>
                <p>Регулирующая арматура</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-400">
            <p>&copy; 2024 СТАРТКЛАПАН. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}