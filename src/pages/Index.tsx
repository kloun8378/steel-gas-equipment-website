import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Icon name="Factory" className="h-8 w-8 text-primary mr-3" />
              <h1 className="text-2xl font-bold text-gray-900">СтальПро</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-primary transition-colors">Главная</a>
              <a href="#products" className="text-gray-700 hover:text-primary transition-colors">Продукция</a>
              <a href="#certificates" className="text-gray-700 hover:text-primary transition-colors">Сертификаты</a>
              <a href="#contacts" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="hidden md:inline-flex">
              Связаться с нами
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden">
        <div className="bg-gradient-to-br from-primary to-blue-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h2 className="text-5xl font-bold mb-6">
                  Промышленное газовое оборудование
                </h2>
                <p className="text-xl mb-8 text-blue-100">
                  Надёжные решения для промышленности. Современные технологии, высокое качество, безопасность.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" variant="secondary" className="text-primary">
                    <Icon name="Wrench" className="mr-2 h-5 w-5" />
                    Наша продукция
                  </Button>
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                    <Icon name="Phone" className="mr-2 h-5 w-5" />
                    Консультация
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/img/ba259903-40cb-48e5-98a0-a2c17968de14.jpg" 
                  alt="Промышленное газовое оборудование"
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Почему выбирают нас</h3>
            <p className="text-xl text-gray-600">Многолетний опыт и высокие стандарты качества</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Безопасность</h4>
              <p className="text-gray-600">Все оборудование соответствует международным стандартам безопасности</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Качество</h4>
              <p className="text-gray-600">Высококачественные материалы и современные технологии производства</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Поддержка</h4>
              <p className="text-gray-600">Техническая поддержка и обслуживание на всех этапах эксплуатации</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Наша продукция</h3>
            <p className="text-xl text-gray-600">Полный спектр промышленного газового оборудования</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Zap" className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Скоростной клапан</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Быстрозакрывающиеся клапаны для аварийного отключения газопроводов</p>
                <Badge>Безопасность</Badge>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="ShieldCheck" className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Предохранительный клапан</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Автоматические клапаны для защиты от превышения давления в системах</p>
                <Badge variant="secondary">Надёжность</Badge>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Package" className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Комплектующие</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Широкий ассортимент деталей и компонентов для газового оборудования</p>
                <Badge variant="outline">В наличии</Badge>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Сертификаты качества</h3>
            <p className="text-xl text-gray-600">Наше оборудование сертифицировано по международным стандартам</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="FileText" className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">ISO 9001</h4>
              <p className="text-sm text-gray-600">Система менеджмента качества</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">ГОСТ Р</h4>
              <p className="text-sm text-gray-600">Соответствие российским стандартам</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="CheckCircle" className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">CE</h4>
              <p className="text-sm text-gray-600">Европейское соответствие</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">EAC</h4>
              <p className="text-sm text-gray-600">Евразийское соответствие</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Свяжитесь с нами</h3>
            <p className="text-xl text-gray-600">Готовы обсудить ваш проект и предложить лучшее решение</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-semibold mb-6">Контактная информация</h4>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <Icon name="MapPin" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Адрес</p>
                    <p className="text-gray-600">Алтайский край, г. Барнаул, ул. Кавалерийская 14, бокс 171</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <Icon name="Phone" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Телефон</p>
                    <p className="text-gray-600">+7 960 937-35-42, +7 960 950-59-04</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <Icon name="Mail" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">sadoxa1996@mail.ru</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <Icon name="Clock" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Режим работы</p>
                    <p className="text-gray-600">Пн-Пт: 9:00-18:00</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-2xl font-semibold mb-6">Оставьте заявку</h4>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Имя</label>
                  <Input placeholder="Ваше имя" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Телефон</label>
                  <Input placeholder="+7 (___) ___-__-__" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Сообщение</label>
                  <Textarea placeholder="Расскажите о вашем проекте..." rows={4} />
                </div>
                <Button className="w-full" size="lg">
                  <Icon name="Send" className="mr-2 h-5 w-5" />
                  Отправить заявку
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

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
                <li><a href="#" className="hover:text-white transition-colors">Газовые редукторы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Горелки</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Арматура</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Автоматика</a></li>
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
};

export default Index;