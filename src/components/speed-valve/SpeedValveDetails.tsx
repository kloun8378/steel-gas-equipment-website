import Icon from "@/components/ui/icon";

const deliveryItems = [
  { icon: "Package", text: "Клапан ТПА11 — 1 шт." },
  { icon: "FileText", text: "Паспорт изделия с сертификатом EAC" },
];

const mountingRules = [
  { icon: "AlertTriangle", text: "Запорную арматуру перед клапаном открывать плавно — резкое открытие вызовет ложное срабатывание" },
  { icon: "ArrowUpDown", text: "Клапан устанавливается в любом положении — горизонтально, вертикально, под углом" },
  { icon: "RotateCcw", text: "Направление потока — строго по стрелке на корпусе клапана" },
  { icon: "ThumbsUp", text: "После монтажа проверить герметичность фланцевых соединений при рабочем давлении" },
];

const principleTexts: Record<string, { p1: string; p2: string; p3: string }> = {
  "25": {
    p1: "Скоростной клапан ТПА11-025 ДУ25 — компактное устройство аварийного отключения прямого действия для трубопроводов малого диаметра: сливных линий и локальных систем СУГ. Корпус из нержавеющей стали 12Х18Н10Т, внутри — шток с тарелью и пружина, которая в штатном режиме держит тарель открытой.",
    p2: "Если шланг или труба ДУ25 повреждены и поток резко ускоряется, перепад давления на тарели превышает усилие пружины — клапан закрывается за доли секунды и перекрывает утечку газа. Электропитание и участие оператора для срабатывания не требуются.",
    p3: "После устранения неисправности клапан ДУ25 возвращают в рабочее положение вручную — плавно открывают запорную арматуру перед ним, давление выравнивается, и пружина отводит тарель обратно.",
  },
  "32": {
    p1: "Клапан ТПА11-032 ДУ32 применяется на трубопроводах СУГ среднего диаметра — газонаполнительных станциях и узлах налива. Устройство прямого действия: в корпусе из стали 12Х18Н10Т размещены шток с тарелью и пружина, удерживающая клапан открытым в штатном режиме.",
    p2: "При аварийном разрыве магистрали ДУ32 скорость потока СУГ резко возрастает, давление на тарель превышает сопротивление пружины, и клапан отсекает газ мгновенно — без участия персонала и без источника питания.",
    p3: "Возврат клапана в рабочий режим выполняется вручную: после ликвидации аварии запорную арматуру перед ТПА11-032 открывают плавно, давление выравнивается и пружина возвращает тарель в исходное положение.",
  },
  "40": {
    p1: "ТПА11-040 ДУ40 — клапан аварийного отключения для трубопроводов повышенной пропускной способности: линий налива автоцистерн и магистралей ГНС. Конструкция прямого действия — шток с тарелью и пружина в корпусе из нержавеющей стали 12Х18Н10Т.",
    p2: "При резком увеличении скорости потока СУГ через сечение ДУ40, например при разрыве шланга, давление на тарель превышает усилие пружины — клапан закрывается автоматически, в течение долей секунды, без электроники и датчиков.",
    p3: "Сброс клапана после аварии выполняется вручную: медленно открывают арматуру перед ТПА11-040, давление в системе выравнивается, пружина возвращает тарель в открытое положение.",
  },
  "50": {
    p1: "Скоростной клапан ТПА11-050 ДУ50 — самый производительный типоразмер линейки, рассчитан на крупные объекты: автоцистерны и газонаполнительные станции с высоким расходом СУГ. В корпусе из стали 12Х18Н10Т — шток с тарелью и пружина прямого действия.",
    p2: "При аварийном разрыве трубопровода ДУ50 поток СУГ резко ускоряется, перепад давления на тарели превышает усилие пружины — клапан закрывается практически мгновенно, полностью перекрывая сечение без участия оператора.",
    p3: "После устранения причины срабатывания клапан ДУ50 взводят вручную: плавно открывают запорную арматуру перед ним, давление выравнивается и пружина возвращает тарель в рабочее положение.",
  },
};

interface SpeedValveDetailsProps {
  du: string;
}

export default function SpeedValveDetails({ du }: SpeedValveDetailsProps) {
  const principle = principleTexts[du] ?? principleTexts["25"];

  return (
    <div className="mt-10 space-y-8">

      {/* Принцип работы */}
      <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Icon name="Info" className="h-5 w-5 text-primary" />
          Принцип работы скоростного клапана ТПА11 ДУ{du}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-3">
          {principle.p1}
        </p>
        <p className="text-gray-600 leading-relaxed mb-3">
          {principle.p2}
        </p>
        <p className="text-gray-600 leading-relaxed">
          {principle.p3}
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