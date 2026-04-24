import { useState, useEffect, Suspense, lazy } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { useAuth } from "@/context/AuthContext";

const Features = lazy(() => import("@/components/Features"));
const Products = lazy(() => import("@/components/Products"));
const Certificates = lazy(() => import("@/components/Certificates"));
const ContactForm = lazy(() => import("@/components/ContactForm"));
const Footer = lazy(() => import("@/components/Footer"));
const AuthModals = lazy(() => import("@/components/AuthModals"));

const Index = () => {
  const { user, login, register, logout } = useAuth();
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
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

  useEffect(() => {
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

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleRegister = async () => {
    const newErrors = {
      email: !formData.email.trim(),
      password: !formData.password.trim(),
      confirmPassword: !formData.confirmPassword.trim() || formData.password !== formData.confirmPassword
    };

    setErrors(newErrors);

    if (!Object.values(newErrors).some(error => error)) {
      const success = await register({
        email: formData.email,
        password: formData.password,
        name: '',
        company: '',
        phone: '',
        address: ''
      });

      if (success) {
        setIsRegisterOpen(false);
        setFormData({ email: '', password: '', confirmPassword: '' });
        setRememberMe(false);
      } else {
        alert('Пользователь с таким email уже зарегистрирован.');
      }
    }
  };

  const handleLogin = () => {
    if (user) {
      window.location.href = '/dashboard';
    } else {
      setIsLoginOpen(true);
    }
  };

  const handleLoginSubmit = async () => {
    const newErrors = {
      email: !loginData.email.trim(),
      password: !loginData.password.trim()
    };

    setLoginErrors(newErrors);

    if (!Object.values(newErrors).some(error => error)) {
      const success = await login(loginData.email, loginData.password);

      if (success) {
        setIsLoginOpen(false);
        setLoginData({ email: '', password: '' });
        window.location.href = '/dashboard';
      } else {
        alert('Неверный email или пароль');
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
    logout();
    window.location.href = '/';
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [field]: false }));
    }
  };

  return (
    <>
    <Helmet>
      <title>СтальПроКлапан — скоростные и предохранительные клапаны СУГ, Барнаул</title>
      <meta name="description" content="СтальПроКлапан — производитель скоростных и предохранительных клапанов для СУГ. Клапаны ППЦЗ-12, ТПА11-025/032/040/050 для АГЗС, ГНС, автоцистерн. Комплектующие и запчасти. Доставка по РФ." />
      <meta name="keywords" content="скоростной клапан купить, предохранительный клапан ППЦЗ-12, клапан СУГ, арматура АГЗС, арматура ГНС, ТПА11-025, ТПА11-032, ТПА11-040, ТПА11-050, клапан межфланцевый купить, ППЦЗ-12 цена, запчасти ППЦЗ-12, СтальПроКлапан, газовая арматура Барнаул, клапаны для газа купить, арматура СУГ Барнаул, VENGO аналог, AZT аналог, REGO аналог" />
      <meta property="og:title" content="СтальПроКлапан — надёжное решение для промышленного оборудования" />
      <meta property="og:description" content="Производство и поставка промышленного оборудования с 2020 года. ППЦЗ-12, ТПА11-025/032/040/050. Комплектующие и запчасти. Доставка по всей России." />
      <meta property="og:url" content="https://xn--80awjdfch6f.com/" />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://xn--80awjdfch6f.com/" />
    </Helmet>
    <div className="min-h-screen bg-white">
        <Header
          isLoggedIn={!!user}
          onLogin={handleLogin}
          onRegister={() => setIsRegisterOpen(true)}
          onLogout={handleLogout}
        />

        <Hero />

        <Suspense fallback={<div className="py-8 flex justify-center"><div className="animate-pulse bg-gray-200 h-48 rounded-lg w-full max-w-4xl"></div></div>}>
          <Features />
        </Suspense>

        <Suspense fallback={<div className="py-8 flex justify-center"><div className="animate-pulse bg-gray-200 h-64 rounded-lg w-full max-w-6xl"></div></div>}>
          <Products />
        </Suspense>

        <Suspense fallback={<div className="py-8 flex justify-center"><div className="animate-pulse bg-gray-200 h-32 rounded-lg w-full max-w-4xl"></div></div>}>
          <Certificates />
        </Suspense>

        <Suspense fallback={<div className="py-8 flex justify-center"><div className="animate-pulse bg-gray-200 h-96 rounded-lg w-full max-w-4xl"></div></div>}>
          <ContactForm />
        </Suspense>

        <Suspense fallback={<div className="py-8 flex justify-center"><div className="animate-pulse bg-gray-200 h-48 rounded-lg w-full"></div></div>}>
          <Footer />
        </Suspense>

        <Suspense fallback={null}>
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
        </Suspense>
    </div>
    </>
  );
};

export default Index;