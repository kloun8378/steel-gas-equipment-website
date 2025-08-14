import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Products() {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Наша продукция</h3>
          <p className="text-xl text-gray-600">Полный спектр промышленного газового оборудования</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => window.location.href = '/speed-valve'}>
            <CardHeader>
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Zap" className="h-6 w-6 text-primary" />
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
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Icon name="ShieldCheck" className="h-6 w-6 text-primary" />
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