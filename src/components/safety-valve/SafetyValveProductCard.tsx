import { ReactNode } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface SafetyValveProductCardProps {
  image: string;
  imageAlt: string;
  name: string;
  description: string;
  priceLabel: string;
  quantity: number;
  onQuantityChange: (val: number) => void;
  onAddToCart: () => void;
  onRelatedOpen: () => void;
  showSpecs: boolean;
  onToggleSpecs: () => void;
  specsContent: ReactNode;
}

export default function SafetyValveProductCard({
  image,
  imageAlt,
  name,
  description,
  priceLabel,
  quantity,
  onQuantityChange,
  onAddToCart,
  onRelatedOpen,
  showSpecs,
  onToggleSpecs,
  specsContent,
}: SafetyValveProductCardProps) {
  return (
    <Card className="w-full max-w-md flex flex-col">
      <CardContent className="p-6 flex flex-col flex-1">
        <div className="relative">
          <div
            className="aspect-square bg-white rounded-lg mb-4 border overflow-hidden w-56 h-56 mx-auto cursor-pointer hover:shadow-lg transition-shadow"
            onClick={onToggleSpecs}
          >
            <img
              src={image}
              alt={imageAlt}
              className="w-full h-full object-contain rounded-lg p-2"
              loading="lazy"
            />
          </div>
          {showSpecs && specsContent}
        </div>
        <div className="text-center flex flex-col flex-1">
          <h3 className="text-base font-semibold text-gray-900 mb-2 min-h-[3rem] flex items-start justify-center">
            {name}
          </h3>
          <p className="text-sm text-gray-600 mb-3">{description}</p>
          <div className="text-2xl font-bold text-primary mb-4">
            {priceLabel} <span className="text-sm text-gray-500">с НДС</span>
          </div>
          <div className="mt-auto">
            <div className="flex items-center justify-center gap-2 mb-3">
              <input
                type="number"
                value={quantity}
                onChange={(e) => onQuantityChange(Math.max(1, parseInt(e.target.value) || 1))}
                min="1"
                className="w-20 px-3 py-2 text-sm border rounded text-center"
              />
              <span className="text-sm text-gray-600">шт.</span>
            </div>
            <Button size="lg" className="w-full" onClick={onAddToCart}>
              <Icon name="ShoppingCart" className="mr-1 h-3 w-3" />
              Заказать
            </Button>
            <Button size="lg" variant="outline" className="w-full mt-2" onClick={onRelatedOpen}>
              <Icon name="Package" className="mr-2 h-5 w-5" />
              Сопутствующие товары
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
