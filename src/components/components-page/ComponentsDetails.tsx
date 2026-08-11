import Icon from "@/components/ui/icon";

const usageItems = [
  { icon: "Wrench", text: "Пружина и золотник — замена изношенных деталей клапана ППЦЗ-12 без покупки нового изделия" },
  { icon: "Disc", text: "Фланцы на 4 и 8 отверстий — крепление предохранительной арматуры к резервуарам и автоцистернам" },
  { icon: "ShieldCheck", text: "Все комплектующие оригинальные, совместимы с клапанами ППЦЗ-12 и ТПА11" },
];

const orderRules = [
  { icon: "Search", text: "Перед заказом сверьте маркировку старой детали — модели ППЦЗ-12 разных годов выпуска могут отличаться" },
  { icon: "Wrench", text: "Замену пружины и золотника рекомендуется выполнять с отключением клапана от системы под давлением" },
  { icon: "Package", text: "Фланцы поставляются с крепежом, дополнительных покупок для монтажа не требуется" },
  { icon: "Phone", text: "Если не уверены, какая деталь нужна — пришлите фото клапана, поможем подобрать" },
];

export default function ComponentsDetails() {
  return (
    <div className="mt-10 space-y-8">

      <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Icon name="Info" className="h-5 w-5 text-primary" />
          Когда нужны комплектующие для клапанов СУГ
        </h2>
        <p className="text-gray-600 leading-relaxed mb-3">
          Клапаны ППЦЗ-12 и ТПА11 рассчитаны на длительный срок службы, но со временем отдельные детали — пружина, золотник, уплотнения — теряют свои свойства из-за постоянного контакта со сжиженным газом и перепадов давления. Замена конкретной детали обходится дешевле и быстрее, чем покупка нового клапана.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Все комплектующие изготовлены по тем же техническим требованиям, что и оригинальные клапаны, и полностью совместимы по посадочным размерам.
        </p>

        <div className="mt-5 space-y-2">
          {usageItems.map((item, i) => (
            <div key={i} className="flex items-center gap-3 py-2 border-b border-gray-50 last:border-0">
              <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon name={item.icon as Parameters<typeof Icon>[0]["name"]} className="h-3 w-3 text-primary" />
              </span>
              <span className="text-sm text-gray-700">{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Icon name="HardHat" className="h-5 w-5 text-primary" />
          Как выбрать и заказать нужную деталь
        </h2>
        <ul className="space-y-3">
          {orderRules.map((rule, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-7 h-7 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Icon name={rule.icon as Parameters<typeof Icon>[0]["name"]} className="h-3.5 w-3.5 text-amber-500" />
              </span>
              <span className="text-sm text-gray-700 leading-relaxed">{rule.text}</span>
            </li>
          ))}
        </ul>
        <div className="mt-5 bg-amber-50 border border-amber-100 rounded-xl p-4">
          <p className="text-sm text-amber-800 font-medium">Не уверены, какая деталь подойдёт?</p>
          <p className="text-xs text-amber-700 mt-1">Поможем подобрать по фото или модели клапана. Звоните: <a href="tel:+79609373542" className="font-semibold underline">+7 960 937-35-42</a></p>
        </div>
      </section>

    </div>
  );
}
