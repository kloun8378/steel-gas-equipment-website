import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const products = [
  {
    href: '/speed-valve',
    img: 'https://cdn.poehali.dev/files/b2d17fd0-86c8-43bc-9f92-b0ff62fcc066.jpeg',
    alt: 'Скоростной клапан',
    title: 'Скоростной клапан',
    desc: 'Быстрозакрывающиеся клапаны для аварийного отключения газопроводов',
    badge: <Badge>Безопасность</Badge>,
  },
  {
    href: '/safety-valve',
    img: 'https://cdn.poehali.dev/files/b84b5f14-4911-46cd-bdc6-16727593726b.jpeg',
    alt: 'Предохранительный клапан',
    title: 'Предохранительный клапан',
    desc: 'Автоматические клапаны для защиты от превышения давления в системах',
    badge: <Badge variant="secondary">Надёжность</Badge>,
  },
  {
    href: '/components',
    img: 'https://cdn.poehali.dev/files/824091c2-2817-4a8f-8c47-9734738ccefa.jpg',
    alt: 'Комплектующие',
    title: 'Комплектующие',
    desc: 'Широкий ассортимент деталей и компонентов для газового оборудования',
    badge: <Badge variant="outline">В наличии</Badge>,
  },
  {
    href: '/pump-equipment',
    img: 'https://cdn.poehali.dev/files/02ef56fb-0d28-41ed-a52f-7dec4005566b.png',
    alt: 'Насосное оборудование',
    title: 'Насосное оборудование',
    desc: 'Насосы для перекачки сжиженных углеводородных газов',
    badge: <Badge variant="secondary">Производительность</Badge>,
  },
];

export default function Products() {
  return (
    <section id="products" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Наша продукция</h3>
          <p className="text-lg sm:text-xl text-gray-600">Полный спектр промышленного газового оборудования</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {products.map((p) => (
            <Card
              key={p.href}
              className="flex flex-col hover:shadow-lg hover:border-blue-500 hover:ring-2 hover:ring-blue-500 transition-all cursor-pointer"
              onClick={() => window.location.href = p.href}
            >
              <CardHeader>
                <div className="bg-primary/10 w-full aspect-square max-w-[224px] mx-auto rounded-lg flex items-center justify-center mb-4">
                  <img src={p.img} alt={p.alt} className="w-4/5 h-4/5 object-contain rounded" loading="lazy" />
                </div>
                <CardTitle>{p.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <p className="text-gray-600 mb-4 flex-1">{p.desc}</p>
                <div className="flex items-center justify-between mt-auto">
                  {p.badge}
                  <span className="text-blue-600 text-sm font-medium flex items-center gap-1">
                    Подробнее <Icon name="ArrowRight" size={14} />
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}