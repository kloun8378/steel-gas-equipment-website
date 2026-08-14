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

const PRODUCT_IMAGE = 'https://cdn.poehali.dev/files/848c3a31-030c-4548-a054-1475fca103c8.jpeg';
const PRODUCT_PRICE_RAW = 9659;
const PRODUCT_PRICE = '9 659 ₽';
const PRODUCT_NAME = 'Предохранительный клапан ППЦЗ-12';
const PRODUCT_ID = 'safety-valve-ppcz12';
const CANONICAL = 'https://стальпро.com/safety-valve/ppcz-12';

const techSpecs = [
  { label: 'Тип клапана', value: 'Пружинный прямого действия' },
  { label: 'Рабочая среда', value: 'СУГ по ГОСТ 20448-90 или ГОСТ 27578-87' },
  { label: 'Рабочее давление Рр, МПа', value: '1,6' },
  { label: 'Расчетное давление Ррасч, МПа', value: '1,84' },
  { label: 'Давление настройки Рн, МПа', value: 'от 1,6 до 1,84' },
  { label: 'Диаметр условного прохода Ду, мм', value: '25' },
  { label: 'Расчетное проходное сечение F, мм²', value: '412' },
  { label: 'Пропускная способность G, кг/час', value: '4271' },
  { label: 'Коэффициент расхода для газообразных сред', value: '0,58' },
  { label: 'Давление закрытия, МПа', value: 'от 1,28 до 1,472' },
  { label: 'Давление полного открытия, МПа', value: 'от 1,84 до 2,0' },
  { label: 'Герметичность в затворе', value: 'Класс А (нет видимых протечек) по ГОСТ 9544-2005' },
  { label: 'Рабочая температура, °С', value: 'от -40 до +45' },
  { label: 'Относительная влажность при +35°С, %', value: 'не более 98' },
  { label: 'Диаметр, мм, не более', value: '92' },
  { label: 'Высота, мм, не более', value: '238' },
  { label: 'Масса, кг, не более', value: '3,6' },
  { label: 'Назначенный срок службы, лет', value: '10' },
  { label: 'Тип соединения с сосудом', value: 'Резьбовое М 72х2' },
  { label: 'Материал корпуса', value: 'Сталь 20Х13, ГОСТ 5632-72' },
  { label: 'Материал золотника в сборе', value: 'Сталь 45, ГОСТ 1050-88' },
  { label: 'Материал пружины', value: 'Проволока 60С2А, ГОСТ 14963-78' },
];

const productLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: PRODUCT_NAME,
  image: PRODUCT_IMAGE,
  description: 'Предохранительный клапан ППЦЗ-12 пружинный прямого действия для СУГ. Рабочее давление 1,6 МПа. Аналог REGO RS3132. АГЗС, ГНС, автоцистерны.',
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
    { '@type': 'ListItem', position: 3, name: 'ППЦЗ-12', item: CANONICAL },
  ],
});

export default function SafetyValvePPCZ12() {
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
        description: 'Надежная защита оборудования от превышения давления',
        quantity,
      });
    }
    setOrderModalOpen(true);
  };

  return (
    <>
      <OrderModal open={orderModalOpen} onOpenChange={setOrderModalOpen} />
      <Helmet>
        <title>Предохранительный клапан ППЦЗ-12 купить — аналог REGO RS3132</title>
        <meta
          name="description"
          content="Предохранительный клапан ППЦЗ-12 для СУГ. Рабочее давление 1,6 МПа. Аналог REGO RS3132. АГЗС, ГНС, автоцистерны. Цена 9 659 ₽. В наличии. Звоните!"
        />
        <meta
          name="keywords"
          content="предохранительный клапан ППЦЗ-12, ППЦЗ-12 купить, ППЦЗ-12 цена, ППЦЗ-12 характеристики, аналог REGO RS3132, клапан для АГЗС, предохранительный клапан резервуар СУГ"
        />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:title" content="Предохранительный клапан ППЦЗ-12 — СтальПроКлапан" />
        <meta property="og:description" content="Клапан пружинный прямого действия для СУГ. Рабочее давление 1,6 МПа. Цена 9 659 ₽ с НДС. В наличии." />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:type" content="product" />
        <meta property="og:image" content={PRODUCT_IMAGE} />
        <meta property="og:image:alt" content="Предохранительный клапан ППЦЗ-12" />
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
            <span className="text-gray-700">ППЦЗ-12</span>
          </nav>

          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Купить предохранительный клапан ППЦЗ-12
            </h1>
            <div className="flex items-center gap-2">
              <span className="text-yellow-400 text-xl">★★★★★</span>
              <span className="text-sm text-gray-600">4.8 — <a href="/reviews" className="underline hover:text-primary">24 отзыва</a></span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            <span className="text-sm text-gray-500 self-center">Другие модели:</span>
            <a href="/safety-valve/ppcz-12" className="px-3 py-1 rounded-full text-sm border border-primary text-primary hover:bg-primary hover:text-white transition-colors">ППЦЗ-12</a>
            <a href="/safety-valve/pk-32-l" className="px-3 py-1 rounded-full text-sm border border-gray-300 text-gray-600 hover:border-primary hover:text-primary transition-colors">ПК-32-Л</a>
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
                    alt="Предохранительный клапан ППЦЗ-12"
                    className="w-full h-full object-contain rounded-lg p-2"
                    loading="eager"
                    fetchpriority="high"
                  />
                </div>
                {showSpecs && (
                  <div className="absolute left-0 right-0 z-50 bg-white rounded-lg shadow-xl border mt-1 max-h-72 overflow-y-auto">
                    <div className="bg-gray-50 p-3 border-b flex justify-between items-center sticky top-0">
                      <h3 className="text-sm font-bold text-gray-900">Технические характеристики ППЦЗ-12</h3>
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
                <p className="text-sm text-gray-600 mb-3">Надежная защита оборудования от превышения давления</p>
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
                      href="https://cdn.poehali.dev/projects/cbca45d3-e5bd-4606-92f4-2a84a020c161/bucket/docs/passport-safety-valve.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon name="FileText" className="mr-1 h-3 w-3" />
                      ПАСПОРТ
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="w-full mb-2" asChild>
                    <a href="https://www.ozon.ru/product/predohranitelnyy-klapan-pptsz-12-3084148966/" target="_blank" rel="noopener noreferrer">
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