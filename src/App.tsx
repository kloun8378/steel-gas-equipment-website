
import { useEffect, Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import StructuredData from "./components/StructuredData";
import ErrorBoundary from "./components/ErrorBoundary";
import SEOHead from "./components/SEOHead";

// Главная страница загружается сразу
import Index from "./pages/Index";

// Остальные страницы загружаются по требованию
const SpeedValve = lazy(() => import("./pages/SpeedValve"));
const SafetyValve = lazy(() => import("./pages/SafetyValve"));
const Components = lazy(() => import("./pages/Components"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Blog = lazy(() => import("./pages/Blog"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const ResetPasswordPage = lazy(() => import("./pages/ResetPasswordPage"));
const PumpEquipment = lazy(() => import("./pages/PumpEquipment"));
const Flanges = lazy(() => import("./pages/Flanges"));
const FlangesType01B = lazy(() => import("./pages/FlangesType01B"));
const FlangesType01BDv116 = lazy(() => import("./pages/FlangesType01BDv116"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ServiceUnavailable = lazy(() => import("./pages/ServiceUnavailable"));
const Delivery = lazy(() => import("./pages/Delivery"));
const BlogArticle = lazy(() => import("./pages/BlogArticle"));
const About = lazy(() => import("./pages/About"));
const Reviews = lazy(() => import("./pages/Reviews"));
const SpeedValveDU25 = lazy(() => import("./pages/SpeedValveDU25"));
const SpeedValveDU32 = lazy(() => import("./pages/SpeedValveDU32"));
const SpeedValveDU40 = lazy(() => import("./pages/SpeedValveDU40"));
const SpeedValveDU50 = lazy(() => import("./pages/SpeedValveDU50"));
const SafetyValvePPCZ12 = lazy(() => import("./pages/SafetyValvePPCZ12"));
const SafetyValvePK32L = lazy(() => import("./pages/SafetyValvePK32L"));
const ComponentSpringPPCZ12 = lazy(() => import("./pages/ComponentSpringPPCZ12"));
const ComponentValvePPCZ12 = lazy(() => import("./pages/ComponentValvePPCZ12"));
const ComponentFlange4PPCZ12 = lazy(() => import("./pages/ComponentFlange4PPCZ12"));
const ComponentFlange8PPCZ12 = lazy(() => import("./pages/ComponentFlange8PPCZ12"));
const PumpFrameCorkenFD150 = lazy(() => import("./pages/PumpFrameCorkenFD150"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      gcTime: 10 * 60 * 1000,
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

// Компонент загрузки страницы
function PageLoader() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Загрузка страницы...</p>
      </div>
    </div>
  );
}

function ScrollToAnchor() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.slice(1);
    let attempts = 0;
    const tryScroll = () => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else if (attempts < 20) {
        attempts++;
        setTimeout(tryScroll, 150);
      }
    };
    setTimeout(tryScroll, 100);
  }, [location]);

  return null;
}

// Адреса вида /path/index.html (нужны поисковым роботам для SEO-версий страниц) —
// у живых посетителей должны вести на тот же товар без /index.html на конце.
function CatchAllRoute() {
  const location = useLocation();

  if (location.pathname.endsWith('/index.html')) {
    const cleanPath = location.pathname.replace(/\/index\.html$/, '') || '/';
    return <Navigate to={cleanPath + location.search + location.hash} replace />;
  }

  return (
    <>
      <SEOHead
        title="Страница не найдена — СтальПроКлапан"
        description="Запрашиваемая страница не существует или была перемещена."
        noindex={true}
      />
      <NotFound />
    </>
  );
}

// Компонент для защищенных маршрутов
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Загрузка...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <CartProvider>
            <StructuredData />
            <ScrollToAnchor />
            <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/speed-valve" element={
                <Suspense fallback={<PageLoader />}>
                  <SpeedValve />
                </Suspense>
              } />
              <Route path="/safety-valve" element={
                <Suspense fallback={<PageLoader />}>
                  <SafetyValve />
                </Suspense>
              } />
              <Route path="/components" element={
                <Suspense fallback={<PageLoader />}>
                  <Components />
                </Suspense>
              } />
              <Route path="/faq" element={
                <Suspense fallback={<PageLoader />}>
                  <FAQ />
                </Suspense>
              } />
              <Route path="/blog" element={
                <Suspense fallback={<PageLoader />}>
                  <Blog />
                </Suspense>
              } />
              <Route path="/blog/:slug" element={
                <Suspense fallback={<PageLoader />}>
                  <BlogArticle />
                </Suspense>
              } />
              <Route path="/login" element={
                <Suspense fallback={<PageLoader />}>
                  <LoginPage />
                </Suspense>
              } />
              <Route path="/reset-password" element={
                <Suspense fallback={<PageLoader />}>
                  <ResetPasswordPage />
                </Suspense>
              } />
              <Route path="/dashboard" element={
                <ProtectedRoute>
                  <Suspense fallback={<PageLoader />}>
                    <Dashboard />
                  </Suspense>
                </ProtectedRoute>
              } />
              <Route path="/pump-equipment" element={
                <Suspense fallback={<PageLoader />}>
                  <PumpEquipment />
                </Suspense>
              } />
              <Route path="/flanges" element={
                <Suspense fallback={<PageLoader />}>
                  <Flanges />
                </Suspense>
              } />
              <Route path="/flanges/tip-01-ispolnenie-b" element={
                <Suspense fallback={<PageLoader />}>
                  <FlangesType01B />
                </Suspense>
              } />
              <Route path="/flanges/tip-01-ispolnenie-b-dv116" element={
                <Suspense fallback={<PageLoader />}>
                  <FlangesType01BDv116 />
                </Suspense>
              } />
              <Route path="/delivery" element={
                <Suspense fallback={<PageLoader />}>
                  <Delivery />
                </Suspense>
              } />
              <Route path="/about" element={<Suspense fallback={<PageLoader />}><About /></Suspense>} />
              <Route path="/reviews" element={<Suspense fallback={<PageLoader />}><Reviews /></Suspense>} />
              <Route path="/speed-valve/tpa11-025" element={<Suspense fallback={<PageLoader />}><SpeedValveDU25 /></Suspense>} />
              <Route path="/speed-valve/tpa11-032" element={<Suspense fallback={<PageLoader />}><SpeedValveDU32 /></Suspense>} />
              <Route path="/speed-valve/tpa11-040" element={<Suspense fallback={<PageLoader />}><SpeedValveDU40 /></Suspense>} />
              <Route path="/speed-valve/tpa11-050" element={<Suspense fallback={<PageLoader />}><SpeedValveDU50 /></Suspense>} />
              <Route path="/safety-valve/ppcz-12" element={<Suspense fallback={<PageLoader />}><SafetyValvePPCZ12 /></Suspense>} />
              <Route path="/safety-valve/pk-32-l" element={<Suspense fallback={<PageLoader />}><SafetyValvePK32L /></Suspense>} />
              <Route path="/components/spring-ppcz12" element={<Suspense fallback={<PageLoader />}><ComponentSpringPPCZ12 /></Suspense>} />
              <Route path="/components/valve-ppcz12" element={<Suspense fallback={<PageLoader />}><ComponentValvePPCZ12 /></Suspense>} />
              <Route path="/components/flange4-ppcz12" element={<Suspense fallback={<PageLoader />}><ComponentFlange4PPCZ12 /></Suspense>} />
              <Route path="/components/flange8-ppcz12" element={<Suspense fallback={<PageLoader />}><ComponentFlange8PPCZ12 /></Suspense>} />
              <Route path="/pump-equipment/corken-fd150-frame" element={<Suspense fallback={<PageLoader />}><PumpFrameCorkenFD150 /></Suspense>} />
              <Route path="/service-unavailable" element={
                <Suspense fallback={<PageLoader />}>
                  <ServiceUnavailable />
                </Suspense>
              } />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={
                <Suspense fallback={<PageLoader />}>
                  <CatchAllRoute />
                </Suspense>
              } />
            </Routes>
            </ErrorBoundary>
          </CartProvider>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;