import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/useToast";

interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  description?: string;
}

export interface Order {
  id: number;
  totalPrice: number;
  status: string;
  companyName: string;
  items: OrderItem[];
  createdAt: string;
  paymentStatus?: string;
  paymentUrl?: string;
  paymentMethod?: string;
}

const STATUS_LABELS: Record<string, string> = {
  'new': 'Новый',
  'processing': 'В обработке',
  'shipped': 'Отправлен',
  'delivered': 'Доставлен',
  'cancelled': 'Отменён',
};

const STATUS_COLORS: Record<string, string> = {
  'new': 'bg-blue-100 text-blue-800',
  'processing': 'bg-yellow-100 text-yellow-800',
  'shipped': 'bg-purple-100 text-purple-800',
  'delivered': 'bg-green-100 text-green-800',
  'cancelled': 'bg-red-100 text-red-800',
};

const PAYMENT_LABELS: Record<string, string> = {
  'pending': 'Ожидает оплаты',
  'paid': 'Оплачен',
  'canceled': 'Оплата отменена',
  'invoice_pending': 'Ожидает оплаты по счёту',
};

const PAYMENT_COLORS: Record<string, string> = {
  'pending': 'bg-orange-100 text-orange-800',
  'paid': 'bg-green-100 text-green-800',
  'canceled': 'bg-red-100 text-red-800',
  'invoice_pending': 'bg-blue-100 text-blue-800',
};

const PAYMENT_METHOD_LABELS: Record<string, string> = {
  'card': 'Картой онлайн',
  'invoice': 'По счёту',
};

interface OrdersHistoryCardProps {
  orders: Order[];
  ordersLoading: boolean;
  onPayOrder: (orderId: number) => void;
}

const OrdersHistoryCard = ({ orders, ordersLoading, onPayOrder }: OrdersHistoryCardProps) => {
  const { cart, addToCart, updateQuantity } = useCart();
  const { showSuccess } = useToast();
  const handlePayOrder = onPayOrder;

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Icon name="ClipboardList" className="mr-2 h-5 w-5" />
          История заказов
        </CardTitle>
      </CardHeader>
      <CardContent>
        {ordersLoading ? (
          <div className="flex justify-center py-8">
            <Icon name="Loader2" className="h-8 w-8 animate-spin text-gray-400" />
          </div>
        ) : orders.length === 0 ? (
          <div className="text-center py-8">
            <Icon name="Package" className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">Заказов пока нет</p>
            <p className="text-sm text-gray-400 mt-2">Оформите первый заказ через корзину</p>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <div key={order.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-semibold text-lg">Заказ #{order.id}</h4>
                    <p className="text-sm text-gray-500">
                      {new Date(order.createdAt).toLocaleDateString('ru-RU', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${STATUS_COLORS[order.status] || 'bg-gray-100 text-gray-800'}`}>
                      {STATUS_LABELS[order.status] || order.status}
                    </span>
                    {order.paymentStatus && (
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${PAYMENT_COLORS[order.paymentStatus] || 'bg-gray-100 text-gray-800'}`}>
                        {PAYMENT_LABELS[order.paymentStatus] || order.paymentStatus}
                      </span>
                    )}
                    {order.paymentMethod && (
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                        {PAYMENT_METHOD_LABELS[order.paymentMethod] || order.paymentMethod}
                      </span>
                    )}
                    <span className="font-bold text-lg">{order.totalPrice.toLocaleString()} ₽</span>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-md p-3">
                  <div className="space-y-1">
                    {order.items.map((item, idx) => (
                      <div key={idx} className="flex justify-between text-sm">
                        <span className="text-gray-700">{item.name} x{item.quantity}</span>
                        <span className="text-gray-600">{(item.price * item.quantity).toLocaleString()} ₽</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-3 flex gap-2">
                  {(order.paymentStatus === 'pending' || order.paymentStatus === 'invoice_pending') && (
                    <Button
                      size="sm"
                      onClick={() => handlePayOrder(order.id)}
                    >
                      <Icon name="CreditCard" className="mr-2 h-4 w-4" />
                      Оплатить картой
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      order.items.forEach((item) => {
                        addToCart({
                          id: item.id,
                          name: item.name,
                          price: item.price,
                          image: item.image || '',
                          description: item.description,
                        });
                        if (item.quantity > 1) {
                          const existing = cart.find(c => c.id === item.id);
                          const newQty = (existing ? existing.quantity : 0) + item.quantity;
                          updateQuantity(item.id, newQty);
                        }
                      });
                      showSuccess('Товары из заказа добавлены в корзину');
                    }}
                  >
                    <Icon name="RefreshCw" className="mr-2 h-4 w-4" />
                    Повторить заказ
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default OrdersHistoryCard;
