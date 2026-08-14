import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import FlangesHeader from '@/components/flanges/FlangesHeader';
import OrderModal from '@/components/OrderModal';

const CANONICAL = 'https://стальпро.com/flanges/tip-01-ispolnenie-b';

const PRODUCT_IMAGE = 'https://cdn.poehali.dev/projects/cbca45d3-e5bd-4606-92f4-2a84a020c161/bucket/65209240-7cda-4461-a3e8-489fcdb0c0e1.webp';
const PRODUCT_PRICE_RAW = 1241;
const PRODUCT_PRICE = '1 241 ₽';
const PRODUCT_NAME = 'Фланец 100-1-01-1-B-Ст 20-I-dв 110 ГОСТ 33259-2015';
const PRODUCT_ID = 'flange-100-1-01-1-b-st20';

const techSpecs = [
  { label: 'DN номинальный диаметр', value: '100 мм' },
  { label: 'PN номинальное давление', value: '1' },
  { label: 'Ряд', value: '1' },
  { label: 'Группа контроля', value: '1' },
  { label: 'dв табличный диаметр отверстия', value: '110 мм' },
  { label: 'Вид фланца', value: 'Круглый' },
  { label: 'Толщина фланца', value: '14 мм' },
  { label: 'Диаметр крепёжного отверстия', value: '18 мм' },
  { label: 'Наружный диаметр фланца', value: '205 мм' },
  { label: 'Количество крепёжных отверстий', value: '4' },
  { label: 'Диаметр расположения крепёжных отверстий', value: '170 мм' },
  { label: 'Фаска под сварной шов', value: '4 мм' },
  { label: 'Внутренний диаметр', value: '110 мм' },
  { label: 'Масса', value: '2,14 кг' },
  { label: 'Материал', value: 'Сталь 20 ГОСТ 1050-2013' },
];

const productLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: PRODUCT_NAME,
  image: PRODUCT_IMAGE,
  description: 'Фланец плоский стальной 100-16-01-1-B-Ст.20-IV ГОСТ 33259-2015 — плоский приварной фланец с проходом Ду-100 на давление Ру-16. Монтаж насадкой на трубу с обваркой двумя угловыми швами.',
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
    reviewCount: '6',
    bestRating: '5',
  },
});

const breadcrumbLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://стальпро.com/' },
    { '@type': 'ListItem', position: 2, name: 'Фланцы ГОСТ 33259-2015', item: 'https://стальпро.com/flanges' },
    { '@type': 'ListItem', position: 3, name: 'Тип 01, исполнение B', item: CANONICAL },
  ],
});

export default function FlangesType01B() {
  const [quantity, setQuantity] = useState(1);
  const [showSpecs, setShowSpecs] = useState(false);
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const { addToCart, cart, removeFromCart, updateQuantity, clearCart, getTotalPrice, getTotalItems } = useCart();
  const { user } = useAuth();

  const handleAddToCart = () => {
    if (user) {
      addToCart({
        id: PRODUCT_ID,
        name: PRODUCT_NAME,
        price: PRODUCT_PRICE_RAW,
        image: PRODUCT_IMAGE,
        description: 'Плоский приварной фланец ГОСТ 33259-2015, Ду-100, Ру-16, исполнение B',
        quantity,
      });
    }
    setOrderModalOpen(true);
  };

  return (
    <>
    <OrderModal open={orderModalOpen} onOpenChange={setOrderModalOpen} />
    <Helmet>
      <title>Фланец 100-1-01-1-B-Ст 20-I-dв 110 ГОСТ 33259-2015 купить — СтальПроКлапан</title>
      <meta name="description" content="Фланец плоский стальной 100-16-01-1-B-Ст.20 ГОСТ 33259-2015, Ду-100, Ру-16, исполнение B. Цена 1 241 ₽ с НДС. В наличии на складе в Барнауле. Доставка по РФ." />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="keywords" content="фланец 100-1-01-1-B, фланец ГОСТ 33259-2015 Ду100, фланец плоский приварной Ру16, фланец Ст20 ГОСТ 33259-2015, фланец тип 01 исп B, СтальПроКлапан Барнаул" />
      <meta property="og:title" content="Фланец 100-1-01-1-B-Ст 20 ГОСТ 33259-2015 — СтальПроКлапан" />
      <meta property="og:description" content="Плоский приварной фланец Ду-100, Ру-16, исполнение B. Цена 1 241 ₽ с НДС. В наличии." />
      <meta property="og:url" content={CANONICAL} />
      <meta property="og:type" content="product" />
      <meta property="og:image" content={PRODUCT_IMAGE} />
      <meta property="og:image:alt" content={PRODUCT_NAME} />
      <meta property="product:price:amount" content={String(PRODUCT_PRICE_RAW)} />
      <meta property="product:price:currency" content="RUB" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={PRODUCT_IMAGE} />
      <link rel="canonical" href={CANONICAL} />
      <script type="application/ld+json">{breadcrumbLd}</script>
      <script type="application/ld+json">{productLd}</script>
    </Helmet>
    <div className="min-h-screen bg-gray-50">
      <FlangesHeader />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <span
            className="hover:text-primary cursor-pointer"
            onClick={() => window.location.href = '/'}
          >Главная</span>
          <span className="mx-2">/</span>
          <span
            className="hover:text-primary cursor-pointer"
            onClick={() => window.location.href = '/flanges'}
          >Фланцы ГОСТ 33259-2015</span>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Тип 01, исполнение B</span>
        </nav>

        {/* Title */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Фланец стальной плоский приварной тип 01 ГОСТ 33259-2015 исп B
          </h1>
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-yellow-400 text-xl">★★★★★</span>
            <span className="text-sm text-gray-600">4.8 — <a href="/reviews" className="underline hover:text-primary">6 отзывов</a></span>
          </div>
        </div>

        {/* Карточка товара */}
        <Card className="w-full max-w-md mx-auto flex flex-col">
          <CardContent className="p-6 flex flex-col flex-1">
            <div className="relative">
              <div
                className="aspect-square bg-white rounded-lg mb-4 border overflow-hidden w-56 h-56 mx-auto cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => setShowSpecs(!showSpecs)}
              >
                <img
                  src={PRODUCT_IMAGE}
                  alt={PRODUCT_NAME}
                  className="w-full h-full object-contain rounded-lg p-2"
                  loading="eager"
                  fetchpriority="high"
                />
              </div>
              {showSpecs && (
                <div className="absolute left-0 right-0 z-50 bg-white rounded-lg shadow-xl border mt-1 max-h-80 overflow-y-auto">
                  <div className="bg-gray-50 p-3 border-b flex justify-between items-center sticky top-0">
                    <h3 className="text-sm font-bold text-gray-900">Технические характеристики</h3>
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
                <span className="text-xs text-gray-500">4.8 (6 отзывов)</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Плоский приварной фланец с проходом Ду-100 на давление Ру-16. Монтаж насадкой на трубу с обваркой двумя угловыми швами.
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
                <Button size="lg" className="w-full" onClick={handleAddToCart}>
                  <Icon name="ShoppingCart" className="mr-1 h-3 w-3" />
                  Заказать
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Описание */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8 mt-8 max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Icon name="Info" className="h-5 w-5 text-primary" />
            Описание
          </h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            Фланец плоский стальной 100-16-01-1-B-Ст.20-IV ГОСТ 33259-2015 — плоский приварной фланец по ГОСТ 33259-2015 с проходом Ду-100 на давление Ру-16. Монтаж — насадкой на трубу с обваркой двумя угловыми швами. Размеры по ГОСТ 33259-2015, ряд 1.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Ставят на водопроводе, отоплении и общепромышленных линиях, где нет сильной вибрации и знакопеременных нагрузок. Для сборки узла нужны ответный фланец, прокладка и болты с гайками на тот же Ду и Ру.
          </p>
        </section>

        {/* Технические характеристики */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8 mt-8 max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Icon name="FileText" className="h-5 w-5 text-primary" />
            Технические характеристики
          </h2>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
            {techSpecs.map((spec, i) => (
              <div key={i} className="flex justify-between text-sm py-2 border-b border-gray-50 last:border-0">
                <span className="text-gray-500">{spec.label}</span>
                <span className="text-gray-900 font-medium text-right">{spec.value}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Корзина */}
      {cart.length > 0 && (
        <section className="bg-white py-8 border-t">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">МОЯ КОРЗИНА</h2>
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center gap-4 p-4 border rounded-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                    <div className="text-lg font-bold text-primary mt-1">
                      {item.price > 0 ? `${item.price.toLocaleString()} ₽` : 'По запросу'}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="outline" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</Button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <Button size="sm" variant="outline" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</Button>
                  </div>
                  <Button size="sm" variant="ghost" onClick={() => removeFromCart(item.id)}>
                    <Icon name="Trash2" className="h-4 w-4 text-red-500" />
                  </Button>
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-between items-center">
              <div className="text-xl font-bold">
                Итого: {getTotalPrice().toLocaleString()} ₽
              </div>
              <div className="flex gap-3">
                <Button variant="outline" onClick={clearCart}>Очистить корзину</Button>
                <Button size="lg" onClick={() => window.location.href = '/dashboard'}>
                  <Icon name="Send" className="mr-2 h-4 w-4" />
                  Оформить заказ ({getTotalItems()} шт.)
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
    </>
  );
}