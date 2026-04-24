import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Icon from '@/components/ui/icon';

interface TechSpec {
  label: string;
  value: string;
}

interface SpeedValveProductCardProps {
  name: string;
  description: string;
  price: string;
  priceRaw: number;
  image: string;
  imageAlt: string;
  imageStyle?: React.CSSProperties;
  id: string;
  quantity: number;
  onQuantityChange: (val: number) => void;
  onAddToCart: (product: Record<string, unknown>) => void;
  techTitle: string;
  techSpecs: TechSpec[];
}

export default function SpeedValveProductCard({
  name,
  description,
  price,
  priceRaw,
  image,
  imageAlt,
  imageStyle,
  id,
  quantity,
  onQuantityChange,
  onAddToCart,
  techTitle,
  techSpecs,
}: SpeedValveProductCardProps) {
  return (
    <Card className="max-w-xs mx-auto">
      <CardContent className="p-4">
        <Popover>
          <PopoverTrigger asChild>
            <div className="aspect-square bg-white rounded-lg mb-3 border overflow-hidden w-32 h-32 mx-auto cursor-pointer hover:shadow-lg transition-shadow">
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-full object-cover object-top rounded-lg"
                loading="lazy"
                style={imageStyle}
              />
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-96 p-0">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="bg-gray-50 p-4 border-b">
                <h3 className="text-lg font-bold text-gray-900">{techTitle}</h3>
              </div>
              <div className="p-4 space-y-3 text-sm">
                {techSpecs.map((spec, i) => (
                  <div key={i}>
                    <span className="font-semibold">{spec.label}:</span> {spec.value}
                  </div>
                ))}
              </div>
            </div>
          </PopoverContent>
        </Popover>
        <div className="text-center">
          <h3 className="text-sm font-semibold text-gray-900 mb-1">{name}</h3>
          <p className="text-xs text-gray-600 mb-2">{description}</p>
          <div className="text-lg font-bold text-primary mb-3">
            {price} <span className="text-xs text-gray-500">с НДС</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <input
              type="number"
              value={quantity}
              onChange={(e) => onQuantityChange(Math.max(1, parseInt(e.target.value) || 1))}
              min="1"
              className="w-16 px-2 py-1 text-xs border rounded text-center"
            />
            <span className="text-xs text-gray-600">шт.</span>
          </div>
          <Button
            size="sm"
            className="w-full text-xs"
            onClick={() => onAddToCart({ id, name, price: priceRaw, image, description, quantity })}
          >
            <Icon name="ShoppingCart" className="mr-1 h-3 w-3" />
            Заказать
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
