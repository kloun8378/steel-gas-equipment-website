import Icon from "@/components/ui/icon";

const deliveryItems = [
  { icon: "Package", text: "Клапан ППЦЗ-12 — 1 шт." },
  { icon: "Circle", text: "Уплотнительное кольцо — 1 шт." },
  { icon: "FileText", text: "Паспорт изделия с сертификатом EAC" },
];

const mountingRules = [
  { icon: "AlertTriangle", text: "Давление настройки клапана заводское — от 1,6 до 1,84 МПа, самостоятельная регулировка не требуется" },
  { icon: "RotateCcw", text: "Резьбовое соединение с сосудом М72х2 — устанавливать с уплотнительным кольцом" },
  { icon: "ArrowUpDown", text: "Клапан устанавливается вертикально, штоком вверх, для корректного сброса давления" },
  { icon: "ThumbsUp", text: "После монтажа проверить герметичность резьбового соединения" },
];

export default function SafetyValveDetails() {
  return (
    <div className="mt-10 space-y-8">

      <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Icon name="Info" className="h-5 w-5 text-primary" />
          Принцип работы предохранительного клапана ППЦЗ-12
        </h2>
        <p className="text-gray-600 leading-relaxed mb-3">
          Предохранительный клапан ППЦЗ-12 — пружинный клапан прямого действия. Устанавливается на резервуарах, автоцистернах и трубопроводах СУГ для защиты от превышения давления. Пружина рассчитана и настроена на заводе на диапазон срабатывания от 1,6 до 1,84 МПа.
        </p>
        <p className="text-gray-600 leading-relaxed mb-3">
          При превышении рабочего давления шток клапана поднимается, сжимая пружину, и избыточный газ стравливается наружу через выходное отверстие. Как только давление в системе возвращается к норме, пружина возвращает клапан в закрытое положение — герметичность восстанавливается автоматически, без вмешательства оператора.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Клапан не требует электропитания и работает независимо от внешних систем управления, что делает его обязательным элементом защиты по требованиям Ростехнадзора для объектов СУГ.
        </p>

        <div className="mt-5 grid sm:grid-cols-3 gap-4">
          <div className="bg-primary/5 rounded-xl p-4 text-center">
            <Icon name="Gauge" className="h-6 w-6 text-primary mx-auto mb-2" />
            <p className="text-sm font-semibold text-gray-900">Давление настройки</p>
            <p className="text-xs text-gray-500 mt-1">1,6–1,84 МПа</p>
          </div>
          <div className="bg-primary/5 rounded-xl p-4 text-center">
            <Icon name="ShieldCheck" className="h-6 w-6 text-primary mx-auto mb-2" />
            <p className="text-sm font-semibold text-gray-900">Без электропитания</p>
            <p className="text-xs text-gray-500 mt-1">прямое действие</p>
          </div>
          <div className="bg-primary/5 rounded-xl p-4 text-center">
            <Icon name="RefreshCw" className="h-6 w-6 text-primary mx-auto mb-2" />
            <p className="text-sm font-semibold text-gray-900">Автосброс</p>
            <p className="text-xs text-gray-500 mt-1">возврат в норму сам</p>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Icon name="PackageCheck" className="h-5 w-5 text-primary" />
          Комплект поставки
        </h2>
        <ul className="grid sm:grid-cols-2 gap-2">
          {deliveryItems.map((item, i) => (
            <li key={i} className="flex items-center gap-3 py-2 border-b border-gray-50 last:border-0">
              <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon name={item.icon as Parameters<typeof Icon>[0]["name"]} className="h-3 w-3 text-primary" />
              </span>
              <span className="text-sm text-gray-700">{item.text}</span>
            </li>
          ))}
        </ul>
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
