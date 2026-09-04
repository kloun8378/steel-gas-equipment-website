import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useCart, CartItem } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import PumpEquipmentHeader from '@/components/pump-equipment/PumpEquipmentHeader';
import PumpEquipmentDetails from '@/components/pump-equipment/PumpEquipmentDetails';
import PumpEquipmentFAQ from '@/components/pump-equipment/PumpEquipmentFAQ';
import OrderModal from '@/components/OrderModal';

export default function PumpEquipment() {
  const [quantity2, setQuantity2] = useState(1);
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const { addToCart, cart, removeFromCart, updateQuantity, clearCart, getTotalPrice, getTotalItems } = useCart();
  const { user } = useAuth();

  const handleAddToCart = (product: Omit<CartItem, "quantity"> & { quantity?: number }) => {
    if (user) {
      addToCart(product as Parameters<typeof addToCart>[0]);
    }
    setOrderModalOpen(true);
  };

  return (
    <>
    <OrderModal open={orderModalOpen} onOpenChange={setOrderModalOpen} />
    <Helmet>
      <title>Насосное оборудование для СУГ купить — СтальПроКлапан, Барнаул</title>
      <meta name="description" content="Насосное оборудование для перекачки СУГ. Рамы Corken FD150. Применение: АГЗС, ГНС, автоцистерны. В наличии на складе в Барнауле. Доставка по РФ. Звоните!" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="keywords" content="насосное оборудование СУГ, насос сжиженный газ, насос АГЗС, насос ГНС, насос перекачка СУГ купить, СтальПроКлапан Барнаул" />
      <meta property="og:title" content="Насосное оборудование для СУГ — СтальПроКлапан" />
      <meta property="og:description" content="Насосы для перекачки сжиженных углеводородных газов. Доставка по всей России." />
      <meta property="og:url" content="https://стальпро.com/pump-equipment/index.html" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://cdn.poehali.dev/files/1e711c1f-0c57-4748-b5e9-177dc632096d.png" />
      <meta property="og:image:alt" content="Насосное оборудование для СУГ" />
      <meta property="product:price:amount" content="3800" />
      <meta property="product:price:currency" content="RUB" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://cdn.poehali.dev/files/1e711c1f-0c57-4748-b5e9-177dc632096d.png" />
      <link rel="canonical" href="https://стальпро.com/pump-equipment/index.html" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {"@type": "ListItem", "position": 1, "name": "Главная", "item": "https://стальпро.com/"},
          {"@type": "ListItem", "position": 2, "name": "Насосное оборудование", "item": "https://стальпро.com/pump-equipment/index.html"}
        ]
      })}</script>
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Насосное оборудование для СУГ",
        "description": "Насосы для перекачки сжиженных углеводородных газов. Применение: АГЗС, ГНС, автоцистерны.",
        "image": "https://cdn.poehali.dev/files/1e711c1f-0c57-4748-b5e9-177dc632096d.png",
        "brand": {"@type": "Brand", "name": "СтальПроКлапан"},
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.7",
          "reviewCount": "8",
          "bestRating": "5",
          "worstRating": "1"
        },
        "offers": {
          "@type": "AggregateOffer",
          "lowPrice": "3800",
          "highPrice": "3800",
          "priceCurrency": "RUB",
          "priceValidUntil": "2026-12-31",
          "offerCount": "1",
          "availability": "https://schema.org/InStock"
        }
      })}</script>
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Насосное оборудование для СУГ",
        "url": "https://стальпро.com/pump-equipment/index.html",
        "itemListElement": [
          {
            "@type": "ListItem", "position": 1,
            "item": {
              "@type": "Product",
              "name": "Рама насоса Corken FD 150",
              "description": "Единая усиленная стальная рама для крепления насоса и двигателя. Обеспечивает жёсткость конструкции, предотвращает перекосы при монтаже.",
              "image": "https://cdn.poehali.dev/files/1e711c1f-0c57-4748-b5e9-177dc632096d.png",
              "sku": "pump-frame-corken-fd150",
              "brand": {"@type": "Brand", "name": "Corken"},
              "aggregateRating": {"@type": "AggregateRating", "ratingValue": "4.7", "reviewCount": "8", "bestRating": "5"},
              "offers": {"@type": "Offer", "price": "3800", "priceCurrency": "RUB", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "itemCondition": "https://schema.org/NewCondition", "url": "https://стальпро.com/pump-equipment/index.html", "seller": {"@type": "Organization", "name": "СтальПроКлапан"}}
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
            "name": "Для каких насосов подходит рама Corken FD 150?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Рама предназначена для насосов Corken серии FD и совместимого оборудования для перекачки СУГ на АГЗС и ГНС."
            }
          },
          {
            "@type": "Question",
            "name": "Можно ли использовать раму со старым насосом при ремонте?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Да, рама подходит для замены изношенной или повреждённой штатной рамы при капитальном ремонте насосного агрегата — посадочные размеры соответствуют оригиналу."
            }
          },
          {
            "@type": "Question",
            "name": "Нужна ли дополнительная подготовка основания перед монтажом?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Да, рекомендуется ровное жёсткое основание без вибрации — это увеличивает срок службы насоса и предотвращает перекос вала."
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
            "name": "Есть ли в наличии другое насосное оборудование для СУГ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ассортимент расширяется. Актуальное наличие и сроки поставки уточняйте по телефону +7 960 937-35-42."
            }
          }
        ]
      })}</script>
    </Helmet>
    <div className="min-h-screen bg-gray-50">
      <PumpEquipmentHeader />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <span
            className="hover:text-primary cursor-pointer"
            onClick={() => window.location.href = '/'}
          >Главная</span>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Насосное оборудование</span>
        </nav>

        {/* Title */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Насосное оборудование
          </h1>
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-yellow-400 text-xl">★★★★★</span>
            <span className="text-sm text-gray-600">4.7 — <a href="/reviews" className="underline hover:text-primary">8 отзывов</a></span>
          </div>
          <p className="text-lg text-gray-600">
            Насосы для перекачки сжиженных углеводородных газов
          </p>
        </div>

        {/* Product Gallery */}
        <div className="flex flex-wrap justify-center gap-6 items-stretch">
          {/* Рама насоса Corken FD 150 */}
          <Card className="w-full max-w-md flex flex-col">
            <CardContent className="p-6 flex flex-col flex-1">
              <div className="w-56 h-56 mx-auto mb-4 rounded-lg border overflow-hidden bg-white flex items-center justify-center">
                <img
                  src="https://cdn.poehali.dev/files/1e711c1f-0c57-4748-b5e9-177dc632096d.png"
                  alt="Рама насоса Corken FD 150"
                  className="w-full h-full object-contain p-2"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
              <div className="text-center flex flex-col flex-1">
                <h3 className="text-base font-semibold text-gray-900 mb-1">
                  <a href="/pump-equipment/corken-fd150-frame" className="hover:text-primary transition-colors">
                    Рама насоса Corken FD 150
                  </a>
                </h3>
                <div className="flex items-center justify-center gap-1 mb-2">
                  <span className="text-yellow-400 text-sm">★★★★★</span>
                  <span className="text-xs text-gray-500">4.7 (8 отзывов)</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Единая усиленная стальная рама для крепления насоса и двигателя. Обеспечивает жесткость конструкции, предотвращает перекосы при монтаже на основание. Является основой всего агрегата.
                </p>
                <div className="text-2xl font-bold text-primary mb-4">
                  3 800 ₽ <span className="text-sm text-gray-500">с НДС</span>
                </div>
                <div className="mt-auto">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <input
                      type="number"
                      value={quantity2}
                      onChange={(e) => setQuantity2(Math.max(1, parseInt(e.target.value) || 1))}
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
                      id: 'pump-frame-corken-fd150',
                      name: 'Рама насоса Corken FD 150',
                      price: 3800,
                      image: 'https://cdn.poehali.dev/files/1e711c1f-0c57-4748-b5e9-177dc632096d.png',
                      description: 'Единая усиленная стальная рама для крепления насоса и двигателя',
                      quantity: quantity2
                    })}
                  >
                    <Icon name="ShoppingCart" className="mr-1 h-3 w-3" />
                    Заказать
                  </Button>
                  <Button size="lg" variant="ghost" className="w-full mt-2" asChild>
                    <a href="/pump-equipment/corken-fd150-frame">
                      <Icon name="ArrowRight" className="mr-2 h-4 w-4" />
                      Подробнее о товаре
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <PumpEquipmentDetails />
        <PumpEquipmentFAQ />
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