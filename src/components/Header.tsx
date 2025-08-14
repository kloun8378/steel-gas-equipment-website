import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Icon from "@/components/ui/icon";

interface HeaderProps {
  isLoggedIn: boolean;
  onLogin: () => void;
  onRegister: () => void;
  onLogout: () => void;
}

export default function Header({ isLoggedIn, onLogin, onRegister, onLogout }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Icon name="Factory" className="h-6 w-6 sm:h-8 sm:w-8 text-primary mr-2 sm:mr-3" />
            <h1 className="text-lg sm:text-2xl font-bold text-gray-900">СтальПро</h1>
          </div>
          
          {/* Десктоп меню */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-primary transition-colors">Главная</a>
            <a href="#products" className="text-gray-700 hover:text-primary transition-colors">Продукция</a>
            <a href="#certificates" className="text-gray-700 hover:text-primary transition-colors">Сертификаты</a>
            <a href="#contacts" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
          </div>
          
          {/* Десктоп личный кабинет */}
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
          
          {/* Мобильное меню */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden">
                <Icon name="Menu" className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                <a 
                  href="#home" 
                  className="text-lg text-gray-700 hover:text-primary transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Главная
                </a>
                <a 
                  href="#products" 
                  className="text-lg text-gray-700 hover:text-primary transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Продукция
                </a>
                <a 
                  href="#certificates" 
                  className="text-lg text-gray-700 hover:text-primary transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Сертификаты
                </a>
                <a 
                  href="#contacts" 
                  className="text-lg text-gray-700 hover:text-primary transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Контакты
                </a>
                
                <hr className="my-4" />
                
                {!isLoggedIn ? (
                  <div className="flex flex-col space-y-3">
                    <Button onClick={() => { onLogin(); setIsOpen(false); }} className="justify-start">
                      <Icon name="LogIn" className="mr-2 h-4 w-4" />
                      Войти
                    </Button>
                    <Button onClick={() => { onRegister(); setIsOpen(false); }} variant="outline" className="justify-start">
                      <Icon name="UserPlus" className="mr-2 h-4 w-4" />
                      Регистрация
                    </Button>
                  </div>
                ) : (
                  <div className="flex flex-col space-y-3">
                    <Button onClick={() => { window.location.href = '/dashboard'; setIsOpen(false); }} className="justify-start">
                      <Icon name="User" className="mr-2 h-4 w-4" />
                      Мой профиль
                    </Button>
                    <Button onClick={() => { onLogout(); setIsOpen(false); }} variant="outline" className="justify-start">
                      <Icon name="LogOut" className="mr-2 h-4 w-4" />
                      Выйти
                    </Button>
                  </div>
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}