import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center max-w-lg">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
            <Icon name="FileQuestion" size={40} className="text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-3 text-gray-900">Страница не найдена</h1>
          <p className="text-gray-600 mb-2">
            Такой страницы не существует — возможно, она была удалена, перемещена или в адресе допущена опечатка.
          </p>
          <p className="text-sm text-gray-400 mb-8 break-all">{location.pathname}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <a
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              <Icon name="Home" size={18} />
              На главную
            </a>
            <a
              href="/blog"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-6 py-3 text-gray-700 font-medium hover:bg-gray-100 transition-colors"
            >
              Перейти в блог
            </a>
          </div>
          <div className="text-sm text-gray-500">
            <p className="mb-2 font-medium">Возможно, вы искали:</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center">
              <a href="/speed-valve" className="text-primary hover:underline">Скоростные клапаны</a>
              <a href="/safety-valve" className="text-primary hover:underline">Предохранительные клапаны</a>
              <a href="/components" className="text-primary hover:underline">Комплектующие</a>
              <a href="/flanges" className="text-primary hover:underline">Фланцы</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
