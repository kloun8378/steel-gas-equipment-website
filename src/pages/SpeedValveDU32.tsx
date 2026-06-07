import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useCart } from '@/context/CartContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SpeedValveProductCard from '@/components/speed-valve/SpeedValveProductCard';
import SpeedValveCart from '@/components/speed-valve/SpeedValveCart';
import SpeedValveDetails from '@/components/speed-valve/SpeedValveDetails';
import Icon from '@/components/ui/icon';

const commonSpecs = [
  { label: 'Рабочая среда', value: 'СУГ (пропан, бутан)' },
  { label: 'Давление условное, МПа', value: '4,0' },
  { label: 'Климатическое исполнение', value: 'УХЛI (-60°С до +40°С)' },
  { label: 'Материал корпуса', value: 'Сталь 12X18H10T' },
  { label: 'Срок службы', value: '5 лет' },
  { label: 'Пружина', value: 'Проволока по ГОСТ9389-75 с покрытием МЗН3' },
];

const techSpecs = [
  ...commonSpecs.slice(0, 4),
  { label: 'Проход условный, DN', value: '32' },
  { label: 'Строительная длина, B (мм)', value: '40' },
  ...commonSpecs.slice(4),
];

const PRODUCT_IMAGE = 'https://cdn.poehali.dev/files/a5f6db14-b102-4128-acba-cdd414c672d5.jpg';
const PRODUCT_PRICE_RAW = 6202;
const PRODUCT_PRICE = '6 202 ₽';
const PRODUCT_NAME = 'Скоростной клапан ТПА11-032 ДУ32';
const PRODUCT_ID = 'tpa11-032';
const CANONICAL = 'https://xn--80awjdfch6f.com/speed-valve/tpa11-032';

const productLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: PRODUCT_NAME,
  image: PRODUCT_IMAGE,
  description:
    'Скоростной клапан межфланцевый ТПА11-032 ДУ32 для СУГ. Аварийное отключение потока. АГЗС, ГНС, автоцистерны. Аналог ZNW DN32, VENGO 32.',
  brand: { '@type': 'Brand', name: 'СтальПроКлапан' },
  offers: {
    '@type': 'Offer',
    price: String(PRODUCT_PRICE_RAW),
    priceCurrency: 'RUB',
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
    { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://xn--80awjdfch6f.com/' },
    { '@type': 'ListItem', position: 2, name: 'Скоростной клапан', item: 'https://xn--80awjdfch6f.com/speed-valve' },
    { '@type': 'ListItem', position: 3, name: 'ТПА11-032 ДУ32', item: CANONICAL },
  ],
});

export default function SpeedValveDU32() {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = (product: Record<string, unknown>) => {
    addToCart(product);
  };

  return (
    <>
      <Helmet>
        <title>Скоростной клапан межфланцевый ТПА11-032 ДУ32 купить — аналог ZNW DN32, VENGO</title>
        <meta
          name="description"
          content="Скоростной клапан межфланцевый ТПА11-032 ДУ32 для СУГ. Аварийное отключение потока. АГЗС, ГНС, автоцистерны. Аналог ZNW DN32, VENGO 32. Цена 6 202 ₽. В наличии. Звоните!"
        />
        <meta
          name="keywords"
          content="скоростной клапан ДУ32, ТПА11-032, клапан межфланцевый ДУ32 СУГ, аналог ZNW DN32, скоростной клапан ДУ32 купить, клапан ДУ32 АГЗС"
        />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:title" content="Скоростной клапан ТПА11-032 ДУ32 — СтальПроКлапан" />
        <meta
          property="og:description"
          content="Скоростной клапан межфланцевый ТПА11-032 ДУ32 для СУГ. Аналог ZNW DN32, VENGO 32. Цена 6 202 ₽ с НДС. В наличии."
        />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:type" content="product" />
        <meta property="og:image" content={PRODUCT_IMAGE} />
        <meta property="og:image:alt" content="Скоростной клапан межфланцевый ТПА11-032 ДУ32" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={PRODUCT_IMAGE} />
        <script type="application/ld+json">{productLd}</script>
        <script type="application/ld+json">{breadcrumbLd}</script>
      </Helmet>

      <Header />

      <main className="container mx-auto px-4 md:px-6 py-6 sm:py-8">
        <div className="max-w-3xl mx-auto">
          {/* Хлебные крошки */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <a href="/" className="hover:text-primary">Главная</a>
            <Icon name="ChevronRight" className="h-4 w-4" />
            <a href="/speed-valve" className="hover:text-primary">Скоростной клапан</a>
            <Icon name="ChevronRight" className="h-4 w-4" />
            <span className="text-gray-700">ТПА11-032 ДУ32</span>
          </nav>

          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Скоростной клапан межфланцевый ТПА11-032 (ДУ32)
            </h1>
            <p className="text-base sm:text-lg text-gray-600">
              Аварийное отключение потока СУГ. Аналог ZNW DN32, VENGO 32. Цена 6 202 ₽ с НДС.
            </p>
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
              className="px-3 py-1 rounded-full text-sm border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
            >
              ДУ32
            </a>
            <a
              href="/speed-valve/tpa11-040"
              className="px-3 py-1 rounded-full text-sm border border-gray-300 text-gray-600 hover:border-primary hover:text-primary transition-colors"
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
            imageAlt="Скоростной клапан межфланцевый ТПА11-032 ДУ32"
            imageStyle={{ objectPosition: 'center -90%' }}
            quantity={quantity}
            onQuantityChange={setQuantity}
            onAddToCart={handleAddToCart}
            techTitle="Технические характеристики ТПА11-032 ДУ32"
            techSpecs={techSpecs}
          />

          <SpeedValveDetails du="32" />
        </div>

        <SpeedValveCart />
      </main>

      <Footer />
    </>
  );
}