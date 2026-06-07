import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import api from "@/services/api";
import { useToast } from "@/hooks/useToast";

export default function ContactForm() {
  const { showSuccess, showError } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await api.sendEmail({
        type: 'contact',
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      });

      setFormData({ name: '', email: '', phone: '', message: '' });
      showSuccess('Сообщение отправлено! В ближайшее время с вами свяжется наш менеджер');
      
    } catch {
      showError('Ошибка отправки. Попробуйте еще раз');
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <a
                href="https://2gis.ru/barnaul/firm/70000001099007177/83.669911%2C53.381012?m=83.672704%2C53.378973%2F16.76"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#1C9B48] hover:bg-[#178040] text-white px-4 py-3 rounded-lg transition-colors w-fit"
              >
                <img src="https://cdn.poehali.dev/files/d4c4dcf3-0809-4058-bcc8-e73dd9734d5e.png" alt="2ГИС" className="hidden" />
                <span className="font-medium">Мы на 2ГИС</span>
                <Icon name="ExternalLink" className="h-4 w-4" />
              </a>
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
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Имя</label>
                <Input 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Ваше имя" 
                  className="h-11 sm:h-12"
                  required 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <Input 
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com" 
                  className="h-11 sm:h-12"
                  required 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Телефон</label>
                <Input 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+7 (___) ___-__-__" 
                  className="h-11 sm:h-12"
                  required 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Сообщение</label>
                <Textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Опишите ваш вопрос или проект" 
                  rows={4} 
                  className="min-h-[100px] sm:min-h-[120px]"
                  required 
                />
              </div>
              <Button 
                type="submit" 
                className="w-full" 
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Icon name="Loader" className="mr-2 h-4 w-4 sm:h-5 sm:w-5 animate-spin" />
                    Отправляем...
                  </>
                ) : (
                  <>
                    <Icon name="Send" className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    Отправить заявку
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>

        {/* Карта 2ГИС */}
        <div className="mt-12">
          <h4 className="text-xl font-semibold mb-4 text-gray-900">Как нас найти</h4>
          <div className="rounded-xl overflow-hidden border border-gray-200" style={{height: '360px'}}>
            <iframe
              src="https://widgets.2gis.com/widget?type=firmsonmap&options=%7B%22pos%22%3A%7B%22lat%22%3A53.381012%2C%22lon%22%3A83.669911%2C%22zoom%22%3A16%7D%2C%22opt%22%3A%7B%22city%22%3A%22barnaul%22%7D%2C%22org%22%3A%7B%22id%22%3A%2270000001099007177%22%7D%7D"
              width="100%"
              height="360"
              allowFullScreen
              title="СтальПроКлапан на карте 2ГИС"
              style={{border: 0}}
            />
          </div>
        </div>
      </div>
    </section>
  );
}