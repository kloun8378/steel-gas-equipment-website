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
                  src="https://cdn.poehali.dev/files/3a99b275-5054-43ca-bc16-1c3e461b9e21.jpeg" 
                  alt="Оригинальное изображение клапана"
                  className="w-full h-full object-cover"
                />
              </div>
            </CardContent>
          </Card>

          {/* Созданная иконка */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Улучшенная иконка</h2>
              <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                <img 
                  src="/img/fabce04a-ae80-444f-99a8-d04e0c99c38b.jpg" 
                  alt="Улучшенная иконка клапана"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            </CardContent>
          </Card>
        </div>

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