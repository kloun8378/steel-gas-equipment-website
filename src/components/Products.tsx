import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Products() {
  return (
    <section id="products" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Наша продукция</h3>
          <p className="text-lg sm:text-xl text-gray-600">Полный спектр промышленного газового оборудования</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => window.location.href = '/speed-valve'}>
            <CardHeader>
              <div className="bg-primary/10 w-28 h-28 rounded-lg flex items-center justify-center mb-8">
                <img src="https://cdn.poehali.dev/files/325bf062-4575-4a61-bc99-a9e74f8e8c88.jpeg" alt="Скоростной клапан" className="h-24 w-24 object-contain rounded" />
              </div>
              <CardTitle>Скоростной клапан</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Быстрозакрывающиеся клапаны для аварийного отключения газопроводов</p>
              <Badge>Безопасность</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => window.location.href = '/safety-valve'}>
            <CardHeader>
              <div className="bg-primary/10 w-28 h-28 rounded-lg flex items-center justify-center mb-8">
                <img src="https://cdn.poehali.dev/files/0b178660-e5bf-42f9-b1da-46595bb6466c.jpeg" alt="Предохранительный клапан" className="h-24 w-24 object-contain rounded" />
              </div>
              <CardTitle>Предохранительный клапан</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Автоматические клапаны для защиты от превышения давления в системах</p>
              <Badge variant="secondary">Надёжность</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => window.location.href = '/components'}>
            <CardHeader>
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Package" className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Комплектующие</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Широкий ассортимент деталей и компонентов для газового оборудования</p>
              <Badge variant="outline">В наличии</Badge>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
}