import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface DashboardHeaderProps {
  email: string;
  onLogout: () => void;
}

const DashboardHeader = ({ email, onLogout }: DashboardHeaderProps) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Icon name="Factory" className="h-8 w-8 text-primary mr-3" />
            <h1 className="text-2xl font-bold text-gray-900">СтальПро - Личный кабинет</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">Добро пожаловать, {email}</span>
            <Button variant="outline" onClick={() => window.location.href = '/'}>
              <Icon name="Home" className="mr-2 h-4 w-4" />
              На главную
            </Button>
            <Button variant="outline" onClick={onLogout}>
              <Icon name="LogOut" className="mr-2 h-4 w-4" />
              Выйти
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
