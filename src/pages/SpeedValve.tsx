import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
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
            <a href="/#products" className="text-white font-medium">Продукция</a>
            <a href="/#contacts" className="hover:text-gray-200 transition-colors">Контакты</a>
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

          {/* Product Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* ДУ25 */}
            <Card className="max-w-xs mx-auto">
              <CardContent className="p-4">
                <Popover>
                  <PopoverTrigger asChild>
                    <div className="aspect-square bg-white rounded-lg mb-3 border overflow-hidden w-32 h-32 mx-auto cursor-pointer hover:shadow-lg transition-shadow">
                      <img 
                        src="https://cdn.poehali.dev/files/19f2b4fd-71bc-4185-a13b-ff66d38d80bd.png" 
                        alt="Скоростной клапан межфланцевый ДУ25"
                        className="w-full h-full object-cover object-top rounded-lg"
                        style={{ objectPosition: 'center -90%' }}
                      />
                    </div>
                  </PopoverTrigger>
                  <PopoverContent className="w-96 p-0">
                    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                      <div className="bg-gray-50 p-4 border-b">
                        <h3 className="text-lg font-bold text-gray-900">Технические характеристики ДУ25</h3>
                      </div>
                      <div className="p-4 space-y-3 text-sm">
                        <div><span className="font-semibold">Условное давление:</span> 4,0 МПа (40 кгс/см²)</div>
                        <div><span className="font-semibold">Климатическое исполнение:</span> УХЛI (от -60С до +40С)</div>
                        <div><span className="font-semibold">Температура рабочей среды:</span> не более 300С</div>
                        <div><span className="font-semibold">Присоединение к трубопроводу:</span> межфланцевое</div>
                        <div><span className="font-semibold">Проход условный, DN:</span> 25</div>
                        <div><span className="font-semibold">Строительная длина, B (мм):</span> 35</div>
                        <div><span className="font-semibold">Средний срок службы:</span> 5 лет</div>
                        <div><span className="font-semibold">Материал корпуса:</span> сталь 12X18H10T</div>
                        <div><span className="font-semibold">Материал тарелки:</span> сталь 12X18H10T</div>
                        <div><span className="font-semibold">Пружина:</span> Проволока по ГОСТ9389-75 с покрытием МЗН3</div>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
                <div className="text-center">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">
                    Скоростной клапан межфланцевый ДУ25
                  </h3>
                  <p className="text-xs text-gray-600 mb-2">
                    Компактный быстродействующий клапан для малых диаметров трубопроводов
                  </p>
                  <div className="text-lg font-bold text-primary mb-3">
                    5 500 ₽ <span className="text-xs text-gray-500">с НДС</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <input 
                      type="number" 
                      defaultValue="1" 
                      min="1" 
                      className="w-16 px-2 py-1 text-xs border rounded text-center"
                    />
                    <span className="text-xs text-gray-600">шт.</span>
                  </div>
                  <Button size="sm" className="w-full text-xs">
                    <Icon name="ShoppingCart" className="mr-1 h-3 w-3" />
                    Заказать
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* ДУ32 */}
            <Card className="max-w-xs mx-auto">
              <CardContent className="p-4">
                <Popover>
                  <PopoverTrigger asChild>
                    <div className="aspect-square bg-white rounded-lg mb-3 border overflow-hidden w-32 h-32 mx-auto cursor-pointer hover:shadow-lg transition-shadow">
                      <img 
                        src="https://cdn.poehali.dev/files/073be8ef-8ece-4d3e-8716-87a047249bd2.jpg" 
                        alt="Скоростной клапан межфланцевый ДУ32"
                        className="w-full h-full object-cover object-top rounded-lg"
                        style={{ objectPosition: 'center -90%' }}
                      />
                    </div>
                  </PopoverTrigger>
                  <PopoverContent className="w-96 p-0">
                    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                      <div className="bg-gray-50 p-4 border-b">
                        <h3 className="text-lg font-bold text-gray-900">Технические характеристики ДУ32</h3>
                      </div>
                      <div className="p-4 space-y-3 text-sm">
                        <div><span className="font-semibold">Условное давление:</span> 4,0 МПа (40 кгс/см²)</div>
                        <div><span className="font-semibold">Климатическое исполнение:</span> УХЛI (от -60С до +40С)</div>
                        <div><span className="font-semibold">Температура рабочей среды:</span> не более 300С</div>
                        <div><span className="font-semibold">Присоединение к трубопроводу:</span> межфланцевое</div>
                        <div><span className="font-semibold">Проход условный, DN:</span> 32</div>
                        <div><span className="font-semibold">Строительная длина, B (мм):</span> 40</div>
                        <div><span className="font-semibold">Средний срок службы:</span> 5 лет</div>
                        <div><span className="font-semibold">Материал корпуса:</span> сталь 12X18H10T</div>
                        <div><span className="font-semibold">Материал тарелки:</span> сталь 12X18H10T</div>
                        <div><span className="font-semibold">Пружина:</span> Проволока по ГОСТ9389-75 с покрытием МЗН3</div>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
                <div className="text-center">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">
                    Скоростной клапан межфланцевый ДУ32
                  </h3>
                  <p className="text-xs text-gray-600 mb-2">
                    Надежное решение для средних диаметров с высокой скоростью срабатывания
                  </p>
                  <div className="text-lg font-bold text-primary mb-3">
                    6 100 ₽ <span className="text-xs text-gray-500">с НДС</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <input 
                      type="number" 
                      defaultValue="1" 
                      min="1" 
                      className="w-16 px-2 py-1 text-xs border rounded text-center"
                    />
                    <span className="text-xs text-gray-600">шт.</span>
                  </div>
                  <Button size="sm" className="w-full text-xs">
                    <Icon name="ShoppingCart" className="mr-1 h-3 w-3" />
                    Заказать
                  </Button>
                </div>
              </CardContent>
            </Card>
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