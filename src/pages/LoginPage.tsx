import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/context/AuthContext';
import Icon from '@/components/ui/icon';
import api from '@/services/api';

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

  const sendPasswordReset = async (email: string) => {
    try {
      const resetLink = `${window.location.origin}/reset-password?email=${encodeURIComponent(email)}&token=reset_token_here`;

      await api.sendEmail({
        type: 'reset',
        template_id: 'template_hgdylqe',
        params: {
          to_email: email,
          user_email: email,
          reset_link: resetLink,
          reset_url: resetLink,
          button_text: 'Восстановить пароль',
          button_link: resetLink,
          html_button: `<div style="text-align: center; margin: 30px 0;"><a href="${resetLink}" style="background-color: #2563eb; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px; display: inline-block;">Восстановить пароль</a></div>`,
          html_link: `<a href="${resetLink}" style="color: #2563eb; font-weight: bold;">${resetLink}</a>`,
          message: `Для восстановления пароля перейдите по ссылке: ${resetLink}\n\nЕсли ссылка не работает, скопируйте её и вставьте в адресную строку браузера.`,
          from_name: 'СтальПро - Система закупок'
        }
      });

      return { success: true };
    } catch (error: unknown) {
      const err = error as Error;
      return { success: false, error: err.message || 'Ошибка отправки письма' };
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
      console.log('🎯 Отправляем восстановление пароля для:', forgotEmail);
      const result = await sendPasswordReset(forgotEmail);
      
      console.log('📋 Результат отправки:', result);
      
      if (result.success) {
        setResetMessage('✅ Письмо с инструкциями отправлено на ваш email');
        setForgotEmail('');
        setTimeout(() => setShowForgotPassword(false), 3000);
      } else {
        console.error('❌ Ошибка отправки EmailJS:', result.error);
        setResetMessage(`❌ Ошибка отправки: ${result.error || 'Неизвестная ошибка'}`);
      }
    } catch {
      setResetMessage('Произошла ошибка при отправке письма');
    }
    
    setResetLoading(false);
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
  );
};

export default LoginPage;