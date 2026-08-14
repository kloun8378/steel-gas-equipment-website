import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SpeedValveProductCard from '@/components/speed-valve/SpeedValveProductCard';
import SpeedValveCart from '@/components/speed-valve/SpeedValveCart';
import SpeedValveDetails from '@/components/speed-valve/SpeedValveDetails';
import SpeedValveFAQ from '@/components/speed-valve/SpeedValveFAQ';
import Icon from '@/components/ui/icon';
import OrderModal from '@/components/OrderModal';

const commonSpecs = [
  { label: 'Рабочая среда', value: 'СУГ (пропан, бутан)' },
  { label: 'Давление условное, МПа', value: '4,0' },
  { label: 'Климатическое исполнение', value: 'УХЛI (-60°С до +40°С)' },
  { label: 'Материал корпуса', value: 'Сталь 12Х18Н10Т, ГОСТ 5632-2014' },
  { label: 'Срок службы', value: '5 лет' },
  { label: 'Пружина', value: 'Проволока А-1-1, ГОСТ 9389-75' },
];

const techSpecs = [
  ...commonSpecs.slice(0, 4),
  { label: 'Проход условный, DN', value: '40' },
  { label: 'Пропускная способность', value: 'по запросу' },
  { label: 'Диаметр клапана, A (мм)', value: '90' },
  { label: 'Строительная длина, B (мм)', value: '45' },
  { label: 'Высота, C (мм)', value: '45' },
  ...commonSpecs.slice(4),
];

const PRODUCT_IMAGE = 'https://cdn.poehali.dev/files/8a4392c5-af78-4f21-86ef-1d9f5da98262.jpg';
const PRODUCT_PRICE_RAW = 7015;
const PRODUCT_PRICE = '7 015 ₽';
const PRODUCT_NAME = 'Скоростной клапан межфланцевый ТПА11-040 ДУ40 PN40';
const PRODUCT_ID = 'tpa11-040';
const CANONICAL = 'https://стальпро.com/speed-valve/tpa11-040';

const productLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: PRODUCT_NAME,
  image: PRODUCT_IMAGE,
  description:
    'Скоростной клапан межфланцевый ТПА11-040 ДУ40 для СУГ. Аварийное отключение потока. АГЗС, ГНС, автоцистерны. Аналог ZNW DN40, VENGO 40.',
  brand: { '@type': 'Brand', name: 'СтальПроКлапан' },
  offers: {
    '@type': 'Offer',
    price: String(PRODUCT_PRICE_RAW),
    priceCurrency: 'RUB',
    priceValidUntil: '2026-12-31',
    availability: 'https://schema.org/InStock',
    itemCondition: 'https://schema.org/NewCondition',
    url: CANONICAL,
    seller: { '@type': 'Organization', name: 'СтальПроКлапан' },
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '18',
    bestRating: '5',
  },
});

const breadcrumbLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://стальпро.com/' },
    { '@type': 'ListItem', position: 2, name: 'Обратные и скоростные клапаны для СУГ', item: 'https://стальпро.com/speed-valve' },
    { '@type': 'ListItem', position: 3, name: 'ТПА11-040 ДУ40 PN40', item: CANONICAL },
  ],
});

const faqLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Чем скоростной клапан отличается от предохранительного?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Скоростной клапан срабатывает при резком увеличении скорости потока СУГ (аварийный разрыв трубопровода), а предохранительный — при превышении давления. Это разные защитные устройства, выполняющие разные функции.',
      },
    },
    {
      '@type': 'Question',
      name: 'Как правильно выбрать диаметр клапана ДУ25, ДУ32, ДУ40 или ДУ50?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Диаметр клапана должен соответствовать условному проходу трубопровода. ДУ25 — для малых систем и сливных трубопроводов, ДУ32 и ДУ40 — для средних, ДУ50 — для крупных объектов (автоцистерны, большие АГЗС). Для точного подбора звоните: +7 960 937-35-42.',
      },
    },
    {
      '@type': 'Question',
      name: 'Нужно ли специальное обслуживание клапана ТПА11?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Клапан не требует регулярного обслуживания. После срабатывания (аварийного закрытия) сброс выполняется вручную: нужно медленно открыть запорную арматуру перед клапаном — давление выровняется и пружина вернёт тарель в рабочее положение.',
      },
    },
    {
      '@type': 'Question',
      name: 'Возможна ли доставка по всей России?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Да. Клапаны ТПА11 отправляем транспортными компаниями (СДЭК, Деловые Линии, ПЭК) по всей России. Склад в Барнауле, отгрузка в день заказа при наличии товара. Также доступна доставка через маркетплейс Ozon.',
      },
    },
    {
      '@type': 'Question',
      name: 'Есть ли документы — сертификат и паспорт на клапан?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Да. В комплекте поставки — паспорт изделия с сертификатом EAC. Документы можно скачать на сайте (кнопка "Паспорт" на странице товара) или запросить по email sadoxa1996@mail.ru.',
      },
    },
  ],
});

export default function SpeedValveDU40() {
  const [quantity, setQuantity] = useState(1);
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const { addToCart } = useCart();
  const { user } = useAuth();

  const handleAddToCart = (product: Record<string, unknown>) => {
    if (user) {
      addToCart(product);
    }
    setOrderModalOpen(true);
  };

  return (
    <>
      <OrderModal open={orderModalOpen} onOpenChange={setOrderModalOpen} />
      <Helmet>
        <title>Скоростной межфланцевый клапан ТПА11-040 ДУ40 PN40 купить — аналог ZNW DN40, VENGO</title>
        <meta
          name="description"
          content="Скоростной межфланцевый клапан ТПА11-040 ДУ40 PN40 для СУГ. Аварийное отключение потока. АГЗС, ГНС, автоцистерны. Аналог ZNW DN40, VENGO 40. Цена 7 015 ₽. В наличии. Звоните!"
        />
        <meta
          name="keywords"
          content="скоростной клапан ДУ40, ТПА11-040, клапан межфланцевый ДУ40 СУГ, аналог ZNW DN40, скоростной клапан ДУ40 купить, клапан ДУ40 АГЗС, ТП11 ДУ40, скоростной клапан ДУ40 PN40"
        />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:title" content="Скоростной межфланцевый клапан ТПА11-040 ДУ40 PN40 — СтальПроКлапан" />
        <meta
          property="og:description"
          content="Скоростной клапан межфланцевый ТПА11-040 ДУ40 для СУГ. Аналог ZNW DN40, VENGO 40. Цена 7 015 ₽ с НДС. В наличии."
        />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:type" content="product" />
        <meta property="og:image" content={PRODUCT_IMAGE} />
        <meta property="og:image:alt" content="Скоростной клапан межфланцевый ТПА11-040 ДУ40" />
        <meta property="product:price:amount" content={String(PRODUCT_PRICE_RAW)} />
        <meta property="product:price:currency" content="RUB" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={PRODUCT_IMAGE} />
        <script type="application/ld+json">{productLd}</script>
        <script type="application/ld+json">{breadcrumbLd}</script>
        <script type="application/ld+json">{faqLd}</script>
      </Helmet>

      <Header />

      <main className="container mx-auto px-4 md:px-6 py-6 sm:py-8">
        <div className="max-w-3xl mx-auto">
          {/* Хлебные крошки */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <a href="/" className="hover:text-primary">Главная</a>
            <Icon name="ChevronRight" className="h-4 w-4" />
            <a href="/speed-valve" className="hover:text-primary">Обратные и скоростные клапаны для СУГ</a>
            <Icon name="ChevronRight" className="h-4 w-4" />
            <span className="text-gray-700">ТПА11-040 ДУ40 PN40</span>
          </nav>

          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Купить скоростной межфланцевый клапан ТПА11-040 ДУ40 PN40
            </h1>
            <div className="flex items-center gap-2">
              <span className="text-yellow-400 text-xl">★★★★★</span>
              <span className="text-sm text-gray-600">4.9 — <a href="/reviews" className="underline hover:text-primary">18 отзывов</a></span>
            </div>
          </div>

          {/* Ссылки на другие модели */}
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="text-sm text-gray-500 self-center">Другие модели:</span>
            <a
              href="/speed-valve/tpa11-025"
              className="px-3 py-1 rounded-full text-sm border border-gray-300 text-gray-600 hover:border-primary hover:text-primary transition-colors"
            >
              ДУ25
            </a>
            <a
              href="/speed-valve/tpa11-032"
              className="px-3 py-1 rounded-full text-sm border border-gray-300 text-gray-600 hover:border-primary hover:text-primary transition-colors"
            >
              ДУ32
            </a>
            <a
              href="/speed-valve/tpa11-040"
              className="px-3 py-1 rounded-full text-sm border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
            >
              ДУ40
            </a>
            <a
              href="/speed-valve/tpa11-050"
              className="px-3 py-1 rounded-full text-sm border border-gray-300 text-gray-600 hover:border-primary hover:text-primary transition-colors"
            >
              ДУ50
            </a>
          </div>

          <SpeedValveProductCard
            id={PRODUCT_ID}
            name={PRODUCT_NAME}
            description="Межфланцевый быстрозапорный клапан для аварийного отключения СУГ"
            price={PRODUCT_PRICE}
            priceRaw={PRODUCT_PRICE_RAW}
            image={PRODUCT_IMAGE}
            imageAlt="Скоростной клапан межфланцевый ТПА11-040 ДУ40"
            priority
            quantity={quantity}
            onQuantityChange={setQuantity}
            onAddToCart={handleAddToCart}
            techTitle="Технические характеристики ТПА11-040 ДУ40"
            techSpecs={techSpecs}
            ozonUrl="https://www.ozon.ru/product/klapan-skorostnoy-mezhflantsevyy-du40-3082079691/"
          />

          <SpeedValveDetails du="40" />
          <SpeedValveFAQ du="40" />
        </div>

        <SpeedValveCart />
      </main>

      <Footer />
    </>
  );
}