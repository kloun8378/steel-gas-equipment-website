import { useState } from 'react';
import Icon from '@/components/ui/icon';

const faqItems = [
  {
    question: 'Что означает стандарт ГОСТ 33259-2015?',
    answer: 'ГОСТ 33259-2015 — межгосударственный стандарт на фланцы арматуры, соединительных частей и трубопроводов, устанавливающий типы, конструкцию, размеры и технические требования к фланцевым соединениям.',
  },
  {
    question: 'Как подобрать нужный диаметр фланца?',
    answer: 'Диаметр фланца должен соответствовать условному проходу трубопровода или присоединительному размеру арматуры. Если сомневаетесь — уточните диаметр по телефону +7 960 937-35-42.',
  },
  {
    question: 'На какое давление рассчитаны фланцы?',
    answer: 'Фланцы изготовлены для давления PN16, что соответствует требованиям большинства промышленных трубопроводных систем общего назначения.',
  },
  {
    question: 'Возможна ли доставка по всей России?',
    answer: 'Да. Склад в Барнауле, отгрузка в день заказа при наличии товара. Доставка транспортными компаниями по всей России, а также через маркетплейс Ozon.',
  },
  {
    question: 'Есть ли документы на фланцы?',
    answer: 'Да, в комплекте поставки — сертификат соответствия ГОСТ 33259-2015. Документы можно запросить по email sadoxa1996@mail.ru.',
  },
];

export default function FlangesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8 mt-8">
      <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <Icon name="HelpCircle" className="h-5 w-5 text-primary" />
        Частые вопросы о фланцах ГОСТ 33259-2015
      </h2>
      <div className="space-y-3">
        {faqItems.map((item, i) => (
          <div key={i} className="border border-gray-100 rounded-xl overflow-hidden">
            <button
              className="w-full text-left px-5 py-4 flex items-center justify-between gap-3 hover:bg-gray-50 transition-colors"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <span className="font-medium text-gray-900 text-sm sm:text-base">{item.question}</span>
              <Icon
                name={openIndex === i ? 'ChevronUp' : 'ChevronDown'}
                className="h-4 w-4 text-gray-400 flex-shrink-0"
              />
            </button>
            {openIndex === i && (
              <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-50 pt-3">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}