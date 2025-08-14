import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Icon from "@/components/ui/icon";

interface HeaderProps {
  isLoggedIn: boolean;
  onLogin: () => void;
  onRegister: () => void;
  onLogout: () => void;
}

export default function Header({ isLoggedIn, onLogin, onRegister, onLogout }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <Icon name="Factory" className="h-8 w-8 text-primary mr-3" />
            <h1 className="text-2xl font-bold text-gray-900">СтальПро</h1>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-primary transition-colors">Главная</a>
            <a href="#products" className="text-gray-700 hover:text-primary transition-colors">Продукция</a>
            <a href="#certificates" className="text-gray-700 hover:text-primary transition-colors">Сертификаты</a>
            <a href="#contacts" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="hidden md:inline-flex">
                <Icon name="User" className="mr-2 h-4 w-4" />
                Личный кабинет
                <Icon name="ChevronDown" className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {!isLoggedIn ? (
                <>
                  <DropdownMenuItem onClick={onLogin}>
                    <Icon name="LogIn" className="mr-2 h-4 w-4" />
                    Войти
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={onRegister}>
                    <Icon name="UserPlus" className="mr-2 h-4 w-4" />
                    Регистрация
                  </DropdownMenuItem>
                </>
              ) : (
                <>
                  <DropdownMenuItem onClick={() => window.location.href = '/dashboard'}>
                    <Icon name="User" className="mr-2 h-4 w-4" />
                    Мой профиль
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={onLogout}>
                    <Icon name="LogOut" className="mr-2 h-4 w-4" />
                    Выйти
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
}