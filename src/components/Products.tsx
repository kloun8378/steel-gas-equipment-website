import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Products() {
  const addToCart = (product: {
    id: string;
    name: string;
    price: number;
    image: string;
    description: string;
  }) => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItem = cart.find((item: any) => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} добавлен в корзину!`);
  };
  return (
    <section id="products" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Наша продукция</h3>
          <p className="text-lg sm:text-xl text-gray-600">Полный спектр промышленного газового оборудования</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="bg-primary/10 w-56 h-56 rounded-lg flex items-center justify-center mb-12 cursor-pointer" onClick={() => window.location.href = '/speed-valve'}>
                <img src="https://cdn.poehali.dev/files/325bf062-4575-4a61-bc99-a9e74f8e8c88.jpeg" alt="Скоростной клапан" className="h-48 w-48 object-contain rounded" />
              </div>
              <CardTitle className="cursor-pointer" onClick={() => window.location.href = '/speed-valve'}>Скоростной клапан</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Быстрозакрывающиеся клапаны для аварийного отключения газопроводов</p>
              <div className="flex justify-between items-center">
                <Badge>Безопасность</Badge>
                <div className="flex flex-col items-end gap-2">
                  <span className="text-lg font-bold text-primary">от 5 500 ₽</span>
                  <Button 
                    size="sm" 
                    onClick={() => addToCart({
                      id: 'speed-valve',
                      name: 'Скоростной клапан',
                      price: 5500,
                      image: 'https://cdn.poehali.dev/files/325bf062-4575-4a61-bc99-a9e74f8e8c88.jpeg',
                      description: 'Быстрозакрывающиеся клапаны для аварийного отключения газопроводов'
                    })}
                  >
                    <Icon name="ShoppingCart" className="mr-2 h-4 w-4" />
                    В корзину
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="bg-primary/10 w-56 h-56 rounded-lg flex items-center justify-center mb-12 cursor-pointer" onClick={() => window.location.href = '/safety-valve'}>
                <img src="https://cdn.poehali.dev/files/0b178660-e5bf-42f9-b1da-46595bb6466c.jpeg" alt="Предохранительный клапан" className="h-48 w-48 object-contain rounded" />
              </div>
              <CardTitle className="cursor-pointer" onClick={() => window.location.href = '/safety-valve'}>Предохранительный клапан</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Автоматические клапаны для защиты от превышения давления в системах</p>
              <div className="flex justify-between items-center">
                <Badge variant="secondary">Надёжность</Badge>
                <div className="flex flex-col items-end gap-2">
                  <span className="text-lg font-bold text-primary">9 000 ₽</span>
                  <Button 
                    size="sm" 
                    onClick={() => addToCart({
                      id: 'safety-valve',
                      name: 'Предохранительный клапан ППЦЗ-12',
                      price: 9000,
                      image: 'https://cdn.poehali.dev/files/0b178660-e5bf-42f9-b1da-46595bb6466c.jpeg',
                      description: 'Автоматические клапаны для защиты от превышения давления в системах'
                    })}
                  >
                    <Icon name="ShoppingCart" className="mr-2 h-4 w-4" />
                    В корзину
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="bg-primary/10 w-56 h-56 rounded-lg flex items-center justify-center mb-12 cursor-pointer" onClick={() => window.location.href = '/components'}>
                <img src="https://cdn.poehali.dev/files/be943ef4-8cf5-4fa2-a955-780a17fd8cdb.jpg" alt="Комплектующие" className="h-48 w-48 object-contain rounded" />
              </div>
              <CardTitle className="cursor-pointer" onClick={() => window.location.href = '/components'}>Комплектующие</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Широкий ассортимент деталей и компонентов для газового оборудования</p>
              <div className="flex justify-between items-center">
                <Badge variant="outline">В наличии</Badge>
                <div className="flex flex-col items-end gap-2">
                  <span className="text-lg font-bold text-primary">от 1 110 ₽</span>
                  <Button 
                    size="sm" 
                    onClick={() => window.location.href = '/components'}
                    variant="outline"
                  >
                    <Icon name="Package" className="mr-2 h-4 w-4" />
                    Посмотреть
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
}