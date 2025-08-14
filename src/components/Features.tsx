import Icon from "@/components/ui/icon";

export default function Features() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Наши преимущества</h3>
          <p className="text-xl text-gray-600">Что делает нас лидерами в области промышленной арматуры</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="CheckCircle" className="h-8 w-8 text-primary" />
            </div>
            <h4 className="text-xl font-semibold mb-3">Качество</h4>
            <p className="text-gray-600">Высококачественные материалы и современные технологии производства</p>
          </div>
          <div className="text-center p-6">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Users" className="h-8 w-8 text-primary" />
            </div>
            <h4 className="text-xl font-semibold mb-3">Поддержка</h4>
            <p className="text-gray-600">Техническая поддержка и обслуживание на всех этапах эксплуатации</p>
          </div>
          <div className="text-center p-6">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Clock" className="h-8 w-8 text-primary" />
            </div>
            <h4 className="text-xl font-semibold mb-3">Скорость</h4>
            <p className="text-gray-600">Быстрая реакция на заказы и оперативная доставка по всей России</p>
          </div>
        </div>
      </div>
    </section>
  );
}