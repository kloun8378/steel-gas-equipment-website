import Icon from "@/components/ui/icon";

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Сертификаты и соответствие</h3>
          <p className="text-xl text-gray-600">Наша продукция соответствует всем международным стандартам</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="FileText" className="h-8 w-8 text-primary" />
            </div>
            <h4 className="font-semibold mb-2">ISO 9001</h4>
            <p className="text-sm text-gray-600">Система менеджмента качества</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Shield" className="h-8 w-8 text-primary" />
            </div>
            <h4 className="font-semibold mb-2">ГОСТ Р</h4>
            <p className="text-sm text-gray-600">Соответствие российским стандартам</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="CheckCircle" className="h-8 w-8 text-primary" />
            </div>
            <h4 className="font-semibold mb-2">CE</h4>
            <p className="text-sm text-gray-600">Европейское соответствие</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Award" className="h-8 w-8 text-primary" />
            </div>
            <h4 className="font-semibold mb-2">EAC</h4>
            <p className="text-sm text-gray-600">Евразийское соответствие</p>
          </div>
        </div>
      </div>
    </section>
  );
}