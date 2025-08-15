import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from '@/components/ui/icon';

export default function SafetyValve() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-primary text-white py-4 px-4 md:px-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="ShieldCheck" className="h-8 w-8" />
            <div>
              <h1 className="text-xl md:text-2xl font-bold">СтальПро</h1>
              <p className="text-sm opacity-90">Клапанные технологии</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6 text-sm">
            <a href="/" className="hover:text-gray-200 transition-colors">Главная</a>
            <a href="#" className="text-white font-medium">Продукция</a>
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

          {/* Product Content */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                    <Icon name="ShieldCheck" className="h-24 w-24 text-gray-400" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Предохранительные клапаны</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Предохранительные клапаны обеспечивают автоматическую защиту систем 
                      и оборудования от превышения допустимого давления.
                    </p>
                    
                    <div>
                      <h3 className="font-semibold mb-2">Типы клапанов:</h3>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Пружинные предохранительные клапаны</li>
                        <li>Мембранные предохранительные устройства</li>
                        <li>Рычажно-грузовые клапаны</li>
                        <li>Импульсные предохранительные устройства</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Области применения:</h3>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Паровые и водогрейные котлы</li>
                        <li>Сосуды под давлением</li>
                        <li>Трубопроводы высокого давления</li>
                        <li>Компрессорные установки</li>
                        <li>Химические реакторы</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Технические характеристики:</h3>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>Диаметр: DN 15-500</div>
                        <div>Давление: PN 10-160</div>
                        <div>Температура: -40°C до +500°C</div>
                        <div>Среда: Пар, газ, жидкость</div>
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

          {/* Additional Info Section */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Icon name="Award" className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Сертификация</h3>
                <p className="text-sm text-gray-600">Все клапаны имеют необходимые сертификаты соответствия</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Icon name="Wrench" className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Обслуживание</h3>
                <p className="text-sm text-gray-600">Полное техническое обслуживание и ремонт клапанов</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Icon name="Truck" className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Доставка</h3>
                <p className="text-sm text-gray-600">Быстрая доставка по всей России</p>
              </CardContent>
            </Card>
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