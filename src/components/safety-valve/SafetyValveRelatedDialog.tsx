import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface RelatedProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  priceLabel: string;
  image: string;
}

interface SafetyValveRelatedDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  relatedProducts: RelatedProduct[];
  relatedQuantities: Record<string, number>;
  onQuantityChange: (id: string, val: number) => void;
  onAddToCart: (product: Record<string, unknown>) => void;
}

export default function SafetyValveRelatedDialog({
  open,
  onOpenChange,
  relatedProducts,
  relatedQuantities,
  onQuantityChange,
  onAddToCart,
}: SafetyValveRelatedDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-xl">Сопутствующие товары к ППЦЗ-12</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
          {relatedProducts.map((product) => (
            <div key={product.id} className="border rounded-xl p-5 flex flex-col gap-3">
              <div className="w-full h-56 rounded-lg overflow-hidden bg-gray-100">
                <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
              </div>
              <div className="font-semibold text-base text-gray-900">{product.name}</div>
              <div className="text-sm text-gray-500">{product.description}</div>
              <div className="text-xl font-bold text-primary">{product.priceLabel}</div>
              <div className="flex items-center gap-3 mt-auto">
                <input
                  type="number"
                  min="1"
                  value={relatedQuantities[product.id] ?? 1}
                  onChange={(e) => onQuantityChange(product.id, Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-18 px-3 py-2 text-sm border rounded text-center"
                />
                <span className="text-sm text-gray-500">шт.</span>
                <Button
                  size="default"
                  className="flex-1"
                  onClick={() => onAddToCart({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    description: product.description,
                    quantity: relatedQuantities[product.id] ?? 1,
                  })}
                >
                  <Icon name="ShoppingCart" className="mr-2 h-4 w-4" />
                  В корзину
                </Button>
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
