import Icon from "@/components/ui/icon";

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Сертификаты и соответствие</h3>
          <p className="text-xl text-gray-600">Наша продукция соответствует всем международным стандартам</p>
        </div>
        <div className="flex justify-center">
          <div className="bg-white p-8 rounded-lg shadow-sm text-center max-w-md">
            <div className="mb-6">
              <img src="https://cdn.poehali.dev/files/5024f1bb-16d4-4d4f-adc9-97ab76d15b37.jpeg" alt="Сертификат EAC" className="w-full h-auto rounded-lg shadow-md" />
            </div>
            <h4 className="text-xl font-semibold mb-2">EAC</h4>
            <p className="text-gray-600">Евразийское соответствие</p>
          </div>
        </div>
      </div>
    </section>
  );
}