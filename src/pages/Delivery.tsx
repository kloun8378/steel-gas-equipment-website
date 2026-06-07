import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

export default function Delivery() {
  return (
    <>
      <Helmet>
        <title>Доставка и оплата — СтальПроКлапан</title>
        <meta name="description" content="Условия доставки и оплаты газовой арматуры. Доставка по всей России транспортными компаниями. Оплата по счёту, безналичный расчёт, НДС включён." />
        <meta name="keywords" content="доставка газовая арматура, оплата клапаны СУГ, транспортная компания, доставка по России, безналичный расчёт" />
        <link rel="canonical" href="https://xn--80awjdfch6f.com/delivery" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Главная", "item": "https://xn--80awjdfch6f.com/"},
            {"@type": "ListItem", "position": 2, "name": "Доставка и оплата", "item": "https://xn--80awjdfch6f.com/delivery"}
          ]
        })}</script>
      </Helmet>

      <Header />

      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Доставка и оплата</h1>
            <p className="text-lg text-gray-600">Работаем по всей России. Отгрузка в день оплаты счёта.</p>
          </div>

          {/* Доставка */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center">
                <Icon name="Truck" className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Доставка</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-100 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Icon name="Package" className="h-5 w-5 text-primary" />
                  Транспортные компании
                </h3>
                <p className="text-gray-600 text-sm mb-3">Отправляем через любую ТК по выбору покупателя:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• СДЭК</li>
                  <li>• Деловые Линии</li>
                  <li>• Почта России</li>
                  <li>• ПЭК</li>
                  <li>• Любая другая по договорённости</li>
                </ul>
              </div>

              <div className="border border-gray-100 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Icon name="MapPin" className="h-5 w-5 text-primary" />
                  Самовывоз
                </h3>
                <p className="text-gray-600 text-sm mb-3">Забрать товар можно самостоятельно по адресу:</p>
                <p className="text-sm text-gray-700 font-medium">г. Барнаул, ул. Кавалерийская 14, бокс 171</p>
                <p className="text-sm text-gray-600 mt-2">Пн–Пт: 09:00–18:00</p>
                <p className="text-sm text-gray-500 mt-1">Предварительно позвоните для подтверждения наличия</p>
              </div>

              <div className="border border-gray-100 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Icon name="Clock" className="h-5 w-5 text-primary" />
                  Сроки отправки
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <span className="font-medium">Товар в наличии</span> — отгрузка в день оплаты</li>
                  <li>• <span className="font-medium">Товар под заказ</span> — уточняется при оформлении</li>
                  <li>• Доставка ТК: 1–7 рабочих дней в зависимости от региона</li>
                </ul>
              </div>

              <div className="border border-gray-100 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Icon name="ShoppingBag" className="h-5 w-5 text-primary" />
                  Покупка на Ozon
                </h3>
                <p className="text-gray-600 text-sm mb-3">Часть товаров доступна на маркетплейсе с доставкой Ozon:</p>
                <a
                  href="https://www.ozon.ru/seller/stalpro-3601542/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#005BFF] hover:bg-[#0047CC] text-white text-sm px-4 py-2 rounded-lg transition-colors"
                >
                  Перейти в магазин Ozon
                  <Icon name="ExternalLink" className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Оплата */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center">
                <Icon name="CreditCard" className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Оплата</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-gray-100 rounded-xl p-5 text-center">
                <div className="bg-green-50 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Icon name="Building2" className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Безналичный расчёт</h3>
                <p className="text-sm text-gray-600">Выставляем счёт с НДС для юридических лиц и ИП</p>
              </div>

              <div className="border border-gray-100 rounded-xl p-5 text-center">
                <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Icon name="Banknote" className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Наличный расчёт</h3>
                <p className="text-sm text-gray-600">При самовывозе — наличными или переводом на карту</p>
              </div>

              <div className="border border-gray-100 rounded-xl p-5 text-center">
                <div className="bg-purple-50 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Icon name="FileCheck" className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Договор поставки</h3>
                <p className="text-sm text-gray-600">Для постоянных партнёров — работаем по договору с отсрочкой</p>
              </div>
            </div>

            <div className="mt-6 bg-gray-50 rounded-xl p-4 flex items-start gap-3">
              <Icon name="Info" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <p className="text-sm text-gray-600">Все цены на сайте указаны <span className="font-medium text-gray-900">с НДС 20%</span>. Документы (счёт, накладная, счёт-фактура) предоставляются в полном объёме.</p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Остались вопросы по доставке?</h2>
            <p className="text-primary-foreground/80 mb-6">Позвоните или напишите — ответим в течение 15 минут</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+79609373542"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <Icon name="Phone" className="h-5 w-5" />
                +7 960 937-35-42
              </a>
              <a
                href="#contacts"
                className="inline-flex items-center justify-center gap-2 border border-white/40 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors"
              >
                <Icon name="MessageSquare" className="h-5 w-5" />
                Написать нам
              </a>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
