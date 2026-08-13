import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface OrderModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function OrderModal({ open, onOpenChange }: OrderModalProps) {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Icon name="UserPlus" size={20} />
              Войдите, чтобы оформить заказ
            </DialogTitle>
            <DialogDescription>
              Товар добавлен в корзину. Чтобы оформить заказ, войдите в личный кабинет — если у вас ещё нет аккаунта, зарегистрируйтесь, это займёт меньше минуты.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex-col sm:flex-row gap-2">
            <Button variant="outline" onClick={() => onOpenChange(false)} className="w-full sm:w-auto">
              Продолжить покупки
            </Button>
            <Button onClick={() => { onOpenChange(false); navigate('/login'); }} className="w-full sm:w-auto">
              <Icon name="LogIn" className="mr-2 h-4 w-4" />
              Войти или зарегистрироваться
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Icon name="ShoppingCart" size={20} />
            Товар добавлен в корзину
          </DialogTitle>
          <DialogDescription>
            Можете продолжить покупки или перейти к оформлению заказа в личном кабинете.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex-col sm:flex-row gap-2">
          <Button variant="outline" onClick={() => onOpenChange(false)} className="w-full sm:w-auto">
            Продолжить покупки
          </Button>
          <Button onClick={() => { onOpenChange(false); navigate('/dashboard'); }} className="w-full sm:w-auto">
            <Icon name="Send" className="mr-2 h-4 w-4" />
            Оформить заказ
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
