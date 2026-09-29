import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const breadcrumbLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://стальпро.com/" },
    { "@type": "ListItem", "position": 2, "name": "Публичная оферта", "item": "https://стальпро.com/offer/index.html" }
  ]
});

export default function Offer() {
  return (
    <>
      <Helmet>
        <title>Публичная оферта — СтальПроКлапан</title>
        <meta
          name="description"
          content="Публичная оферта интернет-магазина СтальПроКлапан (ИП Алпеева А.С.): условия продажи, оплаты и доставки промышленной газовой арматуры."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Публичная оферта — СтальПроКлапан" />
        <meta property="og:description" content="Условия продажи, оплаты и доставки на сайте стальпро.com" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://стальпро.com/offer/index.html" />
        <link rel="canonical" href="https://стальпро.com/offer/index.html" />
        <script type="application/ld+json">{breadcrumbLd}</script>
      </Helmet>

      <Header />

      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex items-center gap-2 text-sm text-gray-500 mb-5">
            <a href="/" className="hover:text-primary transition-colors">Главная</a>
            <Icon name="ChevronRight" className="h-4 w-4" />
            <span className="text-gray-900">Публичная оферта</span>
          </div>

          <div className="mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Публичная оферта</h1>
            <p className="text-lg text-gray-600">Договор розничной купли-продажи на сайте стальпро.com</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-8 text-gray-700 leading-relaxed">

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">1. Общие положения</h2>
              <p className="mb-2">
                1.1. Настоящий документ является официальным предложением (публичной офертой) Индивидуального предпринимателя Алпеевой Анастасии Сергеевны (далее — «Продавец») и содержит все существенные условия продажи товаров, представленных на сайте стальпро.com (далее — «Сайт»).
              </p>
              <p className="mb-2">
                1.2. В соответствии со статьёй 437 Гражданского кодекса РФ данный документ является публичной офертой. Оформление заказа на Сайте означает полное и безоговорочное принятие (акцепт) условий настоящей оферты покупателем.
              </p>
              <p>
                1.3. Продавец оставляет за собой право вносить изменения в оферту, в связи с чем покупателю необходимо перед оформлением заказа ознакомиться с актуальной редакцией документа на Сайте.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">2. Реквизиты Продавца</h2>
              <div className="grid sm:grid-cols-2 gap-4 bg-gray-50 rounded-xl p-5">
                <div>
                  <p className="text-sm text-gray-400">Индивидуальный предприниматель</p>
                  <p className="font-medium text-gray-900">ИП Алпеева Анастасия Сергеевна</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">ИНН</p>
                  <p className="font-medium text-gray-900">220807451225</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">ОГРНИП</p>
                  <p className="font-medium text-gray-900">322220200096633</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Юридический адрес</p>
                  <p className="font-medium text-gray-900">Алтайский край, г. Барнаул, ул. Кавалерийская 14, бокс 171</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Телефон</p>
                  <p className="font-medium text-gray-900">+7 960 937-35-42</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="font-medium text-gray-900">sadoxa1996@mail.ru</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">3. Предмет договора</h2>
              <p className="mb-2">
                3.1. Продавец обязуется передать в собственность покупателя товар (промышленную газовую арматуру и сопутствующие комплектующие), представленный в каталоге Сайта, а покупатель обязуется оплатить и принять товар на условиях настоящей оферты.
              </p>
              <p>
                3.2. Все товары, представленные на Сайте, сопровождаются описанием, ценой и, при наличии, сертификатами соответствия (EAC).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">4. Оформление заказа</h2>
              <p className="mb-2">
                4.1. Заказ оформляется покупателем самостоятельно через личный кабинет на Сайте путём добавления товаров в корзину и подтверждения заказа.
              </p>
              <p className="mb-2">
                4.2. После оформления заказа покупателю на указанный email направляется подтверждение с составом и суммой заказа.
              </p>
              <p>
                4.3. Продавец вправе связаться с покупателем по указанным контактным данным для уточнения деталей заказа.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">5. Цена и оплата</h2>
              <p className="mb-2">
                5.1. Цены на товары указаны на Сайте в российских рублях, с учётом НДС 20%, и могут изменяться Продавцом в одностороннем порядке. Цена товара на момент оформления заказа изменению не подлежит.
              </p>
              <p className="mb-2">5.2. Способы оплаты:</p>
              <ul className="list-disc list-inside space-y-1 mb-2">
                <li>онлайн-оплата банковской картой на Сайте через платёжный сервис ЮKassa;</li>
                <li>безналичный расчёт по счёту для юридических лиц и ИП;</li>
                <li>наличный расчёт или перевод на карту при самовывозе.</li>
              </ul>
              <p>
                5.3. Обязательства покупателя по оплате считаются исполненными с момента поступления денежных средств на расчётный счёт либо подтверждения оплаты платёжным сервисом.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">6. Доставка</h2>
              <p className="mb-2">
                6.1. Доставка товара осуществляется транспортными компаниями по выбору покупателя (СДЭК, Деловые Линии, Почта России, ПЭК и другие) либо самовывозом со склада Продавца по адресу: Алтайский край, г. Барнаул, ул. Кавалерийская 14, бокс 171.
              </p>
              <p>
                6.2. Сроки и стоимость доставки уточняются при оформлении заказа и зависят от региона доставки и выбранной транспортной компании. Подробные условия — на странице «Доставка и оплата».
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">7. Возврат и обмен</h2>
              <p className="mb-2">
                7.1. Покупатель вправе отказаться от товара в порядке и в сроки, установленные Законом РФ «О защите прав потребителей» и статьями 497, 502 Гражданского кодекса РФ.
              </p>
              <p>
                7.2. Возврат товара надлежащего качества возможен, если сохранены его товарный вид, потребительские свойства и документ, подтверждающий покупку. Возврат оформляется по обращению на email sadoxa1996@mail.ru или по телефону +7 960 937-35-42.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">8. Ответственность сторон</h2>
              <p>
                8.1. Стороны несут ответственность за неисполнение или ненадлежащее исполнение условий настоящей оферты в соответствии с действующим законодательством Российской Федерации.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">9. Прочие условия</h2>
              <p className="mb-2">
                9.1. Во всём, что не урегулировано настоящей офертой, стороны руководствуются действующим законодательством РФ.
              </p>
              <p>
                9.2. Все споры разрешаются путём переговоров, а при недостижении согласия — в судебном порядке по месту нахождения Продавца.
              </p>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
