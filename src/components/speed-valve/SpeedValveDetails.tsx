import Icon from "@/components/ui/icon";

const deliveryItems = [
  { icon: "Package", text: "Клапан ТПА11 — 1 шт." },
  { icon: "Circle", text: "Прокладка паронитовая — 2 шт." },
  { icon: "Disc", text: "Фланец ответный — 2 шт." },
  { icon: "Wrench", text: "Болт М16 — 4 шт." },
  { icon: "Minus", text: "Шайба зубчатая — 4 шт." },
  { icon: "Minus", text: "Гайка М16 — 4 шт." },
  { icon: "Minus", text: "Шайба упругая — 4 шт." },
  { icon: "Minus", text: "Шайба плоская — 4 шт." },
  { icon: "FileText", text: "Паспорт изделия с сертификатом EAC" },
];

const mountingRules = [
  { icon: "AlertTriangle", text: "Запорную арматуру перед клапаном открывать плавно — резкое открытие вызовет ложное срабатывание" },
  { icon: "ArrowUpDown", text: "Клапан устанавливается в любом положении — горизонтально, вертикально, под углом" },
  { icon: "RotateCcw", text: "Направление потока — строго по стрелке на корпусе клапана" },
  { icon: "ThumbsUp", text: "После монтажа проверить герметичность фланцевых соединений при рабочем давлении" },
];

interface SpeedValveDetailsProps {
  du: string;
}

export default function SpeedValveDetails({ du }: SpeedValveDetailsProps) {
  return (
    <div className="mt-10 space-y-8">

      {/* Принцип работы */}
      <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Icon name="Info" className="h-5 w-5 text-primary" />
          Принцип работы скоростного клапана ТПА11 ДУ{du}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-3">
          Скоростной клапан ТПА11 — клапан аварийного отключения прямого действия. Корпус из нержавеющей стали 12X18H10T содержит шток с тарелью (грибком) и пружину. В нормальном режиме пружина удерживает тарель в открытом положении, СУГ свободно проходит через клапан.
        </p>
        <p className="text-gray-600 leading-relaxed mb-3">
          При аварийном разрыве трубопровода или шланга возникает резкое увеличение скорости потока газа. Разница давлений на тарели превышает усилие пружины — клапан мгновенно закрывается и отсекает подачу СУГ. Срабатывание происходит автоматически, без участия оператора, в течение долей секунды.
        </p>
        <p className="text-gray-600 leading-relaxed">
          После устранения аварии клапан сбрасывается вручную: медленно открыть запорную арматуру перед клапаном — давление выровняется и пружина вернёт тарель в открытое положение.
        </p>

        <div className="mt-5 grid sm:grid-cols-3 gap-4">
          <div className="bg-primary/5 rounded-xl p-4 text-center">
            <Icon name="Zap" className="h-6 w-6 text-primary mx-auto mb-2" />
            <p className="text-sm font-semibold text-gray-900">Срабатывание</p>
            <p className="text-xs text-gray-500 mt-1">доли секунды</p>
          </div>
          <div className="bg-primary/5 rounded-xl p-4 text-center">
            <Icon name="ShieldCheck" className="h-6 w-6 text-primary mx-auto mb-2" />
            <p className="text-sm font-semibold text-gray-900">Без электропитания</p>
            <p className="text-xs text-gray-500 mt-1">прямое действие</p>
          </div>
          <div className="bg-primary/5 rounded-xl p-4 text-center">
            <Icon name="RefreshCw" className="h-6 w-6 text-primary mx-auto mb-2" />
            <p className="text-sm font-semibold text-gray-900">Сброс вручную</p>
            <p className="text-xs text-gray-500 mt-1">без замены деталей</p>
          </div>
        </div>
      </section>

      {/* Комплект поставки */}
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
        <p className="mt-4 text-xs text-gray-400">* Фланцы и крепёж входят в комплект. Дополнительных покупок не требуется.</p>
      </section>

      {/* Правила монтажа */}
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
