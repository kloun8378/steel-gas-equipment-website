import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

export default function ComponentsHeader() {
  const navigate = useNavigate();

  const goTo = (hash: string) => {
    navigate('/');
    setTimeout(() => {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

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
          <button onClick={() => goTo('products')} className="hover:text-gray-200 transition-colors font-medium">Продукция</button>
          <button onClick={() => goTo('contacts')} className="hover:text-gray-200 transition-colors">Контакты</button>
        </nav>
      </div>
    </header>
  );
}