import { useState } from 'react';
import Icon from '@/components/ui/icon';

const faqItemsByModel = {
  'ppcz-12': [
    {
      question: 'Чем предохранительный клапан отличается от скоростного?',
      answer: 'Предохранительный клапан ППЦЗ-12 срабатывает при превышении давления в системе (1,6–1,84 МПа), а скоростной — при резком увеличении скорости потока СУГ (аварийный разрыв трубопровода). Это разные защитные устройства, которые часто устанавливают вместе.',
    },
    {
      question: 'Нужна ли регулировка давления срабатывания клапана ППЦЗ-12?',
      answer: 'Нет. Клапан настраивается на заводе на диапазон 1,6–1,84 МПа и не требует самостоятельной регулировки после установки.',
    },
    {
      question: 'Какой аналог у клапана ППЦЗ-12?',
      answer: 'Клапан ППЦЗ-12 — российский аналог зарубежных предохранительных клапанов REGO RS3132 и REGO CD32, совместим по посадочным размерам и параметрам давления.',
    },
    {
      question: 'Как часто нужно менять пружину или золотник клапана?',
      answer: 'Назначенный срок службы клапана ППЦЗ-12 — 10 лет по паспорту изготовителя. При необходимости замены отдельные комплектующие (пружину, золотник, фланцы) можно заказать отдельно в разделе «Комплектующие».',
    },
    {
      question: 'Есть ли сертификат EAC на клапан?',
      answer: 'Да. В комплекте поставки — паспорт изделия с сертификатом EAC. Документы можно запросить по email sadoxa1996@mail.ru.',
    },
  ],
  'pk-32-l': [
    {
      question: 'Чем предохранительный клапан отличается от скоростного?',
      answer: 'Предохранительный клапан ПК-32-Л срабатывает при превышении давления в системе, а скоростной — при резком увеличении скорости потока СУГ (аварийный разрыв трубопровода). Это разные защитные устройства, которые часто устанавливают вместе.',
    },
    {
      question: 'Зачем в комплекте ПК-32-Л запорный клапан ЗК-32?',
      answer: 'Запорный клапан ЗК-32 позволяет отключить предохранительный клапан ПК-32-Л для обслуживания или замены без стравливания давления во всей системе резервуара.',
    },
    {
      question: 'На какой диаметр трубопровода рассчитан ПК-32-Л?',
      answer: 'Клапан ПК-32-Л рассчитан на условный диаметр DN32, подходит для резервуаров и автоцистерн СУГ с соответствующим присоединением.',
    },
    {
      question: 'Как часто нужно проверять клапан ПК-32-Л?',
      answer: 'Периодичность проверки определяется регламентом эксплуатации объекта СУГ. При необходимости замены комплектующие можно заказать отдельно в разделе «Комплектующие».',
    },
    {
      question: 'Есть ли сертификат EAC на клапан?',
      answer: 'Да. В комплекте поставки — паспорт изделия с сертификатом EAC. Документы можно запросить по email sadoxa1996@mail.ru.',
    },
  ],
};

interface SafetyValveFAQProps {
  model?: 'ppcz-12' | 'pk-32-l';
}

const titleByModel: Record<string, string> = {
  'ppcz-12': 'Частые вопросы о предохранительном клапане ППЦЗ-12',
  'pk-32-l': 'Частые вопросы о предохранительном клапане ПК-32-Л',
};

export default function SafetyValveFAQ({ model = 'ppcz-12' }: SafetyValveFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqItems = faqItemsByModel[model];

  return (
    <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8 mt-8">
      <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <Icon name="HelpCircle" className="h-5 w-5 text-primary" />
        {titleByModel[model]}
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