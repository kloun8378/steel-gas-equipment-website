import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Products from "@/components/Products";
import Certificates from "@/components/Certificates";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import AuthModals from "@/components/AuthModals";
import { ToastProvider } from "@/hooks/useToast";

const Index = () => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({
    email: false,
    password: false,
    confirmPassword: false
  });
  const [loginErrors, setLoginErrors] = useState({
    email: false,
    password: false
  });

  // Функции для работы с базой пользователей
  const getUsersDatabase = () => {
    const users = localStorage.getItem('usersDatabase');
    return users ? JSON.parse(users) : [];
  };

  const saveUserToDatabase = (email: string, password: string) => {
    const users = getUsersDatabase();
    const newUser = { email, password, registrationDate: new Date().toISOString() };
    users.push(newUser);
    localStorage.setItem('usersDatabase', JSON.stringify(users));
  };

  const findUserInDatabase = (email: string) => {
    const users = getUsersDatabase();
    return users.find((user: any) => user.email === email);
  };

  // Проверяем сохраненные данные при загрузке страницы
  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      const { email } = JSON.parse(currentUser);
      setIsLoggedIn(true);
      console.log('Пользователь автоматически вошел в систему:', email);
    }

    // Обработка якорных ссылок
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#products') {
        setTimeout(() => {
          const element = document.getElementById('products');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    };

    // Проверяем hash при загрузке страницы
    handleHashChange();

    // Слушаем изменения hash
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleRegister = () => {
    const newErrors = {
      email: !formData.email.trim(),
      password: !formData.password.trim(),
      confirmPassword: !formData.confirmPassword.trim() || formData.password !== formData.confirmPassword
    };
    
    setErrors(newErrors);
    
    // Если нет ошибок, проверяем регистрацию
    if (!Object.values(newErrors).some(error => error)) {
      // Проверяем, не зарегистрирован ли уже такой email
      const existingUser = findUserInDatabase(formData.email);
      if (existingUser) {
        alert('Пользователь с таким email уже зарегистрирован. Попробуйте войти в систему.');
        return;
      }

      // Сохраняем пользователя в базу
      saveUserToDatabase(formData.email, formData.password);
      
      // Сохраняем текущего пользователя если установлен флаг "запомнить"
      if (rememberMe) {
        localStorage.setItem('currentUser', JSON.stringify({
          email: formData.email,
          loginDate: new Date().toISOString()
        }));
      }
      
      console.log('Регистрация успешна:', formData.email);
      setIsLoggedIn(true);
      setIsRegisterOpen(false);
      setFormData({ email: '', password: '', confirmPassword: '' });
      setRememberMe(false);
    }
  };

  const handleLogin = () => {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      const { email } = JSON.parse(currentUser);
      setIsLoggedIn(true);
      console.log('Автоматический вход:', email);
      // Перенаправляем в личный кабинет
      window.location.href = '/dashboard';
    } else {
      // Открываем форму входа
      setIsLoginOpen(true);
    }
  };

  const handleLoginSubmit = () => {
    const newErrors = {
      email: !loginData.email.trim(),
      password: !loginData.password.trim()
    };
    
    setLoginErrors(newErrors);
    
    if (!Object.values(newErrors).some(error => error)) {
      // Ищем пользователя в базе
      const user = findUserInDatabase(loginData.email);
      
      if (!user) {
        // Пользователь не найден, предлагаем регистрацию
        if (confirm('Email не зарегистрирован. Хотите зарегистрироваться?')) {
          setIsLoginOpen(false);
          setFormData({
            email: loginData.email,
            password: '',
            confirmPassword: ''
          });
          setIsRegisterOpen(true);
        }
        return;
      }
      
      // Проверяем пароль
      if (user.password !== loginData.password) {
        alert('Неверный пароль');
        return;
      }
      
      // Успешный вход
      localStorage.setItem('currentUser', JSON.stringify({
        email: loginData.email,
        loginDate: new Date().toISOString()
      }));
      
      setIsLoggedIn(true);
      setIsLoginOpen(false);
      setLoginData({ email: '', password: '' });
      console.log('Успешный вход:', loginData.email);
      // Перенаправляем в личный кабинет
      window.location.href = '/dashboard';
    }
  };

  const handleLoginInputChange = (field: string, value: string) => {
    setLoginData(prev => ({ ...prev, [field]: value }));
    if (loginErrors[field as keyof typeof loginErrors]) {
      setLoginErrors(prev => ({ ...prev, [field]: false }));
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setIsLoggedIn(false);
    console.log('Выход из системы');
    // Переходим на главную страницу
    window.location.href = '/';
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Убираем ошибку при начале ввода
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [field]: false }));
    }
  };

  return (
    <ToastProvider>
      <div className="min-h-screen bg-white">
        <Header
          isLoggedIn={isLoggedIn}
          onLogin={handleLogin}
          onRegister={() => setIsRegisterOpen(true)}
          onLogout={handleLogout}
        />
        
        <Hero />
        
        <Features />
        
        <Products />
        
        <Certificates />
        
        <ContactForm />
        
        <Footer />
      
        <AuthModals
          isRegisterOpen={isRegisterOpen}
          isLoginOpen={isLoginOpen}
          setIsRegisterOpen={setIsRegisterOpen}
          setIsLoginOpen={setIsLoginOpen}
          rememberMe={rememberMe}
          setRememberMe={setRememberMe}
          formData={formData}
          loginData={loginData}
          errors={errors}
          loginErrors={loginErrors}
          handleInputChange={handleInputChange}
          handleLoginInputChange={handleLoginInputChange}
          handleRegister={handleRegister}
          handleLoginSubmit={handleLoginSubmit}
        />
      </div>
    </ToastProvider>
  );
};

export default Index;