import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const faqData = [
  {
    id: 1,
    category: "Продукция",
    question: "Какие типы газовых клапанов вы производите?",
    answer: "Мы производим широкий спектр газовой арматуры: скоростные клапаны аварийного отключения (ДУ15-ДУ300), предохранительные клапаны ППЦЗ-12, электромагнитные клапаны высокого давления, регуляторы давления, фильтры и комплектующие. Вся продукция сертифицирована для использования на газопроводах России."
  },
  {
    id: 2,
    category: "Качество",
    question: "Есть ли сертификаты на вашу продукцию?",
    answer: "Да, вся наша продукция имеет сертификаты соответствия ТР ТС 032/2013, разрешения Ростехнадзора на применение, сертификаты пожарной безопасности. Предоставляем паспорта качества, протоколы испытаний и всю необходимую документацию."
  },
  {
    id: 3,
    category: "География",
    question: "В какие регионы вы поставляете оборудование?",
    answer: "Мы осуществляем поставки по всей России: Сибирь, Урал, Дальний Восток, Поволжье, Центральная Россия. Основная производственная база находится в Барнауле, Алтайский край. Имеем партнеров в крупных городах для быстрой доставки."
  },
  {
    id: 4,
    category: "Гарантии",
    question: "Какая гарантия на оборудование?",
    answer: "Предоставляем гарантию от 24 месяцев на все изделия. Срок службы клапанов до 15 лет при правильной эксплуатации. Осуществляем гарантийное и послегарантийное обслуживание, поставку запасных частей, техническую поддержку."
  },
  {
    id: 5,
    category: "Заказ",
    question: "Как оформить заказ на газовую арматуру?",
    answer: "Заказ можно оформить по телефонам +7 960 937-35-42, +7 960 950-59-04 или email sadoxa1996@mail.ru. Наши специалисты помогут подобрать оборудование, рассчитают стоимость с доставкой, подготовят коммерческое предложение."
  },
  {
    id: 6,
    category: "Доставка",
    question: "Сколько времени занимает изготовление и доставка?",
    answer: "Стандартные позиции со склада отгружаем в течение 1-3 дней. Изготовление под заказ 5-20 рабочих дней в зависимости от сложности. Доставка по России 2-10 дней транспортными компаниями или нашим транспортом."
  },
  {
    id: 7,
    category: "Технические вопросы",
    question: "Какое давление выдерживают ваши клапаны?",
    answer: "Рабочее давление до 1,6 МПа для стандартных моделей, до 4,0 МПа для клапанов высокого давления. Температурный диапазон от -40°C до +80°C. Все клапаны проходят гидравлические и пневматические испытания."
  },
  {
    id: 8,
    category: "Монтаж",
    question: "Предоставляете ли услуги по монтажу?",
    answer: "Да, выполняем монтаж, наладку и пуско-наладочные работы силами аттестованных специалистов. Проводим инструктаж персонала заказчика, составляем исполнительную документацию, оформляем акты ввода в эксплуатацию."
  },
  {
    id: 9,
    category: "Запчасти",
    question: "Есть ли в наличии запасные части?",
    answer: "Постоянно на складе: пружины, золотники, ремкомплекты для ППЦЗ-12, мембраны, прокладки, уплотнения. Изготавливаем запчасти для снятых с производства моделей. Срок поставки запчастей 1-7 дней."
  },
  {
    id: 10,
    category: "Сервис",
    question: "Какие сервисные услуги вы предоставляете?",
    answer: "Техническое обслуживание, ремонт, модернизация газового оборудования. Диагностика, поверка, калибровка КИП. Выездные бригады для аварийно-восстановительных работ. Консультации по подбору и эксплуатации оборудования."
  },
  {
    id: 11,
    category: "Цены",
    question: "Где посмотреть цены на продукцию?",
    answer: "Актуальный прайс-лист высылаем по запросу на email или предоставляем менеджеры по телефону. Цены зависят от объема заказа, комплектации, сроков поставки. Для постоянных клиентов действует гибкая система скидок."
  },
  {
    id: 12,
    category: "Проектирование",
    question: "Помогаете ли с проектированием газовых систем?",
    answer: "Наши инженеры оказывают техническую поддержку на всех этапах: подбор оборудования по техническим условиям, расчеты, схемы обвязки, рекомендации по размещению. Участвуем в экспертизе проектной документации."
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("Все");

  const categories = ["Все", ...Array.from(new Set(faqData.map(item => item.category)))];
  
  const filteredFAQ = selectedCategory === "Все" 
    ? faqData 
    : faqData.filter(item => item.category === selectedCategory);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead 
        title="FAQ - Часто задаваемые вопросы | СтальПро"
        description="Ответы на популярные вопросы о газовой арматуре, клапанах, доставке, гарантии и сервисе от СтальПро. Полезная информация для клиентов."
      />
      <Header />
      
      <main className="flex-1">
        {/* Hero секция */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Icon name="MessageCircleQuestion" className="h-16 w-16 mx-auto mb-6 text-white" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Часто задаваемые вопросы
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Полные ответы на популярные вопросы о нашей продукции, услугах и сотрудничестве
              </p>
            </div>
          </div>
        </section>

        {/* Фильтры категорий */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ контент */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-4">
              {filteredFAQ.map((faq) => (
                <div key={faq.id} className="bg-white border border-gray-200 rounded-lg shadow-sm">
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div>
                      <span className="inline-block bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded-full mb-2">
                        {faq.category}
                      </span>
                      <h3 className="font-semibold text-gray-900">{faq.question}</h3>
                    </div>
                    <Icon 
                      name={openItems.includes(faq.id) ? "ChevronUp" : "ChevronDown"} 
                      className="h-5 w-5 text-gray-500 flex-shrink-0 ml-4" 
                    />
                  </button>
                  
                  {openItems.includes(faq.id) && (
                    <div className="px-6 pb-4">
                      <div className="pt-2 border-t border-gray-100">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA секция */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Icon name="Phone" className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h2 className="text-3xl font-bold mb-4">Не нашли ответ на вопрос?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Свяжитесь с нашими специалистами для получения персональной консультации
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Icon name="Phone" className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-2">Телефон</h3>
                <p className="text-sm text-gray-600">
                  +7 960 937-35-42<br />
                  +7 960 950-59-04
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Icon name="Mail" className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-sm text-gray-600">sadoxa1996@mail.ru</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Icon name="MapPin" className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-2">Адрес</h3>
                <p className="text-sm text-gray-600">
                  г. Барнаул<br />
                  ул. Кавалерийская 14, бокс 171
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}