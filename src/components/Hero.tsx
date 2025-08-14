import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Надёжные клапанные решения
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-primary-50">
                Производство и поставка промышленного газового оборудования с 2020 года
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                  <Icon name="Package" className="mr-2 h-5 w-5" />
                  Наша продукция
                </Button>
                <div className="md:hidden">
                  <a href="tel:+79609373542">
                    <Button size="lg" className="bg-white text-primary hover:bg-white hover:text-primary border-0">
                      <Icon name="Phone" className="mr-2 h-5 w-5" />
                      Консультация
                    </Button>
                  </a>
                </div>
                <div className="hidden md:block">
                  <Button size="lg" className="bg-white text-primary hover:bg-white hover:text-primary border-0 group">
                    <Icon name="Phone" className="mr-2 h-5 w-5" />
                    <span className="group-hover:hidden">Консультация</span>
                    <span className="hidden group-hover:inline">+7 960 937-35-42</span>
                  </Button>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <Icon name="Factory" className="h-24 w-24 text-white mx-auto mb-6" />
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold">150+</div>
                    <div className="text-sm text-primary-100">Проектов</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">4</div>
                    <div className="text-sm text-primary-100">Года опыта</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">24/7</div>
                    <div className="text-sm text-primary-100">Поддержка</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}