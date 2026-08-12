import Icon from "@/components/ui/icon";

const usageItems = [
  { icon: "Link2", text: "Соединение трубопроводов, арматуры и оборудования СУГ по стандарту ГОСТ 33259-2015" },
  { icon: "ShieldCheck", text: "Плоские приварные фланцы для давления PN16 обеспечивают герметичность стыка" },
  { icon: "Layers", text: "Изготовлены из конструкционной стали с точной механической обработкой посадочных поверхностей" },
];

const mountingRules = [
  { icon: "AlertTriangle", text: "Перед монтажом проверить соответствие диаметра фланца диаметру трубопровода" },
  { icon: "Wrench", text: "Затяжку крепёжных болтов выполнять равномерно, крест-накрест, с контролем момента затяжки" },
  { icon: "RotateCcw", text: "Уплотнительную прокладку подбирать с учётом среды и рабочего давления системы" },
  { icon: "ThumbsUp", text: "После монтажа проверить герметичность соединения опрессовкой перед вводом в эксплуатацию" },
];

export default function FlangesDetails() {
  return (
    <div className="mt-10 space-y-8">

      <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Icon name="Info" className="h-5 w-5 text-primary" />
          Применение фланцев ГОСТ 33259-2015
        </h2>
        <p className="text-gray-600 leading-relaxed mb-3">
          Фланцы стальные плоские приварные по ГОСТ 33259-2015 предназначены для разъёмного соединения трубопроводов, запорной и предохранительной арматуры на объектах СУГ — АГЗС, ГНС, автоцистерны и стационарные резервуары.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Точная механическая обработка посадочных и уплотнительных поверхностей обеспечивает надёжную герметичность соединения и упрощает монтаж на трубопроводы различного назначения.
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
          <p className="text-xs text-amber-700 mt-1">Наши инженеры помогут с подбором фланца. Звоните: <a href="tel:+79609373542" className="font-semibold underline">+7 960 937-35-42</a></p>
        </div>
      </section>

    </div>
  );
}
