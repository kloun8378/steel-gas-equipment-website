import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from '@/components/ui/icon';

export default function SpeedValve() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-primary text-white py-3 sm:py-4 px-4 md:px-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Zap" className="h-6 w-6 sm:h-8 sm:w-8" />
            <div>
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold">СтальПро</h1>
              <p className="text-xs sm:text-sm opacity-90">Клапанные технологии</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-4 lg:space-x-6 text-sm">
            <a href="/" className="hover:text-gray-200 transition-colors">Главная</a>
            <a href="#" className="text-white font-medium">Продукция</a>
            <a href="#" className="hover:text-gray-200 transition-colors">Контакты</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-6 py-6 sm:py-8">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-4 sm:mb-6 text-sm text-gray-600">
            <a href="/" className="hover:text-primary">Главная</a>
            <span className="mx-2">/</span>
            <span>Скоростной клапан</span>
          </div>

          {/* Page Title */}
          <div className="mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Скоростной клапан
            </h1>
            <p className="text-base sm:text-lg text-gray-600">
              Высокоскоростные клапанные решения для промышленных применений
            </p>
          </div>

          {/* Product Tabs */}
          <div className="mb-6 sm:mb-8 overflow-x-auto">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex whitespace-nowrap">
                <button className="border-b-2 border-primary text-primary py-2 px-3 sm:px-4 text-xs sm:text-sm font-medium flex-shrink-0">
                  Скоростной межфланцевый клапан
                </button>
              </nav>
            </div>
          </div>

          {/* Product Content */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Product Image */}
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                    <img 
                      src="/img/70147842-87f4-40cf-97b7-d798329eed19.jpg" 
                      alt="Скоростной межфланцевый клапан ДУ 25"
                      className="w-full h-full object-contain rounded-lg"
                    />
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
                        <div>Диаметр: DN 25</div>
                        <div>Давление: PN 16-40</div>
                        <div>Температура: -20°C до +180°C</div>
                        <div>Материал: Нержавеющая сталь</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button size="lg" className="flex-1 text-sm sm:text-base">
                  <Icon name="FileText" className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Скачать каталог
                </Button>
                <Button size="lg" variant="outline" className="flex-1 text-sm sm:text-base">
                  <Icon name="Phone" className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Получить консультацию
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-4">
                <Icon name="Factory" className="h-6 w-6 sm:h-8 sm:w-8 text-primary mr-3" />
                <h5 className="text-lg sm:text-xl font-bold">СтальПро</h5>
              </div>
              <p className="text-gray-400 text-sm sm:text-base">Надёжные решения промышленного газового оборудования для вашего бизнеса.</p>
            </div>
            <div>
              <h6 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Продукция</h6>
              <ul className="space-y-1 sm:space-y-2 text-gray-400 text-sm sm:text-base">
                <li><a href="/speed-valve" className="hover:text-white transition-colors">Скоростной клапан</a></li>
                <li><a href="/safety-valve" className="hover:text-white transition-colors">Предохранительный клапан</a></li>
                <li><a href="/components" className="hover:text-white transition-colors">Комплектующие</a></li>
              </ul>
            </div>

            <div className="sm:col-span-2 lg:col-span-1">
              <h6 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Контакты</h6>
              <ul className="space-y-1 sm:space-y-2 text-gray-400 text-sm sm:text-base">
                <li>Алтайский край, г. Барнаул, ул. Кавалерийская 14, бокс 171</li>
                <li><a href="tel:+79609373542" className="hover:text-white transition-colors">+7 960 937-35-42</a>, <a href="tel:+79609505904" className="hover:text-white transition-colors">+7 960 950-59-04</a></li>
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