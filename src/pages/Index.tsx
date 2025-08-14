import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Products from "@/components/Products";
import Certificates from "@/components/Certificates";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import AuthModals from "@/components/AuthModals";

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

  // Проверяем сохраненные данные при загрузке страницы
  useEffect(() => {
    const savedCredentials = localStorage.getItem('userCredentials');
    if (savedCredentials) {
      const { email, password } = JSON.parse(savedCredentials);
      setIsLoggedIn(true);
      console.log('Пользователь автоматически вошел в систему:', email);
    }
  }, []);

  const handleRegister = () => {
    const newErrors = {
      email: !formData.email.trim(),
      password: !formData.password.trim(),
      confirmPassword: !formData.confirmPassword.trim() || formData.password !== formData.confirmPassword
    };
    
    setErrors(newErrors);
    
    // Если нет ошибок, выполняем регистрацию
    if (!Object.values(newErrors).some(error => error)) {
      // Сохраняем данные в localStorage если установлен флаг "запомнить"
      if (rememberMe) {
        localStorage.setItem('userCredentials', JSON.stringify({
          email: formData.email,
          password: formData.password
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
    const savedCredentials = localStorage.getItem('userCredentials');
    if (savedCredentials) {
      const { email } = JSON.parse(savedCredentials);
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
      // Проверяем креденциалы
      const savedCredentials = localStorage.getItem('userCredentials');
      if (savedCredentials) {
        const { email, password } = JSON.parse(savedCredentials);
        if (loginData.email === email && loginData.password === password) {
          setIsLoggedIn(true);
          setIsLoginOpen(false);
          setLoginData({ email: '', password: '' });
          console.log('Успешный вход:', email);
          // Перенаправляем в личный кабинет
          window.location.href = '/dashboard';
        } else {
          alert('Неверный email или пароль');
        }
      } else {
        alert('Пользователь не найден. Пожалуйста, зарегистрируйтесь.');
      }
    }
  };

  const handleLoginInputChange = (field: string, value: string) => {
    setLoginData(prev => ({ ...prev, [field]: value }));
    if (loginErrors[field as keyof typeof loginErrors]) {
      setLoginErrors(prev => ({ ...prev, [field]: false }));
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('userCredentials');
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
  );
};

export default Index;