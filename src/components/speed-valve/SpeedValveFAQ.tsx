import { useState } from 'react';
import Icon from '@/components/ui/icon';

const faqItems = [
  {
    question: 'Чем скоростной клапан отличается от предохранительного?',
    answer: 'Скоростной клапан срабатывает при резком увеличении скорости потока СУГ (аварийный разрыв трубопровода), а предохранительный — при превышении давления. Это разные защитные устройства, выполняющие разные функции.',
  },
  {
    question: 'Как правильно выбрать диаметр клапана ДУ25, ДУ32, ДУ40 или ДУ50?',
    answer: 'Диаметр клапана должен соответствовать условному проходу трубопровода. ДУ25 — для малых систем и сливных трубопроводов, ДУ32 и ДУ40 — для средних, ДУ50 — для крупных объектов (автоцистерны, большие АГЗС). Для точного подбора звоните: +7 960 937-35-42.',
  },
  {
    question: 'Является ли клапан ТПА11 аналогом ZNW и VENGO?',
    answer: 'Да. Клапан ТПА11 является полным функциональным аналогом импортных скоростных клапанов ZNW, VENGO, AZT и КС-40. Имеет сертификат EAC, выполнен из нержавеющей стали 12X18H10T, подходит для тех же условий применения.',
  },
  {
    question: 'Нужно ли специальное обслуживание клапана ТПА11?',
    answer: 'Клапан не требует регулярного обслуживания. После срабатывания (аварийного закрытия) сброс выполняется вручную: нужно медленно открыть запорную арматуру перед клапаном — давление выровняется и пружина вернёт тарель в рабочее положение.',
  },
  {
    question: 'Возможна ли доставка по всей России?',
    answer: 'Да. Клапаны ТПА11 отправляем транспортными компаниями (СДЭК, Деловые Линии, ПЭК) по всей России. Склад в Барнауле, отгрузка в день заказа при наличии товара. Также доступна доставка через маркетплейс Ozon.',
  },
  {
    question: 'Есть ли документы — сертификат и паспорт на клапан?',
    answer: 'Да. В комплекте поставки — паспорт изделия с сертификатом EAC. Документы можно скачать на сайте (кнопка "Паспорт" на странице товара) или запросить по email sadoxa1996@mail.ru.',
  },
];

interface SpeedValveFAQProps {
  du?: string;
}

export default function SpeedValveFAQ({ du }: SpeedValveFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const title = du
    ? `Частые вопросы о скоростном клапане ТПА11-0${du.padStart(2, '0')} ДУ${du}`
    : 'Частые вопросы о скоростных клапанах ТПА11';

  return (
    <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8 mt-8">
      <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <Icon name="HelpCircle" className="h-5 w-5 text-primary" />
        {title}
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
