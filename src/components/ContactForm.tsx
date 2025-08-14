import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

export default function ContactForm() {
  return (
    <section id="contacts" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Свяжитесь с нами</h3>
          <p className="text-lg sm:text-xl text-gray-600">Готовы обсудить ваш проект и предложить лучшее решение</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <h4 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Контактная информация</h4>
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
          <div className="mt-8 lg:mt-0">
            <h4 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Задать вопрос</h4>
            <form className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Имя</label>
                <Input placeholder="Ваше имя" className="h-11 sm:h-12" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <Input type="email" placeholder="your@email.com" className="h-11 sm:h-12" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Телефон</label>
                <Input placeholder="+7 (___) ___-__-__" className="h-11 sm:h-12" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Сообщение</label>
                <Textarea placeholder="" rows={4} className="min-h-[100px] sm:min-h-[120px]" />
              </div>
              <Button className="w-full" size="lg">
                <Icon name="Send" className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Отправить заявку
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}