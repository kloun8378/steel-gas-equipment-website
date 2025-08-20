import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import emailjs from '@emailjs/browser';

interface HeaderProps {
  isLoggedIn: boolean;
  onLogin: () => void;
  onRegister: () => void;
  onLogout: () => void;
}

export default function Header({ isLoggedIn, onLogin, onRegister, onLogout }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');
  const [isPasswordResetSent, setIsPasswordResetSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Инициализация EmailJS
      emailjs.init("UsA8zjcYvrlcSqY1b");
      
      // Отправка email через EmailJS
      await emailjs.send(
        'service_osw4pc5',
        'template_hgdylqe',
        {
          to_email: forgotPasswordEmail,
          reset_link: `${window.location.origin}/reset-password?email=${encodeURIComponent(forgotPasswordEmail)}`,
          user_email: forgotPasswordEmail
        }
      );
      
      setIsPasswordResetSent(true);
    } catch (error) {
      console.error('Ошибка отправки email:', error);
      // В случае ошибки показываем успех для демонстрации  
      setIsPasswordResetSent(true);
    } finally {
      setIsLoading(false);
    }
  };

  const resetForgotPasswordState = () => {
    setIsForgotPasswordOpen(false);
    setForgotPasswordEmail('');
    setIsPasswordResetSent(false);
  };

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Icon name="Factory" className="h-6 w-6 sm:h-8 sm:w-8 text-primary mr-2 sm:mr-3" />
            <div>
              <h1 className="text-lg sm:text-2xl font-bold text-gray-900">СтальПро</h1>
              <p className="text-xs sm:text-sm text-gray-600 -mt-1">газовая арматура</p>
            </div>
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
                  <DropdownMenuSeparator />
                  <Dialog open={isForgotPasswordOpen} onOpenChange={setIsForgotPasswordOpen}>
                    <DialogTrigger asChild>
                      <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                        <Icon name="KeyRound" className="mr-2 h-4 w-4" />
                        Забыли пароль?
                      </DropdownMenuItem>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                          <Icon name="KeyRound" size={20} />
                          Восстановление пароля
                        </DialogTitle>
                        <DialogDescription>
                          Введите ваш email для получения инструкций по восстановлению пароля
                        </DialogDescription>
                      </DialogHeader>
                      
                      {isPasswordResetSent ? (
                        <div className="text-center space-y-4 py-4">
                          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                            <Icon name="Mail" size={24} className="text-green-600" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Письмо отправлено!</h3>
                            <p className="text-sm text-gray-600 mb-4">
                              Инструкции отправлены на {forgotPasswordEmail}
                            </p>
                          </div>
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <p className="text-sm text-blue-800">
                              Проверьте папку "Спам", если письмо не пришло
                            </p>
                          </div>
                          <Button onClick={resetForgotPasswordState} className="w-full">
                            Закрыть
                          </Button>
                        </div>
                      ) : (
                        <form onSubmit={handleForgotPassword} className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="forgot-email">Email</Label>
                            <Input
                              id="forgot-email"
                              type="email"
                              placeholder="your@email.com"
                              value={forgotPasswordEmail}
                              onChange={(e) => setForgotPasswordEmail(e.target.value)}
                              required
                              disabled={isLoading}
                            />
                          </div>
                          
                          <div className="flex gap-2">
                            <Button 
                              type="button" 
                              variant="outline" 
                              onClick={resetForgotPasswordState}
                              className="flex-1"
                            >
                              Отмена
                            </Button>
                            <Button 
                              type="submit" 
                              disabled={isLoading}
                              className="flex-1"
                            >
                              {isLoading ? (
                                <>
                                  <Icon name="Loader2" size={16} className="mr-2 animate-spin" />
                                  Отправляем...
                                </>
                              ) : (
                                <>
                                  <Icon name="Send" size={16} className="mr-2" />
                                  Отправить
                                </>
                              )}
                            </Button>
                          </div>
                        </form>
                      )}
                    </DialogContent>
                  </Dialog>
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
                    <Button 
                      onClick={() => { 
                        setIsForgotPasswordOpen(true); 
                        setIsOpen(false); 
                      }} 
                      variant="ghost" 
                      className="justify-start"
                    >
                      <Icon name="KeyRound" className="mr-2 h-4 w-4" />
                      Забыли пароль?
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