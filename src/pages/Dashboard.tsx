import { useState, useEffect } from "react";
import { Helmet } from "@/components/Helmet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/hooks/useToast";
import api from "@/services/api";
import DashboardProducts from "@/components/dashboard/DashboardProducts";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import CompanyDataCard, { type CompanyData } from "@/components/dashboard/CompanyDataCard";
import CartCard from "@/components/dashboard/CartCard";
import OrdersHistoryCard, { type Order } from "@/components/dashboard/OrdersHistoryCard";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const { showSuccess, showError, showInfo } = useToast();
  const [orders, setOrders] = useState<Order[]>([]);
  const [ordersLoading, setOrdersLoading] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'invoice'>('card');
  const [companyData, setCompanyData] = useState<CompanyData>({
    name: '',
    inn: '',
    address: '',
    phone: '',
    email: '',
    description: '',
    profileType: 'company' as 'company' | 'individual',
    fullName: ''
  });

  const loadOrders = () => {
    setOrdersLoading(true);
    api.getOrders()
      .then((data) => setOrders(data.orders || []))
      .catch(() => setOrders([]))
      .finally(() => setOrdersLoading(false));
  };

  useEffect(() => {
    if (user) {
      api.getProfile()
        .then((data) => {
          if (data.profile) {
            setCompanyData({
              name: data.profile.name || '',
              inn: data.profile.inn || '',
              address: data.profile.address || '',
              phone: data.profile.phone || '',
              email: data.profile.email || '',
              description: data.profile.description || '',
              profileType: data.profile.profileType === 'individual' ? 'individual' : 'company',
              fullName: data.profile.fullName || ''
            });
          }
        })
        .catch(() => {
          setCompanyData({
            name: user.company,
            inn: '',
            address: user.address,
            phone: user.phone,
            email: user.email,
            description: '',
            profileType: 'company',
            fullName: user.name || ''
          });
        });
      loadOrders();

      const params = new URLSearchParams(window.location.search);
      if (params.get('payment') === 'success') {
        showSuccess('Оплата обрабатывается. Статус заказа обновится через несколько секунд.');
        window.history.replaceState({}, '', '/dashboard');
        setTimeout(loadOrders, 3000);
      }
    }
  }, [user]);

  const handleCompanyDataChange = (field: string, value: string) => {
    setCompanyData(prev => ({ ...prev, [field]: value }));
  };

  const saveCompanyData = async () => {
    if (user) {
      try {
        await api.saveProfile(companyData);
        showSuccess('Данные компании сохранены!');
      } catch {
        showError('Ошибка сохранения данных');
      }
    }
  };

  const handleLogout = () => {
    logout();
  };

  const handlePayOrder = async (orderId: number) => {
    showInfo('Готовлю оплату...');
    try {
      const result = await api.repayOrder(orderId);
      if (result.paymentUrl) {
        window.location.href = result.paymentUrl;
      } else {
        showError('Не удалось получить ссылку на оплату');
      }
    } catch (error) {
      showError(error instanceof Error ? error.message : 'Ошибка при переходе к оплате');
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <Icon name="Loader2" className="h-8 w-8 animate-spin mx-auto mb-4" />
          <p className="text-gray-600 mb-4">Загрузка...</p>
        </div>
      </div>
    );
  }

  return (
    <>
    <Helmet>
      <title>Личный кабинет — СтальПроКлапан</title>
      <meta name="description" content="Личный кабинет покупателя СтальПроКлапан. Управление заказами, данные компании, история покупок." />
      <meta name="robots" content="noindex, nofollow" />
    </Helmet>
    <div className="min-h-screen bg-gray-100">
      <DashboardHeader email={user.email} onLogout={handleLogout} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="cabinet" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="cabinet">
              <Icon name="LayoutDashboard" className="mr-2 h-4 w-4" />
              Личный кабинет
            </TabsTrigger>
            <TabsTrigger value="products">
              <Icon name="Package" className="mr-2 h-4 w-4" />
              Наша продукция
            </TabsTrigger>
          </TabsList>

          <TabsContent value="products">
            <DashboardProducts />
          </TabsContent>

          <TabsContent value="cabinet">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <CompanyDataCard
            companyData={companyData}
            onChange={handleCompanyDataChange}
            onSave={saveCompanyData}
          />
          <CartCard
            paymentMethod={paymentMethod}
            onPaymentMethodChange={setPaymentMethod}
            companyData={companyData}
            loadOrders={loadOrders}
          />
        </div>

        <OrdersHistoryCard
          orders={orders}
          ordersLoading={ordersLoading}
          onPayOrder={handlePayOrder}
        />
          </TabsContent>
        </Tabs>
      </div>
    </div>
    </>
  );
};

export default Dashboard;
