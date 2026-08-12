import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import FlangesHeader from '@/components/flanges/FlangesHeader';
import FlangesDetails from '@/components/flanges/FlangesDetails';
import FlangesFAQ from '@/components/flanges/FlangesFAQ';

const PRODUCT_IMAGE = 'https://cdn.poehali.dev/projects/cbca45d3-e5bd-4606-92f4-2a84a020c161/bucket/fe6a92f9-5b2f-4420-b6ac-7c91ea51ee20.jpg';

export default function Flanges() {
  const [quantity, setQuantity] = useState(1);
  const { addToCart, cart, removeFromCart, updateQuantity, clearCart, getTotalPrice, getTotalItems } = useCart();
  const { user } = useAuth();

  const handleAddToCart = (product: Record<string, unknown>) => {
    if (!user) {
      window.location.href = '/login';
      return;
    }
    addToCart(product as Parameters<typeof addToCart>[0]);
  };

  return (
    <>
    <Helmet>
      <title>Фланцы ГОСТ 33259-2015 купить — СтальПроКлапан, Барнаул</title>
      <meta name="description" content="Фланцы стальные плоские приварные по ГОСТ 33259-2015 для трубопроводов СУГ. Применение: АГЗС, ГНС, автоцистерны. В наличии на складе в Барнауле. Доставка по РФ." />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="keywords" content="фланцы ГОСТ 33259-2015, фланец стальной плоский приварной, фланец купить, фланец для СУГ, фланец трубопровода, фланец АГЗС, фланец ГНС, СтальПроКлапан Барнаул" />
      <meta property="og:title" content="Фланцы ГОСТ 33259-2015 — СтальПроКлапан" />
      <meta property="og:description" content="Фланцы стальные плоские приварные по ГОСТ 33259-2015 для трубопроводов СУГ. Доставка по всей России." />
      <meta property="og:url" content="https://xn--80awjdfch6f.com/flanges" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={PRODUCT_IMAGE} />
      <meta property="og:image:alt" content="Фланцы ГОСТ 33259-2015" />
      <meta property="product:price:amount" content="2500" />
      <meta property="product:price:currency" content="RUB" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={PRODUCT_IMAGE} />
      <link rel="canonical" href="https://xn--80awjdfch6f.com/flanges" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {"@type": "ListItem", "position": 1, "name": "Главная", "item": "https://xn--80awjdfch6f.com/"},
          {"@type": "ListItem", "position": 2, "name": "Фланцы ГОСТ 33259-2015", "item": "https://xn--80awjdfch6f.com/flanges"}
        ]
      })}</script>
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Фланцы ГОСТ 33259-2015",
        "description": "Фланцы стальные плоские приварные по ГОСТ 33259-2015. Применение: АГЗС, ГНС, автоцистерны, трубопроводы СУГ.",
        "image": PRODUCT_IMAGE,
        "brand": {"@type": "Brand", "name": "СтальПроКлапан"},
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "6",
          "bestRating": "5",
          "worstRating": "1"
        },
        "offers": {
          "@type": "AggregateOffer",
          "lowPrice": "2500",
          "highPrice": "2500",
          "priceCurrency": "RUB",
          "priceValidUntil": "2026-12-31",
          "offerCount": "1",
          "availability": "https://schema.org/InStock"
        }
      })}</script>
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Фланцы ГОСТ 33259-2015",
        "url": "https://xn--80awjdfch6f.com/flanges",
        "itemListElement": [
          {
            "@type": "ListItem", "position": 1,
            "item": {
              "@type": "Product",
              "name": "Фланец стальной плоский приварной ГОСТ 33259-2015",
              "description": "Фланец для соединения трубопроводов и арматуры СУГ. Давление PN16, конструкционная сталь.",
              "image": PRODUCT_IMAGE,
              "sku": "flange-gost-33259-2015",
              "brand": {"@type": "Brand", "name": "СтальПроКлапан"},
              "aggregateRating": {"@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "6", "bestRating": "5"},
              "offers": {"@type": "Offer", "price": "2500", "priceCurrency": "RUB", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "itemCondition": "https://schema.org/NewCondition", "url": "https://xn--80awjdfch6f.com/flanges", "seller": {"@type": "Organization", "name": "СтальПроКлапан"}}
            }
          }
        ]
      })}</script>
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Что означает стандарт ГОСТ 33259-2015?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ГОСТ 33259-2015 — межгосударственный стандарт на фланцы арматуры, соединительных частей и трубопроводов, устанавливающий типы, конструкцию, размеры и технические требования к фланцевым соединениям."
            }
          },
          {
            "@type": "Question",
            "name": "Как подобрать нужный диаметр фланца?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Диаметр фланца должен соответствовать условному проходу трубопровода или присоединительному размеру арматуры. Если сомневаетесь — уточните диаметр по телефону +7 960 937-35-42."
            }
          },
          {
            "@type": "Question",
            "name": "На какое давление рассчитаны фланцы?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Фланцы изготовлены для давления PN16, что соответствует эксплуатационным требованиям большинства систем СУГ на АГЗС и ГНС."
            }
          },
          {
            "@type": "Question",
            "name": "Возможна ли доставка по всей России?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Да. Склад в Барнауле, отгрузка в день заказа при наличии товара. Доставка транспортными компаниями по всей России, а также через маркетплейс Ozon."
            }
          },
          {
            "@type": "Question",
            "name": "Есть ли документы на фланцы?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Да, в комплекте поставки — сертификат соответствия ГОСТ 33259-2015. Документы можно запросить по email sadoxa1996@mail.ru."
            }
          }
        ]
      })}</script>
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
          <span className="text-gray-900">Фланцы ГОСТ 33259-2015</span>
        </nav>

        {/* Title */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Фланцы ГОСТ 33259-2015
          </h1>
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-yellow-400 text-xl">★★★★★</span>
            <span className="text-sm text-gray-600">4.8 — <a href="/reviews" className="underline hover:text-primary">6 отзывов</a></span>
          </div>
          <p className="text-lg text-gray-600">
            Стальные плоские приварные фланцы для трубопроводов СУГ
          </p>
        </div>

        {/* Product Gallery */}
        <div className="flex flex-wrap justify-center gap-6 items-stretch">
          <Card className="w-full max-w-md flex flex-col">
            <CardContent className="p-6 flex flex-col flex-1">
              <div className="w-56 h-56 mx-auto mb-4 rounded-lg border overflow-hidden bg-white flex items-center justify-center">
                <img
                  src={PRODUCT_IMAGE}
                  alt="Фланец стальной плоский приварной ГОСТ 33259-2015"
                  className="w-full h-full object-contain p-2"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
              <div className="text-center flex flex-col flex-1">
                <h3 className="text-base font-semibold text-gray-900 mb-1">
                  Фланец стальной плоский приварной ГОСТ 33259-2015
                </h3>
                <div className="flex items-center justify-center gap-1 mb-2">
                  <span className="text-yellow-400 text-sm">★★★★★</span>
                  <span className="text-xs text-gray-500">4.8 (6 отзывов)</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Фланец для соединения трубопроводов и арматуры СУГ. Давление PN16, конструкционная сталь, точная механическая обработка посадочных поверхностей.
                </p>
                <div className="text-2xl font-bold text-primary mb-4">
                  2 500 ₽ <span className="text-sm text-gray-500">с НДС</span>
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
                  <Button
                    size="lg"
                    className="w-full"
                    onClick={() => handleAddToCart({
                      id: 'flange-gost-33259-2015',
                      name: 'Фланец стальной плоский приварной ГОСТ 33259-2015',
                      price: 2500,
                      image: PRODUCT_IMAGE,
                      description: 'Фланец для соединения трубопроводов и арматуры СУГ',
                      quantity
                    })}
                  >
                    <Icon name="ShoppingCart" className="mr-1 h-3 w-3" />
                    Заказать
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <FlangesDetails />
        <FlangesFAQ />
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
                <Button size="lg">
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