import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import SpeedValveHead from '@/components/speed-valve/SpeedValveHead';
import SpeedValveHeader from '@/components/speed-valve/SpeedValveHeader';
import SpeedValveProductCard from '@/components/speed-valve/SpeedValveProductCard';
import SpeedValveCart from '@/components/speed-valve/SpeedValveCart';
import Icon from '@/components/ui/icon';

export default function SpeedValve() {
  const [quantity25, setQuantity25] = useState(1);
  const [quantity32, setQuantity32] = useState(1);
  const [quantity40, setQuantity40] = useState(1);
  const [quantity50, setQuantity50] = useState(1);
  const { addToCart } = useCart();
  const { user } = useAuth();

  const handleAddToCart = (product: Record<string, unknown>) => {
    if (!user) {
      window.location.href = '/login';
      return;
    }
    addToCart(product);
  };

  const commonSpecs = [
    { label: 'Условное давление', value: '4,0 МПа (40 кгс/см²)' },
    { label: 'Климатическое исполнение', value: 'УХЛI (от -60С до +40С)' },
    { label: 'Температура рабочей среды', value: 'не более 300С' },
    { label: 'Присоединение к трубопроводу', value: 'межфланцевое' },
    { label: 'Средний срок службы', value: '5 лет' },
    { label: 'Материал корпуса', value: 'сталь 12X18H10T' },
    { label: 'Материал тарелки', value: 'сталь 12X18H10T' },
    { label: 'Пружина', value: 'Проволока по ГОСТ9389-75 с покрытием МЗН3' },
  ];

  return (
    <>
    <Helmet>
      <title>Скоростной клапан межфланцевый ТПА11 ДУ25/32/40/50 купить — аналог ZNW, VENGO, AZT</title>
      <meta name="description" content="Скоростной клапан межфланцевый ТПА11 для перекрытия аварийного потока СУГ. Аналог ZNW DN50, VENGO, AZT, КС-40. АГЗС, ГНС, автоцистерны. В наличии на складе. Доставка по РФ. Цена от 5 592 ₽. Звоните!" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="keywords" content="скоростной клапан межфланцевый, клапан скоростной межфланцевый ДУ50, клапан скоростной межфланцевый ДУ40, клапан скоростной межфланцевый ДУ32, клапан скоростной межфланцевый ДУ25, ТПА11, ТПА11-025, ТПА11-032, ТПА11-040, ТПА11-050, аналог ZNW DN50, аналог ZNW DN40, аналог ZNW DN25, аналог VENGO, аналог AZT, аналог КС-40, клапан скоростной СУГ купить, клапан аварийного отключения СУГ, быстрозапорный клапан АГЗС, клапан для автоцистерны СУГ, скоростной клапан ГНС, скоростной клапан купить Барнаул, скоростной клапан купить Новосибирск, скоростной клапан купить Сибирь" />
      <meta property="og:title" content="Скоростной клапан ТПА11 — СтальПроКлапан" />
      <meta property="og:description" content="Быстрозакрывающиеся клапаны для аварийного отключения газопроводов. ТПА11-025/032/040/050. Доставка по всей России." />
      <meta property="og:url" content="https://xn--80awjdfch6f.com/speed-valve" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://cdn.poehali.dev/files/44a2bc16-d26e-426a-bfa5-6e85ea98ae8a.png" />
      <meta property="og:image:alt" content="Скоростной клапан межфланцевый ТПА11-025" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://cdn.poehali.dev/files/44a2bc16-d26e-426a-bfa5-6e85ea98ae8a.png" />
      <link rel="canonical" href="https://xn--80awjdfch6f.com/speed-valve" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {"@type": "ListItem", "position": 1, "name": "Главная", "item": "https://xn--80awjdfch6f.com/"},
          {"@type": "ListItem", "position": 2, "name": "Скоростной клапан", "item": "https://xn--80awjdfch6f.com/speed-valve"}
        ]
      })}</script>
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Скоростной клапан межфланцевый ТПА11",
        "description": "Быстрозакрывающиеся клапаны для аварийного отключения газопроводов СУГ. ДУ25/32/40/50.",
        "image": "https://cdn.poehali.dev/files/44a2bc16-d26e-426a-bfa5-6e85ea98ae8a.png",
        "brand": {"@type": "Brand", "name": "СтальПроКлапан"},
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "18",
          "bestRating": "5",
          "worstRating": "1"
        },
        "offers": {
          "@type": "AggregateOffer",
          "lowPrice": "5592",
          "highPrice": "10065",
          "priceCurrency": "RUB",
          "offerCount": "4",
          "availability": "https://schema.org/InStock"
        }
      })}</script>
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Скоростные клапаны межфланцевые ТПА11",
        "url": "https://xn--80awjdfch6f.com/speed-valve",
        "itemListElement": [
          {
            "@type": "ListItem", "position": 1,
            "item": {
              "@type": "Product",
              "name": "Скоростной клапан межфланцевый ДУ25 ТПА11-025",
              "description": "Компактный быстродействующий клапан для малых диаметров трубопроводов СУГ",
              "image": "https://cdn.poehali.dev/files/44a2bc16-d26e-426a-bfa5-6e85ea98ae8a.png",
              "sku": "ТПА11-025",
              "brand": {"@type": "Brand", "name": "СтальПроКлапан"},
              "offers": {"@type": "Offer", "price": "5592", "priceCurrency": "RUB", "availability": "https://schema.org/InStock", "itemCondition": "https://schema.org/NewCondition", "url": "https://xn--80awjdfch6f.com/speed-valve", "seller": {"@type": "Organization", "name": "СтальПроКлапан"}}
            }
          },
          {
            "@type": "ListItem", "position": 2,
            "item": {
              "@type": "Product",
              "name": "Скоростной клапан межфланцевый ДУ32 ТПА11-032",
              "description": "Надёжное решение для средних диаметров с высокой скоростью срабатывания",
              "image": "https://cdn.poehali.dev/files/a5f6db14-b102-4128-acba-cdd414c672d5.jpg",
              "sku": "ТПА11-032",
              "brand": {"@type": "Brand", "name": "СтальПроКлапан"},
              "offers": {"@type": "Offer", "price": "6202", "priceCurrency": "RUB", "availability": "https://schema.org/InStock", "itemCondition": "https://schema.org/NewCondition", "url": "https://xn--80awjdfch6f.com/speed-valve", "seller": {"@type": "Organization", "name": "СтальПроКлапан"}}
            }
          },
          {
            "@type": "ListItem", "position": 3,
            "item": {
              "@type": "Product",
              "name": "Скоростной клапан межфланцевый ДУ40 ТПА11-040",
              "description": "Надёжное решение для средних диаметров с высокой скоростью срабатывания",
              "image": "https://cdn.poehali.dev/files/8a4392c5-af78-4f21-86ef-1d9f5da98262.jpg",
              "sku": "ТПА11-040",
              "brand": {"@type": "Brand", "name": "СтальПроКлапан"},
              "offers": {"@type": "Offer", "price": "7015", "priceCurrency": "RUB", "availability": "https://schema.org/InStock", "itemCondition": "https://schema.org/NewCondition", "url": "https://xn--80awjdfch6f.com/speed-valve", "seller": {"@type": "Organization", "name": "СтальПроКлапан"}}
            }
          },
          {
            "@type": "ListItem", "position": 4,
            "item": {
              "@type": "Product",
              "name": "Скоростной клапан межфланцевый ДУ50 ТПА11-050",
              "description": "Надёжное решение для больших диаметров с высокой скоростью срабатывания",
              "image": "https://cdn.poehali.dev/files/5ac93727-7216-4047-aa8d-69d6b828c2a1.jpg",
              "sku": "ТПА11-050",
              "brand": {"@type": "Brand", "name": "СтальПроКлапан"},
              "offers": {"@type": "Offer", "price": "10065", "priceCurrency": "RUB", "availability": "https://schema.org/InStock", "itemCondition": "https://schema.org/NewCondition", "url": "https://xn--80awjdfch6f.com/speed-valve", "seller": {"@type": "Organization", "name": "СтальПроКлапан"}}
            }
          }
        ]
      })}</script>
    </Helmet>
    <div className="min-h-screen bg-gray-50">
      <SpeedValveHead />
      <SpeedValveHeader />

      <main className="container mx-auto px-4 md:px-6 py-6 sm:py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-4 sm:mb-6 text-sm text-gray-600">
            <a href="/" className="hover:text-primary">Главная</a>
            <span className="mx-2">/</span>
            <span>Скоростной клапан</span>
          </div>

          <div className="mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Скоростной клапан
            </h1>
            <p className="text-base sm:text-lg text-gray-600">
              Высокоскоростные клапанные решения для промышленных применений
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <SpeedValveProductCard
              id="speed-valve-du25"
              name="Скоростной клапан межфланцевый ДУ25"
              description="Компактный быстродействующий клапан для малых диаметров трубопроводов"
              price="5 592 ₽"
              priceRaw={5592}
              image="https://cdn.poehali.dev/files/44a2bc16-d26e-426a-bfa5-6e85ea98ae8a.png"
              imageAlt="Скоростной клапан межфланцевый ДУ25"
              imageStyle={{ objectPosition: 'center -90%' }}
              quantity={quantity25}
              onQuantityChange={setQuantity25}
              onAddToCart={handleAddToCart}
              techTitle="Технические характеристики ДУ25"
              techSpecs={[
                ...commonSpecs.slice(0, 4),
                { label: 'Проход условный, DN', value: '25' },
                { label: 'Строительная длина, B (мм)', value: '35' },
                ...commonSpecs.slice(4),
              ]}
            />

            <SpeedValveProductCard
              id="speed-valve-du32"
              name="Скоростной клапан межфланцевый ДУ32"
              description="Надежное решение для средних диаметров с высокой скоростью срабатывания"
              price="6 202 ₽"
              priceRaw={6202}
              image="https://cdn.poehali.dev/files/a5f6db14-b102-4128-acba-cdd414c672d5.jpg"
              imageAlt="Скоростной клапан межфланцевый ДУ32"
              imageStyle={{ objectPosition: 'center -90%' }}
              quantity={quantity32}
              onQuantityChange={setQuantity32}
              onAddToCart={handleAddToCart}
              techTitle="Технические характеристики ДУ32"
              techSpecs={[
                ...commonSpecs.slice(0, 4),
                { label: 'Проход условный, DN', value: '32' },
                { label: 'Строительная длина, B (мм)', value: '40' },
                ...commonSpecs.slice(4),
              ]}
            />

            <SpeedValveProductCard
              id="speed-valve-du50"
              name="Скоростной клапан межфланцевый ДУ50"
              description="Надежное решение для средних диаметров с высокой скоростью срабатывания"
              price="10 065 ₽"
              priceRaw={10065}
              image="https://cdn.poehali.dev/files/5ac93727-7216-4047-aa8d-69d6b828c2a1.jpg"
              imageAlt="Скоростной клапан межфланцевый ДУ50"
              quantity={quantity50}
              onQuantityChange={setQuantity50}
              onAddToCart={handleAddToCart}
              techTitle="Технические характеристики ДУ50"
              techSpecs={[
                ...commonSpecs.slice(0, 4),
                { label: 'Проход условный, DN', value: '50' },
                { label: 'Диаметр клапана (мм)', value: '107' },
                { label: 'Строительная длина, B (мм)', value: '50' },
                ...commonSpecs.slice(4),
              ]}
            />

            <SpeedValveProductCard
              id="speed-valve-du40"
              name="Скоростной клапан межфланцевый ДУ40"
              description="Надежное решение для средних диаметров с высокой скоростью срабатывания"
              price="7 015 ₽"
              priceRaw={7015}
              image="https://cdn.poehali.dev/files/8a4392c5-af78-4f21-86ef-1d9f5da98262.jpg"
              imageAlt="Скоростной клапан межфланцевый ДУ40"
              quantity={quantity40}
              onQuantityChange={setQuantity40}
              onAddToCart={handleAddToCart}
              techTitle="Технические характеристики ДУ40"
              techSpecs={[
                ...commonSpecs.slice(0, 4),
                { label: 'Проход условный, DN', value: '40' },
                { label: 'Диаметр клапана (мм)', value: '90' },
                { label: 'Строительная длина, B (мм)', value: '50' },
                ...commonSpecs.slice(4),
              ]}
            />
          </div>
        </div>

        <SpeedValveCart />
      </main>

      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-4">
                <Icon name="Factory" className="h-6 w-6 sm:h-8 sm:w-8 text-primary mr-3" />
                <h5 className="text-lg sm:text-xl font-bold">СтальПро</h5>
              </div>
              <p className="text-gray-400 text-sm sm:text-base">Надёжные решения промышленного газового оборудования для вашего бизнеса.</p>
            </div>
            <div>
              <h6 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Продукция</h6>
              <ul className="space-y-1 sm:space-y-2 text-gray-400 text-sm sm:text-base">
                <li><a href="/speed-valve" className="hover:text-white transition-colors">Скоростной клапан</a></li>
                <li><a href="/safety-valve" className="hover:text-white transition-colors">Предохранительный клапан</a></li>
                <li><a href="/components" className="hover:text-white transition-colors">Комплектующие</a></li>
              </ul>
            </div>
            <div className="sm:col-span-2 lg:col-span-1">
              <h6 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Контакты</h6>
              <ul className="space-y-1 sm:space-y-2 text-gray-400 text-sm sm:text-base">
                <li>Алтайский край, г. Барнаул, ул. Кавалерийская 14, бокс 171</li>
                <li><a href="tel:+79609373542" className="hover:text-white transition-colors">+7 960 937-35-42</a>, <a href="tel:+79609505904" className="hover:text-white transition-colors">+7 960 950-59-04</a></li>
                <li>sadoxa1996@mail.ru</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 СтальПро. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}