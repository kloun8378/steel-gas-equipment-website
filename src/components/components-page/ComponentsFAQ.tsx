import { useState } from 'react';
import Icon from '@/components/ui/icon';

const faqItems = [
  {
    question: 'Подойдут ли эти комплектующие для старых клапанов ППЦЗ-12?',
    answer: 'Да, детали совместимы с клапанами ППЦЗ-12 разных годов выпуска по стандартным посадочным размерам. Если сомневаетесь — пришлите фото маркировки клапана, поможем подобрать точно.',
  },
  {
    question: 'Можно ли заменить пружину и золотник самостоятельно?',
    answer: 'Да, замена не требует специального оборудования, но клапан нужно предварительно отключить от системы под давлением. Рекомендуем привлекать специалиста, обслуживающего газовое оборудование.',
  },
  {
    question: 'Подходят ли фланцы для автоцистерн и стационарных резервуаров?',
    answer: 'Да, фланцы на 4 и 8 отверстий предназначены для крепления предохранительной арматуры как на автоцистернах, так и на стационарных резервуарах СУГ.',
  },
  {
    question: 'Есть ли комплектующие для клапанов ТПА11?',
    answer: 'Да, у нас в наличии запчасти для клапанов серии ТПА11. Уточните нужную деталь по телефону +7 960 937-35-42.',
  },
  {
    question: 'Как быстро отправляете заказ?',
    answer: 'Склад в Барнауле, отгрузка в день заказа при наличии товара. Доставка транспортными компаниями по всей России, а также через маркетплейс Ozon.',
  },
];

export default function ComponentsFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8 mt-8">
      <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <Icon name="HelpCircle" className="h-5 w-5 text-primary" />
        Частые вопросы о комплектующих
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
