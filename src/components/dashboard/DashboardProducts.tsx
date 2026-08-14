import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/useToast";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  route: string;
  description: string;
}

const PRODUCTS: Product[] = [
  {
    id: 'tpa11-025',
    name: 'Скоростной клапан межфланцевый ТПА11-025 ДУ25 PN40',
    price: 5592,
    image: 'https://cdn.poehali.dev/files/44a2bc16-d26e-426a-bfa5-6e85ea98ae8a.png',
    route: '/speed-valve/tpa11-025',
    description: 'Обратный и скоростной клапан для СУГ ДУ25 PN40',
  },
  {
    id: 'tpa11-032',
    name: 'Скоростной клапан межфланцевый ТПА11-032 ДУ32 PN40',
    price: 6202,
    image: 'https://cdn.poehali.dev/files/a5f6db14-b102-4128-acba-cdd414c672d5.jpg',
    route: '/speed-valve/tpa11-032',
    description: 'Обратный и скоростной клапан для СУГ ДУ32 PN40',
  },
  {
    id: 'tpa11-040',
    name: 'Скоростной клапан межфланцевый ТПА11-040 ДУ40 PN40',
    price: 7015,
    image: 'https://cdn.poehali.dev/files/8a4392c5-af78-4f21-86ef-1d9f5da98262.jpg',
    route: '/speed-valve/tpa11-040',
    description: 'Обратный и скоростной клапан для СУГ ДУ40 PN40',
  },
  {
    id: 'tpa11-050',
    name: 'Скоростной клапан межфланцевый ТПА11-050 ДУ50 PN40',
    price: 10065,
    image: 'https://cdn.poehali.dev/files/5ac93727-7216-4047-aa8d-69d6b828c2a1.jpg',
    route: '/speed-valve/tpa11-050',
    description: 'Обратный и скоростной клапан для СУГ ДУ50 PN40',
  },
  {
    id: 'safety-valve-ppcz12',
    name: 'Предохранительный клапан ППЦЗ-12',
    price: 9659,
    image: 'https://cdn.poehali.dev/files/848c3a31-030c-4548-a054-1475fca103c8.jpeg',
    route: '/safety-valve/ppcz-12',
    description: 'Надёжная защита оборудования от превышения давления',
  },
  {
    id: 'safety-valve-pk32l',
    name: 'Клапан предохранительный пружинный ПК-32-Л',
    price: 15860,
    image: 'https://cdn.poehali.dev/files/f187ae93-500e-48da-b85b-e45604043b8c.jpg',
    route: '/safety-valve/pk-32-l',
    description: 'Комплект для надёжной защиты резервуаров СУГ',
  },
  {
    id: 'spring-ppcz12',
    name: 'Пружина ППЦЗ-12',
    price: 2745,
    image: 'https://cdn.poehali.dev/files/2656445e-5f43-4c26-ab5b-b420ef13dc40.jpg',
    route: '/components/spring-ppcz12',
    description: 'Пружина предохранительного клапана для замены в старом клапане',
  },
  {
    id: 'valve-ppcz12',
    name: 'Золотник ППЦЗ-12',
    price: 1129,
    image: 'https://cdn.poehali.dev/files/9c839c8e-b655-47fd-b7b7-88de84d3c7ff.jpg',
    route: '/components/valve-ppcz12',
    description: 'Золотник для пружинного клапана прямого действия ППЦЗ-12',
  },
  {
    id: 'flange4-ppcz12',
    name: 'Фланец на 4 отверстия к ППЦЗ-12',
    price: 4372,
    image: 'https://cdn.poehali.dev/files/c16e6d83-1159-4dba-b0ec-18812a8b2f59.JPEG',
    route: '/components/flange4-ppcz12',
    description: 'Фланец предохранительной арматуры для автоцистерн и резервуаров СУГ',
  },
  {
    id: 'flange-ppcz12',
    name: 'Фланец на 8 отверстий к ППЦЗ-12',
    price: 4372,
    image: 'https://cdn.poehali.dev/files/c93d4236-8b9f-4ec4-8e77-8f18dd2ff13f.JPEG',
    route: '/components/flange8-ppcz12',
    description: 'Фланец предохранительной арматуры для автоцистерн и резервуаров СУГ',
  },
  {
    id: 'flange-100-1-01-1-b-st20',
    name: 'Фланец 100-1-01-1-B-Ст 20-I-dв 110 ГОСТ 33259-2015',
    price: 1241,
    image: 'https://cdn.poehali.dev/projects/cbca45d3-e5bd-4606-92f4-2a84a020c161/bucket/65209240-7cda-4461-a3e8-489fcdb0c0e1.webp',
    route: '/flanges/tip-01-ispolnenie-b',
    description: 'Плоский приварной фланец ГОСТ 33259-2015, Ду-100, Ру-16, исполнение B',
  },
  {
    id: 'flange-100-1-01-1-b-st20-dv116',
    name: 'Фланец 100-1-01-1-B-Ст 20-I-dв 116 ГОСТ 33259-2015',
    price: 1241,
    image: 'https://cdn.poehali.dev/projects/cbca45d3-e5bd-4606-92f4-2a84a020c161/bucket/7800d7c0-8b08-4988-8523-65dc2a73c5f1.webp',
    route: '/flanges/tip-01-ispolnenie-b-dv116',
    description: 'Плоский приварной фланец ГОСТ 33259-2015, Ду-100, Ру-16, исполнение B, dв 116',
  },
  {
    id: 'pump-frame-corken-fd150',
    name: 'Рама насоса Corken FD 150',
    price: 3800,
    image: 'https://cdn.poehali.dev/files/1e711c1f-0c57-4748-b5e9-177dc632096d.png',
    route: '/pump-equipment/corken-fd150-frame',
    description: 'Единая усиленная стальная рама для крепления насоса и двигателя',
  },
];

export default function DashboardProducts() {
  const { addToCart } = useCart();
  const { showSuccess } = useToast();

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      description: product.description,
    });
    showSuccess(`«${product.name}» добавлен в корзину`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {PRODUCTS.map((product) => (
        <Card key={product.id} className="flex flex-col">
          <CardContent className="p-4 flex flex-col flex-1">
            <a href={product.route} className="block aspect-square bg-white rounded-lg mb-3 border overflow-hidden w-32 h-32 mx-auto hover:shadow-lg transition-shadow">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-top rounded-lg"
                loading="lazy"
              />
            </a>
            <div className="text-center flex flex-col flex-1">
              <a href={product.route} className="text-sm font-semibold text-gray-900 mb-1 hover:text-primary transition-colors">
                {product.name}
              </a>
              <p className="text-xs text-gray-600 mb-2 flex-1">{product.description}</p>
              <div className="text-lg font-bold text-primary mb-3">
                {product.price.toLocaleString()} ₽ <span className="text-xs text-gray-500">с НДС</span>
              </div>
              <Button size="sm" className="w-full" onClick={() => handleAddToCart(product)}>
                <Icon name="ShoppingCart" className="mr-1 h-3 w-3" />
                Заказать
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}