import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import Icon from '@/components/ui/icon';
import SafetyValveHead from '@/components/safety-valve/SafetyValveHead';
import SafetyValveProductCard from '@/components/safety-valve/SafetyValveProductCard';
import SafetyValveRelatedDialog from '@/components/safety-valve/SafetyValveRelatedDialog';
import SafetyValveCart from '@/components/safety-valve/SafetyValveCart';

const relatedProducts = [
  {
    id: 'spring-ppcz12',
    name: 'Пружина ППЦЗ-12',
    description: 'Пружина предохранительного клапана для замены в старом клапане',
    price: 2745,
    priceLabel: '2 745 ₽',
    image: 'https://cdn.poehali.dev/files/2656445e-5f43-4c26-ab5b-b420ef13dc40.jpg',
  },
  {
    id: 'valve-ppcz12',
    name: 'Золотник ППЦЗ-12',
    description: 'Золотник для пружинного клапана прямого действия ППЦЗ-12',
    price: 1129,
    priceLabel: '1 129 ₽',
    image: 'https://cdn.poehali.dev/files/9c839c8e-b655-47fd-b7b7-88de84d3c7ff.jpg',
  },
  {
    id: 'flange4-ppcz12',
    name: 'Фланец на 4 отверстия к ППЦЗ-12',
    description: 'Фланец предохранительной арматуры для автоцистерн и резервуаров СУГ',
    price: 4372,
    priceLabel: '4 372 ₽',
    image: 'https://cdn.poehali.dev/files/c16e6d83-1159-4dba-b0ec-18812a8b2f59.JPEG',
  },
  {
    id: 'flange-ppcz12',
    name: 'Фланец на 8 отверстий к ППЦЗ-12',
    description: 'Фланец предохранительной арматуры для автоцистерн и резервуаров СУГ',
    price: 4372,
    priceLabel: '4 372 ₽',
    image: 'https://cdn.poehali.dev/files/c93d4236-8b9f-4ec4-8e77-8f18dd2ff13f.JPEG',
  },
];

const specsContentPpcz12 = (
  <div className="absolute left-0 right-0 z-50 bg-white rounded-lg shadow-xl border mt-1 w-[420px] -translate-x-1/4">
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="bg-gray-50 p-4 border-b">
        <h3 className="text-lg font-bold text-gray-900">Технические характеристики ППЦЗ-12</h3>
      </div>
      <div className="p-4 space-y-2 text-sm">
        <div className="grid grid-cols-2 gap-4">
          <div><span className="font-semibold">Тип клапана:</span> Пружинный прямого действия</div>
          <div><span className="font-semibold">Рабочая среда:</span> СУГ по ГОСТ 20448-90 или ГОСТ 27578-87</div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div><span className="font-semibold">Рабочее давление Рр, МПа:</span> 1,6</div>
          <div><span className="font-semibold">Расчетное давление Ррасч, МПа:</span> 1,84</div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div><span className="font-semibold">Давление настройки Рн, МПа:</span> от 1,6 до 1,84</div>
          <div><span className="font-semibold">Диаметр условного прохода Ду,мм:</span> 25</div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div><span className="font-semibold">Расчетное проходное сечение F, мм²:</span> 412</div>
          <div><span className="font-semibold">Пропускная способность G, кг/час:</span> 4271</div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div><span className="font-semibold">Коэффициент расхода для газообразных сред:</span> 0,58</div>
          <div><span className="font-semibold">Рабочая температура, °С:</span> от -40 до +45</div>
        </div>
        <div className="border-t pt-3 mt-3">
          <div className="font-semibold mb-2">Габаритные размеры:</div>
          <div className="grid grid-cols-3 gap-4 text-xs">
            <div><span className="font-medium">Диаметр, мм:</span> 83(92)</div>
            <div><span className="font-medium">Высота, мм:</span> 231(238)</div>
            <div><span className="font-medium">Масса, кг не более:</span> 3,6</div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div><span className="font-semibold">Средний срок службы, лет, не менее:</span> 15</div>
          <div><span className="font-semibold">Тип соединения с сосудом:</span> Резьбовое М 72х2</div>
        </div>
      </div>
    </div>
  </div>
);

export default function SafetyValve() {
  const [quantity, setQuantity] = useState(1);
  const [quantity2, setQuantity2] = useState(1);
  const [showSpecs, setShowSpecs] = useState(false);
  const [showSpecs2, setShowSpecs2] = useState(false);
  const [relatedOpen, setRelatedOpen] = useState(false);
  const [relatedQuantities, setRelatedQuantities] = useState<Record<string, number>>({});
  const { addToCart, cart, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart();
  const { user } = useAuth();

  const handleAddToCart = (product: Record<string, unknown>) => {
    if (!user) {
      window.location.href = '/login';
      return;
    }
    addToCart(product);
  };

  const specsContentPk32l = (
    <div className="absolute left-0 right-0 z-50 bg-white rounded-lg shadow-xl border mt-1 w-[420px] -translate-x-1/4">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg">
        <div className="bg-gray-50 p-4 border-b flex justify-between items-center">
          <h3 className="text-lg font-bold text-gray-900">Технические характеристики ПК-32-Л</h3>
          <button onClick={() => setShowSpecs2(false)} className="text-gray-400 hover:text-gray-600">
            <Icon name="X" className="h-4 w-4" />
          </button>
        </div>
        <div className="p-4 space-y-2 text-sm">
          <div><span className="font-semibold">Тип:</span> Пружинный предохранительный</div>
          <div><span className="font-semibold">Рабочая среда:</span> СУГ</div>
          <div><span className="font-semibold">Условный диаметр:</span> DN32</div>
          <div><span className="font-semibold">Комплектация:</span> ПК-32-Л + запорный клапан ЗК-32 + уплотнительное кольцо</div>
          <div className="border-t pt-2 mt-2">
            <span className="text-base font-bold text-primary">15 860 ₽</span>
            <span className="text-xs text-gray-500 ml-1">с НДС</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <SafetyValveHead />

      <header className="bg-primary text-white py-4 px-4 md:px-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Factory" className="h-8 w-8 text-white" />
            <div>
              <h1 className="text-xl md:text-2xl font-bold">СтальПроКлапан</h1>
              <p className="text-sm opacity-90">Клапанные технологии</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6 text-sm">
            <a href="/" className="hover:text-gray-200 transition-colors">Главная</a>
            <a href="/#products" className="text-white font-medium">Продукция</a>
            <a href="/#contacts" className="hover:text-gray-200 transition-colors">Контакты</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 md:px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 text-sm text-gray-600">
            <a href="/" className="hover:text-primary">Главная</a>
            <span className="mx-2">/</span>
            <span>Предохранительный клапан</span>
          </div>

          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Предохранительный клапан
            </h1>
            <p className="text-lg text-gray-600">
              Надежная защита оборудования от превышения давления
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 items-stretch">
            <SafetyValveProductCard
              image="https://cdn.poehali.dev/files/848c3a31-030c-4548-a054-1475fca103c8.jpeg"
              imageAlt="Предохранительные клапаны ППЦЗ-12"
              name="Предохранительные клапаны ППЦЗ-12"
              description="Надежная защита оборудования от превышения давления"
              priceLabel="9 659 ₽"
              quantity={quantity}
              onQuantityChange={setQuantity}
              onAddToCart={() => handleAddToCart({
                id: 'safety-valve-ppcz12',
                name: 'Предохранительные клапаны ППЦЗ-12',
                price: 9659,
                image: 'https://cdn.poehali.dev/files/848c3a31-030c-4548-a054-1475fca103c8.jpeg',
                description: 'Надежная защита оборудования от превышения давления',
                quantity,
              })}
              onRelatedOpen={() => setRelatedOpen(true)}
              showSpecs={showSpecs}
              onToggleSpecs={() => setShowSpecs(!showSpecs)}
              specsContent={specsContentPpcz12}
            />

            <SafetyValveProductCard
              image="https://cdn.poehali.dev/files/f187ae93-500e-48da-b85b-e45604043b8c.jpg"
              imageAlt="Клапан предохранительный пружинный ПК-32-Л"
              name="Клапан предохранительный пружинный ПК-32-Л в комплекте с запорным клапаном ЗК-32 и уплотнительным кольцом"
              description="Комплект для надёжной защиты резервуаров СУГ"
              priceLabel="15 860 ₽"
              quantity={quantity2}
              onQuantityChange={setQuantity2}
              onAddToCart={() => handleAddToCart({
                id: 'safety-valve-pk32l',
                name: 'Клапан предохранительный пружинный ПК-32-Л в комплекте с запорным клапаном ЗК-32 и уплотнительным кольцом',
                price: 15860,
                image: 'https://cdn.poehali.dev/files/f187ae93-500e-48da-b85b-e45604043b8c.jpg',
                description: 'Комплект для надёжной защиты резервуаров СУГ',
                quantity: quantity2,
              })}
              onRelatedOpen={() => setRelatedOpen(true)}
              showSpecs={showSpecs2}
              onToggleSpecs={() => setShowSpecs2(!showSpecs2)}
              specsContent={specsContentPk32l}
            />
          </div>
        </div>

        <SafetyValveRelatedDialog
          open={relatedOpen}
          onOpenChange={setRelatedOpen}
          relatedProducts={relatedProducts}
          relatedQuantities={relatedQuantities}
          onQuantityChange={(id, val) => setRelatedQuantities(prev => ({ ...prev, [id]: val }))}
          onAddToCart={handleAddToCart}
        />

        <SafetyValveCart
          cart={cart}
          onUpdateQuantity={updateQuantity}
          onRemoveFromCart={removeFromCart}
          onClearCart={clearCart}
          getTotalPrice={getTotalPrice}
        />
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Icon name="Factory" className="h-8 w-8 text-primary mr-3" />
                <h5 className="text-xl font-bold">СтальПро</h5>
              </div>
              <p className="text-gray-400">Надёжные решения промышленного газового оборудования для вашего бизнеса.</p>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Продукция</h6>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/speed-valve" className="hover:text-white transition-colors">Скоростной клапан</a></li>
                <li><a href="/safety-valve" className="hover:text-white transition-colors">Предохранительный клапан</a></li>
                <li><a href="/components" className="hover:text-white transition-colors">Комплектующие</a></li>
              </ul>
            </div>

            <div>
              <h6 className="font-semibold mb-4">Контакты</h6>
              <ul className="space-y-2 text-gray-400">
                <li>Алтайский край, г. Барнаул, ул. Кавалерийская 14, бокс 171</li>
                <li>+7 960 937-35-42, +7 960 950-59-04</li>
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
  );
}
