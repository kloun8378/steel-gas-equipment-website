import Icon from '@/components/ui/icon';

export default function SpeedValveHeader() {
  return (
    <header className="bg-primary text-white py-3 sm:py-4 px-4 md:px-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Icon name="Factory" className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
          <div>
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold">СтальПроКлапан</h1>
            <p className="text-xs sm:text-sm opacity-90">Клапанные технологии</p>
          </div>
        </div>
        <nav className="hidden md:flex space-x-4 lg:space-x-6 text-sm">
          <a href="/" className="hover:text-gray-200 transition-colors">Главная</a>
          <a href="/#products" className="hover:text-gray-200 transition-colors">Продукция</a>
          <a href="/#contacts" className="hover:text-gray-200 transition-colors">Контакты</a>
        </nav>
      </div>
    </header>
  );
}