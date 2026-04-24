import Icon from '@/components/ui/icon';

export default function ComponentsHeader() {
  return (
    <header className="bg-primary text-white py-4 px-4 md:px-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Icon name="Factory" className="h-8 w-8 text-white" />
          <div>
            <h1 className="text-xl md:text-2xl font-bold">СтальПроКлапан</h1>
            <p className="text-sm opacity-90">Клапанные технологии</p>
          </div>
        </div>
        <nav className="hidden md:flex space-x-6 text-sm">
          <a href="/" className="hover:text-gray-200 transition-colors">Главная</a>
          <a href="/#products" className="text-white font-medium">Продукция</a>
          <a href="/#contacts" className="hover:text-gray-200 transition-colors">Контакты</a>
        </nav>
      </div>
    </header>
  );
}
