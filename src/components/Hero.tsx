import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Hero() {
  const [showPhone, setShowPhone] = useState(false);

  const handleConsultationClick = () => {
    // Проверяем, мобильное ли устройство
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      // На мобильном - звонок
      window.location.href = "tel:+79609373542";
    } else {
      // На ПК - показать номер
      setShowPhone(true);
      setTimeout(() => setShowPhone(false), 3000); // Скрыть через 3 секунды
    }
  };
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto py-8 sm:py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div className="text-center lg:text-left px-4 lg:px-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 lg:mb-6">
                Надёжное решение
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 lg:mb-8 text-primary-50">
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
                <div className="w-full sm:w-auto relative">
                  <Button 
                    size="lg" 
                    className="w-full bg-white text-primary hover:bg-white hover:text-primary border-0"
                    onClick={handleConsultationClick}
                  >
                    <Icon name="Phone" className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="sm:hidden">+7 960 937-35-42</span>
                    <span className="hidden sm:inline">Консультация</span>
                  </Button>
                  {showPhone && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white text-primary px-4 py-2 rounded-lg shadow-lg border-2 border-primary z-10 whitespace-nowrap">
                      <div className="text-lg font-semibold">+7 960 937-35-42</div>
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-white"></div>
                    </div>
                  )}
                </div>
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
                    <div className="text-2xl sm:text-3xl font-bold">5</div>
                    <div className="text-xs sm:text-sm text-primary-100">Лет опыта</div>
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