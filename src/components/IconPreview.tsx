import { Card, CardContent } from "@/components/ui/card";

export default function IconPreview() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Созданная иконка</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Оригинальное изображение */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Исходное изображение</h2>
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img 
                  src="/img/icon-preview.jpg" 
                  alt="Оригинальное изображение клапана"
                  className="w-full h-full object-cover"
                />
              </div>
            </CardContent>
          </Card>

          {/* Созданная иконка */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Точная иконка по описанию</h2>
              <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                <img 
                  src="https://cdn.poehali.dev/files/45a7939a-7492-4be4-b61c-bd5e955991a8.jpg" 
                  alt="Логотип СтальПро с трубопроводом"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Новая заготовка */}
        <Card className="mt-8">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Металлические заготовки</h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <img 
                  src="/img/3e06d7e0-1a53-4a3c-899b-6572eaecf186.jpg" 
                  alt="Металлическая заготовка 60мм"
                  className="w-full h-40 object-contain rounded-lg mb-2"
                />
                <p className="text-sm font-medium">Диаметр 60мм</p>
              </div>
              <div className="text-center">
                <img 
                  src="/img/1fc51e84-57df-4031-8dd0-5568939699e0.jpg" 
                  alt="Заготовка 80мм с глубокими рисками"
                  className="w-full h-40 object-contain rounded-lg mb-2"
                />
                <p className="text-sm font-medium">Диаметр 80мм с рисками</p>
                <p className="text-xs text-gray-500">9 рисок глубиной 1мм, шаг 2мм</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Варианты использования */}
        <Card className="mt-8">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Примеры использования в разных размерах</h2>
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <img 
                  src="/img/fabce04a-ae80-444f-99a8-d04e0c99c38b.jpg" 
                  alt="16px"
                  className="w-4 h-4 mx-auto mb-2"
                />
                <p className="text-xs">16px</p>
              </div>
              <div className="text-center">
                <img 
                  src="/img/fabce04a-ae80-444f-99a8-d04e0c99c38b.jpg" 
                  alt="24px"
                  className="w-6 h-6 mx-auto mb-2"
                />
                <p className="text-xs">24px</p>
              </div>
              <div className="text-center">
                <img 
                  src="/img/fabce04a-ae80-444f-99a8-d04e0c99c38b.jpg" 
                  alt="32px"
                  className="w-8 h-8 mx-auto mb-2"
                />
                <p className="text-xs">32px</p>
              </div>
              <div className="text-center">
                <img 
                  src="/img/fabce04a-ae80-444f-99a8-d04e0c99c38b.jpg" 
                  alt="48px"
                  className="w-12 h-12 mx-auto mb-2"
                />
                <p className="text-xs">48px</p>
              </div>
              <div className="text-center">
                <img 
                  src="/img/fabce04a-ae80-444f-99a8-d04e0c99c38b.jpg" 
                  alt="64px"
                  className="w-16 h-16 mx-auto mb-2"
                />
                <p className="text-xs">64px</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}