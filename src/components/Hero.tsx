import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-4 sm:mb-6">
                Надёжное решение
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-primary-50">
                Производство и поставка промышленного газового оборудования с 2020 года
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-gray-100"
                  onClick={() => {
                    document.getElementById('products')?.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }}
                >
                  <Icon name="Package" className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Наша продукция
                </Button>
                <a href="tel:+79609373542" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full bg-white text-primary hover:bg-white hover:text-primary border-0">
                    <Icon name="Phone" className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="sm:hidden">+7 960 937-35-42</span>
                    <span className="hidden sm:inline">Консультация</span>
                  </Button>
                </a>
              </div>
            </div>
            <div className="text-center mt-8 lg:mt-0">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8">
                <Icon name="Factory" className="h-16 w-16 sm:h-24 sm:w-24 text-white mx-auto mb-4 sm:mb-6" />
                <div className="grid grid-cols-3 gap-4 sm:gap-6 text-center">
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold">150+</div>
                    <div className="text-xs sm:text-sm text-primary-100">Проектов</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold">4</div>
                    <div className="text-xs sm:text-sm text-primary-100">Года опыта</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold">24/7</div>
                    <div className="text-xs sm:text-sm text-primary-100">Поддержка</div>
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