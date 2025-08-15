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

          {/* Product Gallery */}
          <div className="flex justify-center">
            {/* ППЦЗ-12 */}
            <Card className="max-w-xs">
              <CardContent className="p-4">
                <div className="aspect-square bg-white rounded-lg mb-3 border overflow-hidden w-40 h-40 mx-auto">
                  <img 
                    src="https://cdn.poehali.dev/files/5b63616f-f204-4d56-a0f3-7223f98ee9d4.jpeg" 
                    alt="Предохранительные клапаны ППЦЗ-12"
                    className="w-full h-full object-contain rounded-lg p-2"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">
                    Предохранительные клапаны ППЦЗ-12
                  </h3>
                  <p className="text-xs text-gray-600 mb-2">
                    Надежная защита оборудования от превышения давления
                  </p>
                  <div className="text-lg font-bold text-primary mb-3">
                    9 000 ₽ <span className="text-xs text-gray-500">с НДС</span>
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