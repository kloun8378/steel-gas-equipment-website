import { Helmet } from 'react-helmet-async';
import { useCart } from '@/context/CartContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import FlangesHeader from '@/components/flanges/FlangesHeader';

const CANONICAL = 'https://xn--80awjdfch6f.com/flanges/tip-01-ispolnenie-b';

export default function FlangesType01B() {
  const { cart, removeFromCart, updateQuantity, clearCart, getTotalPrice, getTotalItems } = useCart();

  return (
    <>
    <Helmet>
      <title>Фланец стальной плоский приварной тип 01 ГОСТ 33259-2015 исп B — СтальПроКлапан</title>
      <meta name="description" content="Фланец стальной плоский приварной тип 01 ГОСТ 33259-2015 исполнение B общего назначения. СтальПроКлапан, Барнаул." />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="keywords" content="фланец тип 01 исп B, фланец ГОСТ 33259-2015 тип 01, фланец плоский приварной исполнение B, фланец стальной приварной, СтальПроКлапан Барнаул" />
      <meta property="og:title" content="Фланец тип 01 ГОСТ 33259-2015 исп B — СтальПроКлапан" />
      <meta property="og:description" content="Фланец стальной плоский приварной тип 01 ГОСТ 33259-2015 исполнение B. Доставка по всей России." />
      <meta property="og:url" content={CANONICAL} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href={CANONICAL} />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {"@type": "ListItem", "position": 1, "name": "Главная", "item": "https://xn--80awjdfch6f.com/"},
          {"@type": "ListItem", "position": 2, "name": "Фланцы ГОСТ 33259-2015", "item": "https://xn--80awjdfch6f.com/flanges"},
          {"@type": "ListItem", "position": 3, "name": "Тип 01, исполнение B", "item": CANONICAL}
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
          <p className="text-lg text-gray-600">
            Раздел наполняется — товары появятся в ближайшее время
          </p>
        </div>

        {/* Информация о типе */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8 mb-8 max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Icon name="FileText" className="h-5 w-5 text-primary" />
            О фланце типа 01, исполнение B
          </h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            Фланец плоский приварной типа 01 по ГОСТ 33259-2015 предназначен для разъёмного соединения трубопроводов и арматуры. Исполнение B определяет тип уплотнительной поверхности фланца согласно стандарту.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Применяется на промышленных трубопроводах общего назначения. Уточнить наличие конкретных типоразмеров и цены можно у наших менеджеров.
          </p>
        </section>

        {/* Пустое состояние — товары скоро появятся */}
        <Card className="max-w-2xl mx-auto">
          <CardContent className="py-12 text-center">
            <Icon name="Package" className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 font-medium mb-2">Товары скоро появятся</p>
            <p className="text-sm text-gray-400 mb-6">
              Мы наполняем этот раздел товарами. Чтобы уточнить наличие и цену прямо сейчас — свяжитесь с нами.
            </p>
            <Button asChild>
              <a href="tel:+79609373542">
                <Icon name="Phone" className="mr-2 h-4 w-4" />
                +7 960 937-35-42
              </a>
            </Button>
          </CardContent>
        </Card>
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