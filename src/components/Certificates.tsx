import { useState } from "react";
import Icon from "@/components/ui/icon";

export default function Certificates() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
              <img 
                src="https://cdn.poehali.dev/files/32b3ed69-8eae-4b4c-89cf-ed2e12c0e1c4.jpg" 
                alt="Сертификат EAC" 
                className="w-full h-auto rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow" 
                onClick={() => setIsModalOpen(true)}
              />
            </div>
            <h4 className="text-xl font-semibold mb-2">EAC</h4>
            <p className="text-gray-600">Евразийское соответствие</p>
          </div>
        </div>
      </div>

      {/* Modal для увеличенного изображения */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors z-10"
            >
              <Icon name="X" className="h-6 w-6" />
            </button>
            <img 
              src="/img/certificate.jpg" 
              alt="Сертификат EAC" 
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
}