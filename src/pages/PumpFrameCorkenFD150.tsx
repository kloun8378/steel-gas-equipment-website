import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useCart } from '@/context/CartContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import PumpEquipmentDetails from '@/components/pump-equipment/PumpEquipmentDetails';
import PumpEquipmentFAQ from '@/components/pump-equipment/PumpEquipmentFAQ';

const PRODUCT_IMAGE = 'https://cdn.poehali.dev/files/1e711c1f-0c57-4748-b5e9-177dc632096d.png';
const PRODUCT_PRICE_RAW = 3800;
const PRODUCT_PRICE = '3 800 ₽';
const PRODUCT_NAME = 'Рама насоса Corken FD 150';
const PRODUCT_ID = 'pump-frame-corken-fd150';
const CANONICAL = 'https://xn--80awjdfch6f.com/pump-equipment/corken-fd150-frame';

const productLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: PRODUCT_NAME,
  image: PRODUCT_IMAGE,
  description: 'Единая усиленная стальная рама для крепления насоса Corken FD 150 и двигателя. Обеспечивает жёсткость конструкции, предотвращает перекосы при монтаже.',
  brand: { '@type': 'Brand', name: 'Corken' },
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
    ratingValue: '4.7',
    reviewCount: '8',
    bestRating: '5',
  },
});

const breadcrumbLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://xn--80awjdfch6f.com/' },
    { '@type': 'ListItem', position: 2, name: 'Насосное оборудование', item: 'https://xn--80awjdfch6f.com/pump-equipment' },
    { '@type': 'ListItem', position: 3, name: 'Рама Corken FD 150', item: CANONICAL },
  ],
});

export default function PumpFrameCorkenFD150() {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: PRODUCT_ID,
      name: PRODUCT_NAME,
      price: PRODUCT_PRICE_RAW,
      image: PRODUCT_IMAGE,
      description: 'Единая усиленная стальная рама для крепления насоса и двигателя',
      quantity,
    });
  };

  return (
    <>
      <Helmet>
        <title>Рама насоса Corken FD 150 купить — СтальПроКлапан</title>
        <meta
          name="description"
          content="Единая усиленная стальная рама для крепления насоса Corken FD 150 и двигателя. Для АГЗС и ГНС. Цена 3 800 ₽. В наличии на складе в Барнауле. Доставка по РФ."
        />
        <meta
          name="keywords"
          content="рама насоса Corken FD 150, рама для насоса СУГ, крепление насоса Corken, запчасти для насоса АГЗС"
        />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:title" content="Рама насоса Corken FD 150 — СтальПроКлапан" />
        <meta property="og:description" content="Единая усиленная стальная рама для крепления насоса и двигателя. Цена 3 800 ₽ с НДС." />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:type" content="product" />
        <meta property="og:image" content={PRODUCT_IMAGE} />
        <meta property="og:image:alt" content="Рама насоса Corken FD 150" />
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
            <a href="/pump-equipment" className="hover:text-primary">Насосное оборудование</a>
            <Icon name="ChevronRight" className="h-4 w-4" />
            <span className="text-gray-700">Рама Corken FD 150</span>
          </nav>

          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Купить раму насоса Corken FD 150
            </h1>
            <div className="flex items-center gap-2">
              <span className="text-yellow-400 text-xl">★★★★★</span>
              <span className="text-sm text-gray-600">4.7 — <a href="/reviews" className="underline hover:text-primary">8 отзывов</a></span>
            </div>
          </div>

          <Card className="w-full max-w-md mx-auto flex flex-col">
            <CardContent className="p-6 flex flex-col flex-1">
              <div className="w-56 h-56 mx-auto mb-4 rounded-lg border overflow-hidden bg-white flex items-center justify-center">
                <img
                  src={PRODUCT_IMAGE}
                  alt="Рама насоса Corken FD 150"
                  className="w-full h-full object-contain p-2"
                  loading="eager"
                  fetchpriority="high"
                />
              </div>
              <div className="text-center flex flex-col flex-1">
                <h3 className="text-base font-semibold text-gray-900 mb-1">{PRODUCT_NAME}</h3>
                <div className="flex items-center justify-center gap-1 mb-2">
                  <span className="text-yellow-400 text-sm">★★★★★</span>
                  <span className="text-xs text-gray-500">4.7 (8 отзывов)</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Единая усиленная стальная рама для крепления насоса и двигателя. Обеспечивает жесткость конструкции, предотвращает перекосы при монтаже на основание. Является основой всего агрегата.
                </p>
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
                    <a href="https://www.ozon.ru/seller/stalpro-3601542/" target="_blank" rel="noopener noreferrer">
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

          <PumpEquipmentDetails />
          <PumpEquipmentFAQ />
        </div>
      </main>

      <Footer />
    </>
  );
}