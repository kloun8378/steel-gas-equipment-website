import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/context/AuthContext';
import Icon from '@/components/ui/icon';

const LoginPage = () => {
  const { login, register, isLoading } = useAuth();
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });
  const [registerForm, setRegisterForm] = useState({
    email: '',
    password: '',
    name: '',
    company: '',
    phone: '',
    address: ''
  });
  const [error, setError] = useState('');
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');
  const [isPasswordResetSent, setIsPasswordResetSent] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!loginForm.email || !loginForm.password) {
      setError('Заполните все поля');
      return;
    }

    const success = await login(loginForm.email, loginForm.password);
    if (!success) {
      setError('Неверный email или пароль');
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!registerForm.email || !registerForm.password || !registerForm.name || !registerForm.company) {
      setError('Заполните обязательные поля');
      return;
    }

    const success = await register({
      email: registerForm.email,
      name: registerForm.name,
      company: registerForm.company,
      phone: registerForm.phone,
      address: registerForm.address
    });

    if (!success) {
      setError('Пользователь с таким email уже существует');
    }
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!forgotPasswordEmail) {
      setError('Введите email');
      return;
    }

    // Имитация отправки email для восстановления пароля
    setTimeout(() => {
      setIsPasswordResetSent(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Icon name="ShoppingCart" size={32} className="text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Электроком</h1>
          </div>
          <p className="text-gray-600">Система закупок для предприятий</p>
        </CardHeader>

        <CardContent>
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="login">Вход</TabsTrigger>
              <TabsTrigger value="register">Регистрация</TabsTrigger>
              <TabsTrigger value="forgot">Восстановление</TabsTrigger>
            </TabsList>

            <TabsContent value="login" className="space-y-4">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="login-email">Email</Label>
                  <Input
                    id="login-email"
                    type="email"
                    placeholder="admin@energiya.ru"
                    value={loginForm.email}
                    onChange={(e) => setLoginForm(prev => ({ ...prev, email: e.target.value }))}
                    disabled={isLoading}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="login-password">Пароль</Label>
                  <Input
                    id="login-password"
                    type="password"
                    placeholder="••••••"
                    value={loginForm.password}
                    onChange={(e) => setLoginForm(prev => ({ ...prev, password: e.target.value }))}
                    disabled={isLoading}
                  />
                </div>

                {error && (
                  <div className="text-red-500 text-sm bg-red-50 p-2 rounded">
                    {error}
                  </div>
                )}

                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isLoading}
                >
                  {isLoading ? 'Вход...' : 'Войти'}
                </Button>



                <div className="text-xs text-gray-500 bg-gray-50 p-3 rounded">
                  <strong>Демо аккаунты:</strong><br/>
                  • admin@energiya.ru (пароль: 123456)<br/>
                  • manager@tekhkom.ru (пароль: 123456)<br/>
                  • buyer@stroytex.ru (пароль: 123456)
                </div>
              </form>
            </TabsContent>

            <TabsContent value="register" className="space-y-4">
              <form onSubmit={handleRegister} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="register-email">Email *</Label>
                  <Input
                    id="register-email"
                    type="email"
                    placeholder="your@company.ru"
                    value={registerForm.email}
                    onChange={(e) => setRegisterForm(prev => ({ ...prev, email: e.target.value }))}
                    disabled={isLoading}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="register-password">Пароль *</Label>
                  <Input
                    id="register-password"
                    type="password"
                    placeholder="••••••"
                    value={registerForm.password}
                    onChange={(e) => setRegisterForm(prev => ({ ...prev, password: e.target.value }))}
                    disabled={isLoading}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="register-name">Имя *</Label>
                  <Input
                    id="register-name"
                    placeholder="Иван Петров"
                    value={registerForm.name}
                    onChange={(e) => setRegisterForm(prev => ({ ...prev, name: e.target.value }))}
                    disabled={isLoading}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="register-company">Компания *</Label>
                  <Input
                    id="register-company"
                    placeholder="ООО 'Ваша компания'"
                    value={registerForm.company}
                    onChange={(e) => setRegisterForm(prev => ({ ...prev, company: e.target.value }))}
                    disabled={isLoading}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="register-phone">Телефон</Label>
                  <Input
                    id="register-phone"
                    placeholder="+7 (xxx) xxx-xx-xx"
                    value={registerForm.phone}
                    onChange={(e) => setRegisterForm(prev => ({ ...prev, phone: e.target.value }))}
                    disabled={isLoading}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="register-address">Адрес</Label>
                  <Input
                    id="register-address"
                    placeholder="г. Москва, ул. Примерная, д. 1"
                    value={registerForm.address}
                    onChange={(e) => setRegisterForm(prev => ({ ...prev, address: e.target.value }))}
                    disabled={isLoading}
                  />
                </div>

                {error && (
                  <div className="text-red-500 text-sm bg-red-50 p-2 rounded">
                    {error}
                  </div>
                )}

                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isLoading}
                >
                  {isLoading ? 'Регистрация...' : 'Зарегистрироваться'}
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="forgot" className="space-y-4">
              {isPasswordResetSent ? (
                <div className="text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Icon name="Mail" size={24} className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Письмо отправлено</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Инструкции по восстановлению пароля отправлены на {forgotPasswordEmail}
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-800">
                      Проверьте папку "Спам", если письмо не пришло в течение нескольких минут.
                    </p>
                  </div>
                  <Button 
                    onClick={() => {
                      setIsPasswordResetSent(false);
                      setForgotPasswordEmail('');
                    }}
                    variant="outline"
                    className="w-full"
                  >
                    Отправить повторно
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleForgotPassword} className="space-y-4">
                  <div className="text-center mb-4">
                    <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                      <Icon name="KeyRound" size={24} className="text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Восстановление пароля</h3>
                    <p className="text-sm text-gray-600">
                      Введите email для получения инструкций
                    </p>
                  </div>
                  
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

                  {error && (
                    <div className="text-red-500 text-sm bg-red-50 p-2 rounded">
                      {error}
                    </div>
                  )}
                  
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Icon name="Loader2" size={16} className="mr-2 animate-spin" />
                        Отправляем...
                      </>
                    ) : (
                      <>
                        <Icon name="Send" size={16} className="mr-2" />
                        Отправить инструкции
                      </>
                    )}
                  </Button>
                </form>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;