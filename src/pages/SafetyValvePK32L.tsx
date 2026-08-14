import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import SafetyValveDetails from '@/components/safety-valve/SafetyValveDetails';
import SafetyValveFAQ from '@/components/safety-valve/SafetyValveFAQ';
import OrderModal from '@/components/OrderModal';

const PRODUCT_IMAGE = 'https://cdn.poehali.dev/files/f187ae93-500e-48da-b85b-e45604043b8c.jpg';
const PRODUCT_PRICE_RAW = 15860;
const PRODUCT_PRICE = '15 860 ₽';
const PRODUCT_NAME = 'Клапан предохранительный пружинный ПК-32-Л';
const PRODUCT_ID = 'safety-valve-pk32l';
const CANONICAL = 'https://стальпро.com/safety-valve/pk-32-l';

const techSpecs = [
  { label: 'Тип', value: 'Пружинный предохранительный' },
  { label: 'Рабочая среда', value: 'СУГ' },
  { label: 'Условный диаметр', value: 'DN32' },
  { label: 'Комплектация', value: 'ПК-32-Л + запорный клапан ЗК-32 + уплотнительное кольцо' },
];

const productLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: PRODUCT_NAME,
  image: PRODUCT_IMAGE,
  description: 'Пружинный предохранительный клапан ПК-32-Л в комплекте с запорным клапаном ЗК-32 и уплотнительным кольцом. DN32, для СУГ.',
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
    reviewCount: '24',
    bestRating: '5',
  },
});

const breadcrumbLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://стальпро.com/' },
    { '@type': 'ListItem', position: 2, name: 'Предохранительный клапан', item: 'https://стальпро.com/safety-valve' },
    { '@type': 'ListItem', position: 3, name: 'ПК-32-Л', item: CANONICAL },
  ],
});

export default function SafetyValvePK32L() {
  const [quantity, setQuantity] = useState(1);
  const [showSpecs, setShowSpecs] = useState(false);
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const { addToCart } = useCart();
  const { user } = useAuth();

  const handleAddToCart = () => {
    if (user) {
      addToCart({
        id: PRODUCT_ID,
        name: PRODUCT_NAME,
        price: PRODUCT_PRICE_RAW,
        image: PRODUCT_IMAGE,
        description: 'Комплект для надёжной защиты резервуаров СУГ',
        quantity,
      });
    }
    setOrderModalOpen(true);
  };

  return (
    <>
      <OrderModal open={orderModalOpen} onOpenChange={setOrderModalOpen} />
      <Helmet>
        <title>Предохранительный клапан ПК-32-Л купить — с запорным клапаном ЗК-32</title>
        <meta
          name="description"
          content="Пружинный предохранительный клапан ПК-32-Л DN32 в комплекте с запорным клапаном ЗК-32. Для резервуаров СУГ. Цена 15 860 ₽. В наличии. Звоните!"
        />
        <meta
          name="keywords"
          content="предохранительный клапан ПК-32-Л, ПК-32-Л купить, ПК-32-Л цена, запорный клапан ЗК-32, клапан DN32 СУГ"
        />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:title" content="Предохранительный клапан ПК-32-Л — СтальПроКлапан" />
        <meta property="og:description" content="Пружинный предохранительный клапан DN32 в комплекте с запорным клапаном ЗК-32. Цена 15 860 ₽ с НДС. В наличии." />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:type" content="product" />
        <meta property="og:image" content={PRODUCT_IMAGE} />
        <meta property="og:image:alt" content="Клапан предохранительный пружинный ПК-32-Л" />
        <meta property="product:price:amount" content={String(PRODUCT_PRICE_RAW)} />
        <meta property="product:price:currency" content="RUB" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={PRODUCT_IMAGE} />
        <script type="application/ld+json">{productLd}</script>
        <script type="application/ld+json">{breadcrumbLd}</script>
      </Helmet>

      <Header />

      <main className="container mx-auto px-4 md:px-6 py-6 sm:py-8">
        <div className="max-w-3xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <a href="/" className="hover:text-primary">Главная</a>
            <Icon name="ChevronRight" className="h-4 w-4" />
            <a href="/safety-valve" className="hover:text-primary">Предохранительный клапан</a>
            <Icon name="ChevronRight" className="h-4 w-4" />
            <span className="text-gray-700">ПК-32-Л</span>
          </nav>

          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Купить предохранительный клапан ПК-32-Л
            </h1>
            <div className="flex items-center gap-2">
              <span className="text-yellow-400 text-xl">★★★★★</span>
              <span className="text-sm text-gray-600">4.8 — <a href="/reviews" className="underline hover:text-primary">24 отзыва</a></span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            <span className="text-sm text-gray-500 self-center">Другие модели:</span>
            <a href="/safety-valve/ppcz-12" className="px-3 py-1 rounded-full text-sm border border-gray-300 text-gray-600 hover:border-primary hover:text-primary transition-colors">ППЦЗ-12</a>
            <a href="/safety-valve/pk-32-l" className="px-3 py-1 rounded-full text-sm border border-primary text-primary hover:bg-primary hover:text-white transition-colors">ПК-32-Л</a>
          </div>

          <Card className="w-full max-w-md mx-auto flex flex-col">
            <CardContent className="p-6 flex flex-col flex-1">
              <div className="relative">
                <div
                  className="aspect-square bg-white rounded-lg mb-4 border overflow-hidden w-56 h-56 mx-auto cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => setShowSpecs(!showSpecs)}
                >
                  <img
                    src={PRODUCT_IMAGE}
                    alt="Клапан предохранительный пружинный ПК-32-Л"
                    className="w-full h-full object-contain rounded-lg p-2"
                    loading="eager"
                    fetchpriority="high"
                  />
                </div>
                {showSpecs && (
                  <div className="absolute left-0 right-0 z-50 bg-white rounded-lg shadow-xl border mt-1">
                    <div className="bg-gray-50 p-3 border-b flex justify-between items-center">
                      <h3 className="text-sm font-bold text-gray-900">Технические характеристики ПК-32-Л</h3>
                      <button onClick={() => setShowSpecs(false)} className="text-gray-400 hover:text-gray-600">
                        <Icon name="X" className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="p-3 space-y-2 text-xs">
                      {techSpecs.map((spec, i) => (
                        <div key={i}>
                          <span className="font-semibold">{spec.label}:</span> {spec.value}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="text-center flex flex-col flex-1">
                <h3 className="text-base font-semibold text-gray-900 mb-1">{PRODUCT_NAME}</h3>
                <div className="flex items-center justify-center gap-1 mb-2">
                  <span className="text-yellow-400 text-sm">★★★★★</span>
                  <span className="text-xs text-gray-500">4.8 (24 отзыва)</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">Комплект для надёжной защиты резервуаров СУГ</p>
                <div className="text-2xl font-bold text-primary mb-4">
                  {PRODUCT_PRICE} <span className="text-sm text-gray-500">с НДС</span>
                </div>
                <div className="mt-auto">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      min="1"
                      className="w-20 px-3 py-2 text-sm border rounded text-center"
                    />
                    <span className="text-sm text-gray-600">шт.</span>
                  </div>
                  <Button size="lg" variant="outline" className="w-full mb-2" asChild>
                    <a
                      href="https://cdn.poehali.dev/projects/cbca45d3-e5bd-4606-92f4-2a84a020c161/bucket/docs/passport-pk32l.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon name="FileText" className="mr-1 h-3 w-3" />
                      ПАСПОРТ
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="w-full mb-2" asChild>
                    <a href="https://www.ozon.ru/product/klapan-predohranitelnyy-rs3132-3201218309/" target="_blank" rel="noopener noreferrer">
                      <Icon name="ShoppingBag" className="mr-1 h-3 w-3" />
                      Купить на Ozon
                    </a>
                  </Button>
                  <Button size="lg" className="w-full" onClick={handleAddToCart}>
                    <Icon name="ShoppingCart" className="mr-1 h-3 w-3" />
                    Заказать
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <SafetyValveDetails />
          <SafetyValveFAQ />
        </div>
      </main>

      <Footer />
    </>
  );
}