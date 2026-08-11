import Icon from "@/components/ui/icon";

const usageItems = [
  { icon: "Truck", text: "Перекачка СУГ между резервуарами, автоцистернами и раздаточными колонками на АГЗС и ГНС" },
  { icon: "ShieldCheck", text: "Усиленная стальная рама предотвращает перекосы двигателя и насоса при монтаже" },
  { icon: "Gauge", text: "Совместима с насосами Corken серии FD — заменяет штатную раму при ремонте" },
];

const mountingRules = [
  { icon: "AlertTriangle", text: "Монтаж рамы выполнять на ровное жёсткое основание, исключающее вибрацию узла" },
  { icon: "Wrench", text: "Крепление насоса и двигателя к раме — согласно посадочным отверстиям производителя Corken" },
  { icon: "RotateCcw", text: "После монтажа проверить соосность вала насоса и двигателя перед первым пуском" },
  { icon: "ThumbsUp", text: "Периодически проверять затяжку крепёжных болтов рамы в процессе эксплуатации" },
];

export default function PumpEquipmentDetails() {
  return (
    <div className="mt-10 space-y-8">

      <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Icon name="Info" className="h-5 w-5 text-primary" />
          Применение насосного оборудования для СУГ
        </h2>
        <p className="text-gray-600 leading-relaxed mb-3">
          Насосное оборудование используется для перекачки сжиженных углеводородных газов (пропан, бутан) между резервуарами, автоцистернами и раздаточным оборудованием на объектах АГЗС и ГНС. Рама насоса Corken FD 150 — единая усиленная стальная конструкция для крепления насоса и электродвигателя.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Жёсткая рама обеспечивает точную соосность вала насоса и двигателя, снижает вибрацию и износ подшипников, продлевая срок службы всего насосного агрегата.
        </p>

        <div className="mt-5 grid sm:grid-cols-3 gap-4">
          {usageItems.map((item, i) => (
            <div key={i} className="bg-primary/5 rounded-xl p-4 text-center">
              <Icon name={item.icon as Parameters<typeof Icon>[0]["name"]} className="h-6 w-6 text-primary mx-auto mb-2" />
              <p className="text-xs text-gray-600 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Icon name="HardHat" className="h-5 w-5 text-primary" />
          Правила монтажа
        </h2>
        <ul className="space-y-3">
          {mountingRules.map((rule, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-7 h-7 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Icon name={rule.icon as Parameters<typeof Icon>[0]["name"]} className="h-3.5 w-3.5 text-amber-500" />
              </span>
              <span className="text-sm text-gray-700 leading-relaxed">{rule.text}</span>
            </li>
          ))}
        </ul>
        <div className="mt-5 bg-amber-50 border border-amber-100 rounded-xl p-4">
          <p className="text-sm text-amber-800 font-medium">Требуется техническая консультация?</p>
          <p className="text-xs text-amber-700 mt-1">Наши инженеры помогут с подбором и монтажом. Звоните: <a href="tel:+79609373542" className="font-semibold underline">+7 960 937-35-42</a></p>
        </div>
      </section>

    </div>
  );
}
