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
              <div className="bg-primary/10 w-56 h-56 rounded-lg flex items-center justify-center mb-12">
                <img src="/img/15059b14-1f83-41ce-afc2-b6670ee1ffd5.jpg" alt="Скоростной клапан СтальПро" className="h-48 w-48 object-cover rounded" />
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
              <div className="bg-primary/10 w-56 h-56 rounded-lg flex items-center justify-center mb-12">
                <img src="/img/21dda82c-a459-4015-9754-c6a811055f11.jpg" alt="Предохранительный клапан СтальПро" className="h-48 w-48 object-cover rounded" />
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
              <div className="bg-primary/10 w-56 h-56 rounded-lg flex items-center justify-center mb-12">
                <img src="/img/4c576db8-0c33-4d6c-8e43-a8cae1c1c9c1.jpg" alt="Комплектующие СтальПро" className="h-48 w-48 object-cover rounded" />
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