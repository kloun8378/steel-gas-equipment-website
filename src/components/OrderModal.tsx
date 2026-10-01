import { useNavigate } from 'react-router-dom';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface OrderModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function OrderModal({ open, onOpenChange }: OrderModalProps) {
  const navigate = useNavigate();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Icon name="ShoppingCart" size={20} />
            Товар добавлен в корзину
          </DialogTitle>
          <DialogDescription>
            Можете продолжить покупки или перейти в корзину, чтобы проверить заказ и оформить его.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex-col sm:flex-row gap-2">
          <Button variant="outline" onClick={() => onOpenChange(false)} className="w-full sm:w-auto">
            Продолжить покупки
          </Button>
          <Button onClick={() => { onOpenChange(false); navigate('/cart'); }} className="w-full sm:w-auto">
            <Icon name="ShoppingCart" className="mr-2 h-4 w-4" />
            Перейти в корзину
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
