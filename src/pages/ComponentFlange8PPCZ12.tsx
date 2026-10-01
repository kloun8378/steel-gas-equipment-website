import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useCart } from '@/context/CartContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import ComponentsDetails from '@/components/components-page/ComponentsDetails';
import ComponentsFAQ from '@/components/components-page/ComponentsFAQ';
import OrderModal from '@/components/OrderModal';

const PRODUCT_IMAGE = 'https://стальпро.com/img/flange8-ppcz12.jpg';
const PRODUCT_PRICE_RAW = 4372;
const PRODUCT_PRICE = '4 372 ₽';
const PRODUCT_NAME = 'Фланец на 8 отверстий к ППЦЗ-12';
const PRODUCT_ID = 'flange-ppcz12';
const CANONICAL = 'https://стальпро.com/components/flange8-ppcz12/index.html';

const flangeSpecs = [
  { label: 'Вид арматуры', value: 'Фланцы' },
  { label: 'Тип арматуры', value: 'Предохранительная арматура' },
  { label: 'Рабочая среда', value: 'СУГ' },
  { label: 'Рабочая температура', value: 'от -40 до +45°С' },
  { label: 'Места установки', value: 'Автоцистерны и стационарные резервуары для хранения СУГ' },
  { label: 'Dn (дюйм)', value: '1"' },
  { label: 'Dn (мм)', value: '25 мм' },
  { label: 'Класс герметичности', value: 'А' },
  { label: 'Масса', value: 'не более 5 кг' },
  { label: 'Материал', value: 'Сталь' },
  { label: 'Расчётный срок службы', value: '10 лет' },
  { label: 'Страна производитель', value: 'Россия' },
];

const productLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: PRODUCT_NAME,
  image: PRODUCT_IMAGE,
  description: 'Фланец предохранительной арматуры на 8 отверстий для автоцистерн и резервуаров СУГ. Совместим с клапаном ППЦЗ-12.',
  sku: PRODUCT_ID,
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
    ratingValue: '4.8',
    reviewCount: '12',
    bestRating: '5',
  },
  review: [
    {
      '@type': 'Review',
      author: { '@type': 'Organization', name: 'ООО «СибГазМонтаж»' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: 'Регулярно берём комплектующие для планового обслуживания газовой арматуры. Ассортимент хороший — уплотнения, ремонтные комплекты есть в наличии. Цены конкурентные, работаем по договору поставки уже второй год. Ни разу не подвели ни по срокам, ни по качеству.',
      datePublished: '2024-09-20',
    },
  ],
});

const breadcrumbLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://стальпро.com/' },
    { '@type': 'ListItem', position: 2, name: 'Комплектующие', item: 'https://стальпро.com/components/index.html' },
    { '@type': 'ListItem', position: 3, name: 'Фланец на 8 отверстий к ППЦЗ-12', item: CANONICAL },
  ],
});

const faqLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Подойдут ли эти комплектующие для старых клапанов ППЦЗ-12?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Да, детали совместимы с клапанами ППЦЗ-12 разных годов выпуска по стандартным посадочным размерам. Если сомневаетесь — пришлите фото маркировки клапана, поможем подобрать точно.',
      },
    },
    {
      '@type': 'Question',
      name: 'Можно ли заменить пружину и золотник самостоятельно?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Да, замена не требует специального оборудования, но клапан нужно предварительно отключить от системы под давлением. Рекомендуем привлекать специалиста, обслуживающего газовое оборудование.',
      },
    },
    {
      '@type': 'Question',
      name: 'Подходят ли фланцы для автоцистерн и стационарных резервуаров?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Да, фланцы на 4 и 8 отверстий предназначены для крепления предохранительной арматуры как на автоцистернах, так и на стационарных резервуарах СУГ.',
      },
    },
    {
      '@type': 'Question',
      name: 'Есть ли комплектующие для клапанов ТПА11?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Да, у нас в наличии запчасти для клапанов серии ТПА11. Уточните нужную деталь по телефону +7 960 937-35-42.',
      },
    },
    {
      '@type': 'Question',
      name: 'Как быстро отправляете заказ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Склад в Барнауле, отгрузка в день заказа при наличии товара. Доставка транспортными компаниями по всей России, а также через маркетплейс Ozon.',
      },
    },
  ],
});

export default function ComponentFlange8PPCZ12() {
  const [quantity, setQuantity] = useState(1);
  const [showSpecs, setShowSpecs] = useState(false);
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: PRODUCT_ID,
      name: PRODUCT_NAME,
      price: PRODUCT_PRICE_RAW,
      image: PRODUCT_IMAGE,
      description: 'Фланец предохранительной арматуры на 8 отверстий для автоцистерн и резервуаров СУГ',
      quantity,
    });
    setOrderModalOpen(true);
  };

  return (
    <>
      <OrderModal open={orderModalOpen} onOpenChange={setOrderModalOpen} />
      <Helmet>
        <title>Фланец на 8 отверстий к ППЦЗ-12 купить — крепление предохранительной арматуры</title>
        <meta
          name="description"
          content="Фланец предохранительной арматуры на 8 отверстий для автоцистерн и резервуаров СУГ. Совместим с клапаном ППЦЗ-12. Цена 4 372 ₽. В наличии в Барнауле."
        />
        <meta
          name="keywords"
          content="фланец на 8 отверстий ППЦЗ-12, фланец предохранительной арматуры, фланец для автоцистерны, фланец резервуар СУГ, фланец ППЦЗ-12 купить, фланец ППЦЗ-12 цена, крепление предохранительного клапана, запчасти ППЦЗ-12 Барнаул"
        />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:title" content="Фланец на 8 отверстий к ППЦЗ-12 — СтальПроКлапан" />
        <meta property="og:description" content="Фланец предохранительной арматуры на 8 отверстий для автоцистерн и резервуаров СУГ. Цена 4 372 ₽ с НДС." />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:type" content="product" />
        <meta property="og:site_name" content="СтальПроКлапан" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:image" content={PRODUCT_IMAGE} />
        <meta property="og:image:alt" content="Фланец на 8 отверстий к клапану ППЦЗ-12" />
        <meta property="product:price:amount" content={String(PRODUCT_PRICE_RAW)} />
        <meta property="product:price:currency" content="RUB" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Фланец на 8 отверстий к ППЦЗ-12 — СтальПроКлапан" />
        <meta name="twitter:description" content="Фланец предохранительной арматуры на 8 отверстий для автоцистерн и резервуаров СУГ. Цена 4 372 ₽ с НДС." />
        <meta name="twitter:image" content={PRODUCT_IMAGE} />
        <script type="application/ld+json">{productLd}</script>
        <script type="application/ld+json">{breadcrumbLd}</script>
        <script type="application/ld+json">{faqLd}</script>
      </Helmet>

      <Header />

      <main className="container mx-auto px-4 md:px-6 py-6 sm:py-8">
        <div className="max-w-3xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <a href="/" className="hover:text-primary">Главная</a>
            <Icon name="ChevronRight" className="h-4 w-4" />
            <a href="/components/index.html" className="hover:text-primary">Комплектующие</a>
            <Icon name="ChevronRight" className="h-4 w-4" />
            <span className="text-gray-700">Фланец на 8 отверстий</span>
          </nav>

          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Купить фланец на 8 отверстий к ППЦЗ-12
            </h1>
            <div className="flex items-center gap-2">
              <span className="text-yellow-400 text-xl">★★★★★</span>
              <span className="text-sm text-gray-600">4.8 — <a href="/reviews/index.html" className="underline hover:text-primary">12 отзывов</a></span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            <span className="text-sm text-gray-500 self-center">Другие фланцы:</span>
            <a href="/components/flange4-ppcz12/index.html" className="px-3 py-1 rounded-full text-sm border border-gray-300 text-gray-600 hover:border-primary hover:text-primary transition-colors">4 отверстия</a>
            <a href="/components/flange8-ppcz12/index.html" className="px-3 py-1 rounded-full text-sm border border-primary text-primary hover:bg-primary hover:text-white transition-colors">8 отверстий</a>
          </div>

          <Card className="max-w-sm mx-auto hover:shadow-lg transition-shadow">
            <CardContent className="text-center p-6">
              <div
                className="bg-white p-6 rounded-lg mb-4 border cursor-pointer hover:shadow-md transition-shadow relative"
                onClick={() => setShowSpecs(!showSpecs)}
              >
                <img
                  src={PRODUCT_IMAGE}
                  alt="Фланец на 8 отверстий к клапану ППЦЗ-12"
                  width={192}
                  height={192}
                  className="w-full h-48 object-contain bg-white rounded"
                  loading="eager"
                  fetchPriority="high"
                />
                {showSpecs && (
                  <div className="absolute left-0 right-0 top-full z-50 bg-white rounded-lg shadow-xl border mt-1 text-left max-h-72 overflow-y-auto">
                    <div className="bg-gray-50 p-3 border-b flex justify-between items-center sticky top-0">
                      <h3 className="text-sm font-bold text-gray-900">{PRODUCT_NAME}</h3>
                      <button onClick={(e) => { e.stopPropagation(); setShowSpecs(false); }} className="text-gray-400 hover:text-gray-600">
                        <Icon name="X" className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="p-3 space-y-2 text-sm">
                      {flangeSpecs.map((spec, i) => (
                        <div key={i}>
                          <span className="font-semibold">{spec.label}:</span> {spec.value}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <h3 className="text-xl font-semibold mb-1">{PRODUCT_NAME}</h3>
              <div className="flex items-center justify-center gap-1 mb-4">
                <span className="text-yellow-400 text-sm">★★★★★</span>
                <span className="text-xs text-gray-500">4.8 (12 отзывов)</span>
              </div>
              <div className="mb-6">
                <p className="text-2xl font-bold text-primary mb-2">{PRODUCT_PRICE}</p>
                <p className="text-sm text-gray-600">с НДС</p>
              </div>
              <div className="flex items-center justify-center gap-3 mb-4">
                <label className="text-sm font-medium">Количество:</label>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-16 px-2 py-1 border rounded text-center"
                />
              </div>
              <Button className="w-full mb-2" size="lg" variant="outline" asChild>
                <a href="https://www.ozon.ru/product/flanets-dlya-predohranitelnogo-klapana-pptsz-12-3084202121/" target="_blank" rel="noopener noreferrer">
                  <Icon name="ShoppingBag" className="mr-2 h-5 w-5" />
                  Купить на Ozon
                </a>
              </Button>
              <Button className="w-full" size="lg" onClick={handleAddToCart}>
                <Icon name="ShoppingCart" className="mr-2 h-5 w-5" />
                Заказать
              </Button>
            </CardContent>
          </Card>

          <ComponentsDetails />
          <ComponentsFAQ />
        </div>
      </main>

      <Footer />
    </>
  );
}