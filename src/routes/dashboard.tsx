import { createFileRoute } from "@tanstack/react-router";
import Dashboard from "@/pages/Dashboard";
import { Navigate } from "@/lib/router-compat";
import { useAuth } from "@/context/AuthContext";

// Личный кабинет: сессия хранится в localStorage, поэтому только в браузере.
export const Route = createFileRoute("/dashboard")({
  ssr: false,
  pendingComponent: DashboardLoader,
  component: ProtectedDashboard,
});

function DashboardLoader() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Загрузка...</p>
        <p className="sr-only">
          Личный кабинет СтальПроКлапан: профиль компании, корзина, оформление и история заказов
          скоростных и предохранительных клапанов для СУГ.
        </p>
      </div>
    </div>
  );
}

function ProtectedDashboard() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <DashboardLoader />;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Dashboard />;
}