import { useState, useEffect } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

export default function ResetPasswordPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get('token') || '';

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!token) {
      setError('Некорректная ссылка для восстановления пароля');
    }
  }, [token]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Пароли не совпадают');
      return;
    }
    if (password.length < 6) {
      setError('Пароль должен содержать минимум 6 символов');
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch('https://functions.poehali.dev/4a312aa2-5743-44c4-ad6b-b07f359c919e?action=reset', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, password })
      });
      const data = await res.json();
      if (res.ok) {
        setIsSuccess(true);
        setTimeout(() => navigate('/login'), 3000);
      } else {
        setError(data.error || 'Ошибка. Попробуйте запросить новую ссылку.');
      }
    } catch {
      setError('Произошла ошибка. Попробуйте позже.');
    }
    setIsLoading(false);
  };

  if (!token) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <Icon name="AlertCircle" size={24} className="text-red-600" />
            </div>
            <CardTitle className="text-xl">Ошибка</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-gray-600">Некорректная ссылка для восстановления пароля</p>
            <Link to="/login">
              <Button className="w-full">Вернуться ко входу</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Icon name="CheckCircle" size={24} className="text-green-600" />
            </div>
            <CardTitle className="text-xl">Пароль изменён</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-gray-600">Ваш пароль успешно изменён. Сейчас вы будете перенаправлены на страницу входа.</p>
            <Link to="/login">
              <Button className="w-full">
                <Icon name="LogIn" size={16} className="mr-2" />
                Войти в систему
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <Icon name="KeyRound" size={24} className="text-blue-600" />
          </div>
          <CardTitle className="text-xl">Новый пароль</CardTitle>
          <p className="text-sm text-gray-600 mt-2">Придумайте новый пароль для входа в личный кабинет</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">Новый пароль</Label>
              <Input
                id="password"
                type="password"
                placeholder="Минимум 6 символов"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Повторите пароль</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Повторите новый пароль"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                disabled={isLoading}
              />
            </div>
            {error && (
              <div className="text-red-500 text-sm bg-red-50 p-3 rounded">{error}</div>
            )}
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <><Icon name="Loader2" size={16} className="mr-2 animate-spin" />Сохраняем...</>
              ) : (
                <><Icon name="Save" size={16} className="mr-2" />Сохранить пароль</>
              )}
            </Button>
            <div className="text-center">
              <Link to="/login" className="text-sm text-gray-600 hover:text-primary transition-colors">
                Вернуться ко входу
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
