import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import Icon from "@/components/ui/icon";

interface AuthModalsProps {
  isRegisterOpen: boolean;
  isLoginOpen: boolean;
  setIsRegisterOpen: (open: boolean) => void;
  setIsLoginOpen: (open: boolean) => void;
  rememberMe: boolean;
  setRememberMe: (remember: boolean) => void;
  formData: {
    email: string;
    password: string;
    confirmPassword: string;
  };
  loginData: {
    email: string;
    password: string;
  };
  errors: {
    email: boolean;
    password: boolean;
    confirmPassword: boolean;
  };
  loginErrors: {
    email: boolean;
    password: boolean;
  };
  handleInputChange: (field: string, value: string) => void;
  handleLoginInputChange: (field: string, value: string) => void;
  handleRegister: () => void;
  handleLoginSubmit: () => void;
}

export default function AuthModals({
  isRegisterOpen,
  isLoginOpen,
  setIsRegisterOpen,
  setIsLoginOpen,
  rememberMe,
  setRememberMe,
  formData,
  loginData,
  errors,
  loginErrors,
  handleInputChange,
  handleLoginInputChange,
  handleRegister,
  handleLoginSubmit,
}: AuthModalsProps) {
  return (
    <>
      {/* Registration Dialog */}
      <Dialog open={isRegisterOpen} onOpenChange={setIsRegisterOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Создать учетную запись</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
              <Input
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={errors.email ? "border-red-500 focus:border-red-500" : ""}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">Пожалуйста, введите email</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Пароль</label>
              <Input
                type="password"
                placeholder="Введите пароль"
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                className={errors.password ? "border-red-500 focus:border-red-500" : ""}
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">Пожалуйста, введите пароль</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Подтверждение пароля</label>
              <Input
                type="password"
                placeholder="Повторите пароль"
                value={formData.confirmPassword}
                onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                className={errors.confirmPassword ? "border-red-500 focus:border-red-500" : ""}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {!formData.confirmPassword.trim() ? "Пожалуйста, подтвердите пароль" : "Пароли не совпадают"}
                </p>
              )}
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="remember-me" 
                checked={rememberMe}
                onCheckedChange={setRememberMe}
              />
              <label htmlFor="remember-me" className="text-sm text-gray-700 cursor-pointer">
                Запомнить логин и пароль
              </label>
            </div>
            
            <div className="flex gap-3 pt-4">
              <Button onClick={handleRegister} className="flex-1">
                Создать аккаунт
              </Button>
              <Button variant="outline" onClick={() => setIsRegisterOpen(false)} className="flex-1">
                Отмена
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Login Dialog */}
      <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Войти в систему</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
              <Input
                type="email"
                placeholder="your@email.com"
                value={loginData.email}
                onChange={(e) => handleLoginInputChange('email', e.target.value)}
                className={loginErrors.email ? "border-red-500 focus:border-red-500" : ""}
              />
              {loginErrors.email && (
                <p className="text-red-500 text-xs mt-1">Пожалуйста, введите email</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Пароль</label>
              <Input
                type="password"
                placeholder="Введите пароль"
                value={loginData.password}
                onChange={(e) => handleLoginInputChange('password', e.target.value)}
                className={loginErrors.password ? "border-red-500 focus:border-red-500" : ""}
              />
              {loginErrors.password && (
                <p className="text-red-500 text-xs mt-1">Пожалуйста, введите пароль</p>
              )}
            </div>
            
            <div className="flex gap-3 pt-4">
              <Button onClick={handleLoginSubmit} className="flex-1">
                Войти
              </Button>
              <Button variant="outline" onClick={() => setIsLoginOpen(false)} className="flex-1">
                Отмена
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}