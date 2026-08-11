import { useState } from 'react';
import Icon from '@/components/ui/icon';

const faqItems = [
  {
    question: 'Для каких насосов подходит рама Corken FD 150?',
    answer: 'Рама предназначена для насосов Corken серии FD и совместимого оборудования для перекачки СУГ на АГЗС и ГНС.',
  },
  {
    question: 'Можно ли использовать раму со старым насосом при ремонте?',
    answer: 'Да, рама подходит для замены изношенной или повреждённой штатной рамы при капитальном ремонте насосного агрегата — посадочные размеры соответствуют оригиналу.',
  },
  {
    question: 'Нужна ли дополнительная подготовка основания перед монтажом?',
    answer: 'Да, рекомендуется ровное жёсткое основание без вибрации — это увеличивает срок службы насоса и предотвращает перекос вала.',
  },
  {
    question: 'Возможна ли доставка по всей России?',
    answer: 'Да. Склад в Барнауле, отгрузка в день заказа при наличии товара. Доставка транспортными компаниями по всей России, а также через маркетплейс Ozon.',
  },
  {
    question: 'Есть ли в наличии другое насосное оборудование для СУГ?',
    answer: 'Ассортимент расширяется. Актуальное наличие и сроки поставки уточняйте по телефону +7 960 937-35-42.',
  },
];

export default function PumpEquipmentFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8 mt-8">
      <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <Icon name="HelpCircle" className="h-5 w-5 text-primary" />
        Частые вопросы о насосном оборудовании
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
