import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/context/AuthContext';
import Icon from '@/components/ui/icon';

const LoginPage = () => {
  const { login, register, isLoading } = useAuth();
  const navigate = useNavigate();
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
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [resetLoading, setResetLoading] = useState(false);
  const [resetMessage, setResetMessage] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!loginForm.email || !loginForm.password) {
      setError('Заполните все поля');
      return;
    }

    const success = await login(loginForm.email, loginForm.password);
    if (success) {
      navigate('/dashboard');
    } else {
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
      password: registerForm.password,
      name: registerForm.name,
      company: registerForm.company,
      phone: registerForm.phone,
      address: registerForm.address
    });

    if (success) {
      navigate('/dashboard');
    } else {
      setError('Пользователь с таким email уже существует');
    }
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setResetLoading(true);
    setResetMessage('');

    if (!forgotEmail) {
      setResetMessage('Введите email адрес');
      setResetLoading(false);
      return;
    }

    try {
      const res = await fetch('https://functions.poehali.dev/4a312aa2-5743-44c4-ad6b-b07f359c919e?action=forgot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: forgotEmail })
      });
      const data = await res.json();
      if (res.ok) {
        setResetMessage('Письмо с ссылкой для восстановления отправлено на ваш email');
        setForgotEmail('');
        setTimeout(() => setShowForgotPassword(false), 4000);
      } else {
        setResetMessage(data.error || 'Ошибка отправки письма');
      }
    } catch {
      setResetMessage('Произошла ошибка. Попробуйте позже.');
    }

    setResetLoading(false);
  };



  return (
    <>
    <Helmet>
      <title>Войти в личный кабинет — СтальПроКлапан</title>
      <meta name="description" content="Вход в личный кабинет покупателя СтальПроКлапан. Управляйте заказами газового оборудования." />
      <meta name="robots" content="noindex, nofollow" />
    </Helmet>
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
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Вход</TabsTrigger>
              <TabsTrigger value="register">Регистрация</TabsTrigger>
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

                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => setShowForgotPassword(true)}
                    className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Забыли пароль?
                  </button>
                </div>

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


          </Tabs>
        </CardContent>
      </Card>

      {/* Модальное окно восстановления пароля */}
      {showForgotPassword && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-md">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Восстановление пароля</CardTitle>
                <button
                  onClick={() => {
                    setShowForgotPassword(false);
                    setResetMessage('');
                    setForgotEmail('');
                  }}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <Icon name="X" size={20} />
                </button>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleForgotPassword} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="forgot-email">Email</Label>
                  <Input
                    id="forgot-email"
                    type="email"
                    placeholder="Введите ваш email"
                    value={forgotEmail}
                    onChange={(e) => setForgotEmail(e.target.value)}
                    disabled={resetLoading}
                    required
                  />
                </div>

                {resetMessage && (
                  <div className={`text-sm p-3 rounded ${
                    resetMessage.includes('отправлено') 
                      ? 'text-green-700 bg-green-50' 
                      : 'text-red-700 bg-red-50'
                  }`}>
                    {resetMessage}
                  </div>
                )}

                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={resetLoading}
                >
                  {resetLoading ? (
                    <>
                      <Icon name="Loader2" size={16} className="mr-2 animate-spin" />
                      Отправка...
                    </>
                  ) : (
                    <>
                      <Icon name="Mail" size={16} className="mr-2" />
                      Отправить инструкции
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
    </>
  );
};

export default LoginPage;