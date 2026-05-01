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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <Card className="hover:shadow-lg hover:border-blue-500 hover:ring-2 hover:ring-blue-500 transition-all cursor-pointer" onClick={() => window.location.href = '/speed-valve'}>
            <CardHeader>
              <div className="bg-primary/10 w-56 h-56 rounded-lg flex items-center justify-center mb-12">
                <img src="https://cdn.poehali.dev/files/b2d17fd0-86c8-43bc-9f92-b0ff62fcc066.jpeg" alt="Скоростной клапан" className="h-48 w-48 object-contain rounded" loading="lazy" />
              </div>
              <CardTitle>Скоростной клапан</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Быстрозакрывающиеся клапаны для аварийного отключения газопроводов</p>
              <div className="flex items-center justify-between">
                <Badge>Безопасность</Badge>
                <span className="text-blue-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">Подробнее <Icon name="ArrowRight" size={14} /></span>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg hover:border-blue-500 hover:ring-2 hover:ring-blue-500 transition-all cursor-pointer" onClick={() => window.location.href = '/safety-valve'}>
            <CardHeader>
              <div className="bg-primary/10 w-56 h-56 rounded-lg flex items-center justify-center mb-12">
                <img src="https://cdn.poehali.dev/files/b84b5f14-4911-46cd-bdc6-16727593726b.jpeg" alt="Предохранительный клапан" className="h-48 w-48 object-contain rounded" loading="lazy" />
              </div>
              <CardTitle>Предохранительный клапан</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Автоматические клапаны для защиты от превышения давления в системах</p>
              <div className="flex items-center justify-between">
                <Badge variant="secondary">Надёжность</Badge>
                <span className="text-blue-600 text-sm font-medium flex items-center gap-1">Подробнее <Icon name="ArrowRight" size={14} /></span>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg hover:border-blue-500 hover:ring-2 hover:ring-blue-500 transition-all cursor-pointer" onClick={() => window.location.href = '/components'}>
            <CardHeader>
              <div className="bg-primary/10 w-56 h-56 rounded-lg flex items-center justify-center mb-12">
                <img src="https://cdn.poehali.dev/files/824091c2-2817-4a8f-8c47-9734738ccefa.jpg" alt="Комплектующие" className="h-48 w-48 object-contain rounded" loading="lazy" />
              </div>
              <CardTitle>Комплектующие</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Широкий ассортимент деталей и компонентов для газового оборудования</p>
              <div className="flex items-center justify-between">
                <Badge variant="outline">В наличии</Badge>
                <span className="text-blue-600 text-sm font-medium flex items-center gap-1">Подробнее <Icon name="ArrowRight" size={14} /></span>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg hover:border-blue-500 hover:ring-2 hover:ring-blue-500 transition-all cursor-pointer" onClick={() => window.location.href = '/pump-equipment'}>
            <CardHeader>
              <div className="bg-primary/10 w-56 h-56 rounded-lg flex items-center justify-center mb-12">
                <img src="https://cdn.poehali.dev/files/02ef56fb-0d28-41ed-a52f-7dec4005566b.png" alt="Насосное оборудование" className="h-48 w-48 object-contain rounded" loading="lazy" />
              </div>
              <CardTitle>Насосное оборудование</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Насосы для перекачки сжиженных углеводородных газов</p>
              <div className="flex items-center justify-between">
                <Badge variant="secondary">Производительность</Badge>
                <span className="text-blue-600 text-sm font-medium flex items-center gap-1">Подробнее <Icon name="ArrowRight" size={14} /></span>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
}