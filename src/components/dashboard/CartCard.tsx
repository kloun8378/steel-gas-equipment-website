import { reachGoal } from '@/lib/metrika';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Icon from "@/components/ui/icon";
import { sendOrderEmail } from "@/services/emailService";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/useToast";
import api from "@/services/api";
import type { CompanyData } from "@/components/dashboard/CompanyDataCard";

interface CartCardProps {
  paymentMethod: 'card' | 'invoice';
  onPaymentMethodChange: (value: 'card' | 'invoice') => void;
  companyData: CompanyData;
  loadOrders: () => void;
}

const CartCard = ({ paymentMethod, onPaymentMethodChange, companyData, loadOrders }: CartCardProps) => {
  const { user } = useAuth();
  const { cart, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart();
  const { showSuccess, showError, showInfo } = useToast();
  const setPaymentMethod = onPaymentMethodChange;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center">
            <Icon name="ShoppingCart" className="mr-2 h-5 w-5" />
            Моя корзина
          </div>
          <span className="text-sm font-normal text-gray-500">
            {cart.length} {cart.length === 1 ? 'товар' : cart.length < 5 ? 'товара' : 'товаров'}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {cart.length === 0 ? (
          <div className="text-center py-8">
            <Icon name="ShoppingCart" className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">Корзина пуста</p>
            <p className="text-sm text-gray-400 mt-2">
              Добавьте товары из каталога на главной странице
            </p>
            <a href="/#products">
              <Button 
                variant="outline" 
                className="mt-4 w-full"
              >
                Перейти к каталогу
              </Button>
            </a>
          </div>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center gap-4 p-4 border rounded-lg">
                {item.image && (
                  <img 
                    src={item.image} 
                    alt={item.name}
                    loading="lazy"
                    className="w-16 h-16 object-cover rounded"
                  />
                )}
                
                <div className="flex-1">
                  <h4 className="font-medium">{item.name}</h4>
                  {item.description && <p className="text-sm text-gray-500">{item.description}</p>}
                  <div className="text-lg font-bold text-primary mt-1">
                    {item.price.toLocaleString()} ₽ за шт.
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </Button>
                  <span className="w-8 text-center font-medium">{item.quantity}</span>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </Button>
                </div>
                
                <div className="text-right">
                  <div className="font-bold text-lg">
                    {(item.price * item.quantity).toLocaleString()} ₽
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => removeFromCart(item.id)}
                    className="mt-2"
                  >
                    <Icon name="Trash2" className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
            
            <div className="border-t pt-4">
              <div className="mb-4">
                <Label className="mb-2 block">Способ оплаты</Label>
                <RadioGroup
                  value={paymentMethod}
                  onValueChange={(value) => setPaymentMethod(value as 'card' | 'invoice')}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                >
                  <label
                    htmlFor="payment-card"
                    className={`flex items-center gap-3 border rounded-lg p-3 cursor-pointer transition-colors ${paymentMethod === 'card' ? 'border-primary bg-primary/5' : 'border-gray-200'}`}
                  >
                    <RadioGroupItem value="card" id="payment-card" />
                    <div>
                      <div className="font-medium flex items-center gap-2">
                        <Icon name="CreditCard" className="h-4 w-4" />
                        Картой онлайн
                      </div>
                      <p className="text-xs text-gray-500">Оплата через ЮKassa сразу после оформления</p>
                    </div>
                  </label>
                  <label
                    htmlFor="payment-invoice"
                    className={`flex items-center gap-3 border rounded-lg p-3 cursor-pointer transition-colors ${paymentMethod === 'invoice' ? 'border-primary bg-primary/5' : 'border-gray-200'}`}
                  >
                    <RadioGroupItem value="invoice" id="payment-invoice" />
                    <div>
                      <div className="font-medium flex items-center gap-2">
                        <Icon name="FileText" className="h-4 w-4" />
                        По счёту
                      </div>
                      <p className="text-xs text-gray-500">Безналичный расчёт для юрлиц и ИП</p>
                    </div>
                  </label>
                </RadioGroup>
              </div>

              <div className="flex justify-between items-center font-bold text-lg mb-4">
                <span>ИТОГО:</span>
                <span>{getTotalPrice().toLocaleString()} ₽</span>
              </div>
              
              <div className="flex gap-4">
                <Button 
                  className="flex-1"
                  onClick={async () => {
                    if (cart.length === 0) {
                      showError('Корзина пуста! Добавьте товары для оформления заказа.');
                      return;
                    }

                    showInfo('Оформляю заказ...');

                    try {
                      const orderResult = await api.createOrder(paymentMethod);
                      reachGoal('order_created', { order_id: orderResult.order.id, total: orderResult.order.total, payment: paymentMethod });

                      const orderData = {
                        company: user?.company || 'Неизвестная компания',
                        contact: user?.name || 'Неизвестный контакт',
                        phone: user?.phone || 'Не указан', 
                        email: user?.email || 'Не указан',
                        address: user?.address || 'Не указан',
                        cart: orderResult.order.items,
                        total: orderResult.order.total,
                        companyData: companyData
                      };

                      clearCart();
                      loadOrders();

                      const emailSent = await sendOrderEmail(orderData);
                      if (!emailSent) {
                        console.error('EmailJS: письмо не отправлено');
                      }

                      if (orderResult.order.paymentUrl) {
                        showSuccess(`Заказ #${orderResult.order.id} оформлен! Переход к оплате...`);
                        window.location.href = orderResult.order.paymentUrl;
                      } else if (paymentMethod === 'invoice') {
                        showSuccess(`Заказ #${orderResult.order.id} оформлен! Счёт на оплату придёт вам на почту.`);
                      } else {
                        showSuccess(`Заказ #${orderResult.order.id} успешно оформлен!`);
                      }
                    } catch (error) {
                      showError(error instanceof Error ? error.message : 'Ошибка оформления заказа');
                    }
                  }}
                >
                  <Icon name="CreditCard" className="mr-2 h-4 w-4" />
                  {paymentMethod === 'card' ? 'Оформить и оплатить' : 'Оформить заказ'}
                </Button>
                <Button 
                  variant="outline"
                  onClick={clearCart}
                >
                  <Icon name="Trash2" className="mr-2 h-4 w-4" />
                  Очистить корзину
                </Button>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CartCard;
