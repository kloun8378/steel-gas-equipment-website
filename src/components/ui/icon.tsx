import React from 'react';
import {
  Factory,
  ShoppingCart,
  Trash2,
  User,
  LogOut,
  Home,
  LogIn,
  Save,
  Send,
  ChevronDown,
  UserPlus,
  Menu,
  X,
  Mail,
  Phone,
  Package,
  CheckCircle,
  AlertCircle,
  Loader2,
  Loader,
  KeyRound,
  MapPin,
  Clock,
  Users,
  Building2,
  CircleAlert,
  type LucideProps
} from 'lucide-react';

interface IconProps extends LucideProps {
  name: string;
  fallback?: string;
}

// Карта доступных иконок для оптимизации бандла
const iconMap: Record<string, React.FC<LucideProps>> = {
  Factory,
  ShoppingCart,
  Trash2,
  User,
  LogOut,
  Home,
  LogIn,
  Save,
  Send,
  ChevronDown,
  UserPlus,
  Menu,
  X,
  Mail,
  Phone,
  Package,
  CheckCircle,
  AlertCircle,
  Loader2,
  Loader,
  KeyRound,
  MapPin,
  Clock,
  Users,
  Building2,
  CircleAlert,
};

const Icon: React.FC<IconProps> = ({ name, fallback = 'CircleAlert', ...props }) => {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    // Если иконка не найдена, используем fallback иконку
    const FallbackIcon = iconMap[fallback];

    // Если даже fallback не найден, возвращаем пустой span
    if (!FallbackIcon) {
      return <span className="text-xs text-gray-400">[icon]</span>;
    }

    return <FallbackIcon {...props} />;
  }

  return <IconComponent {...props} />;
};

export default Icon;