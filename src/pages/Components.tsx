import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import Icon from '@/components/ui/icon';
import ComponentsHead from '@/components/components-page/ComponentsHead';
import ComponentsHeader from '@/components/components-page/ComponentsHeader';
import ComponentsProductCard from '@/components/components-page/ComponentsProductCard';
import ComponentsCart from '@/components/components-page/ComponentsCart';

const allRelated = [
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

export default function Components() {
  const [quantitySpring, setQuantitySpring] = useState(1);
  const [quantityValve, setQuantityValve] = useState(1);
  const [quantityFlange, setQuantityFlange] = useState(1);
  const [quantityFlange4, setQuantityFlange4] = useState(1);
  const { addToCart } = useCart();
  const { user } = useAuth();

  const handleAddToCart = (product: Record<string, unknown>) => {
    if (!user) {
      window.location.href = '/login';
      return;
    }
    addToCart(product);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ComponentsHead />
      <ComponentsHeader />

      <main className="container mx-auto px-4 md:px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 text-sm text-gray-600">
            <a href="/" className="hover:text-primary">Главная</a>
            <span className="mx-2">/</span>
            <span>Комплектующие</span>
          </div>

          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Комплектующие
            </h1>
            <p className="text-lg text-gray-600">
              Широкий ассортимент комплектующих для промышленной арматуры
            </p>
          </div>

          <div className="mb-12">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <ComponentsProductCard
                id="spring-ppcz12"
                name="Пружина ППЦЗ-12"
                description="Пружина предохранительного клапана для замены в старом клапане"
                price="2 745 ₽"
                priceRaw={2745}
                image="https://cdn.poehali.dev/files/2656445e-5f43-4c26-ab5b-b420ef13dc40.jpg"
                imageAlt="Пружина ППЦЗ-12"
                quantity={quantitySpring}
                onQuantityChange={setQuantitySpring}
                onAddToCart={handleAddToCart}
                popoverWidth="w-80"
                popoverRows={[
                  { text: 'Пружина предохранительного клапана применяется в клапане ППЦЗ-12.' },
                  { text: 'Служит для замены пружины в старом клапане, которая потеряла свои свойства.' },
                  { isPrice: true, price: '2 745 ₽' },
                ]}
                relatedProducts={allRelated.filter(p => p.id !== 'spring-ppcz12')}
              />

              <ComponentsProductCard
                id="valve-ppcz12"
                name="Золотник ППЦЗ-12"
                description="Золотник для пружинного клапана прямого действия ППЦЗ-12"
                price="1 129 ₽"
                priceRaw={1129}
                image="https://cdn.poehali.dev/files/9c839c8e-b655-47fd-b7b7-88de84d3c7ff.jpg"
                imageAlt="Золотник ППЦЗ-12"
                quantity={quantityValve}
                onQuantityChange={setQuantityValve}
                onAddToCart={handleAddToCart}
                popoverRows={[
                  { text: 'Золотник для пружинного клапана прямого действия ППЦЗ-12, который предназначен для установки на перевозчиках и стационарных емкостях работающих с сжиженными углеводородными газами (СУГ).' },
                  { isPrice: true, price: '1 129 ₽' },
                ]}
                relatedProducts={allRelated.filter(p => p.id !== 'valve-ppcz12')}
              />

              <ComponentsProductCard
                id="flange4-ppcz12"
                name="Фланец на 4 отверстия к ППЦЗ-12"
                description="Фланец предохранительной арматуры для автоцистерн и резервуаров СУГ"
                price="4 372 ₽"
                priceRaw={4372}
                image="https://cdn.poehali.dev/files/c16e6d83-1159-4dba-b0ec-18812a8b2f59.JPEG"
                imageAlt="Фланец на 4 отверстия к клапану ППЦЗ-12"
                quantity={quantityFlange4}
                onQuantityChange={setQuantityFlange4}
                onAddToCart={handleAddToCart}
                popoverRows={[
                  ...flangeSpecs,
                  { isPrice: true, price: '4 372 ₽' },
                ]}
                relatedProducts={allRelated.filter(p => p.id !== 'flange4-ppcz12')}
              />

              <ComponentsProductCard
                id="flange-ppcz12"
                name="Фланец на 8 отверстий к ППЦЗ-12"
                description="Фланец предохранительной арматуры для автоцистерн и резервуаров СУГ"
                price="4 372 ₽"
                priceRaw={4372}
                image="https://cdn.poehali.dev/files/c93d4236-8b9f-4ec4-8e77-8f18dd2ff13f.JPEG"
                imageAlt="Фланец на 8 отверстий к клапану ППЦЗ-12"
                quantity={quantityFlange}
                onQuantityChange={setQuantityFlange}
                onAddToCart={handleAddToCart}
                popoverRows={[
                  ...flangeSpecs,
                  { isPrice: true, price: '4 372 ₽' },
                ]}
                relatedProducts={allRelated.filter(p => p.id !== 'flange-ppcz12')}
              />
            </div>
          </div>
        </div>

        <ComponentsCart />
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