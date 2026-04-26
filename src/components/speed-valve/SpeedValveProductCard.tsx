import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
  const [showSpecs, setShowSpecs] = useState(false);

  return (
    <Card className="max-w-xs mx-auto">
      <CardContent className="p-4">
        <div className="relative">
          <div
            className="aspect-square bg-white rounded-lg mb-3 border overflow-hidden w-32 h-32 mx-auto cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => setShowSpecs(!showSpecs)}
          >
            <img
              src={image}
              alt={imageAlt}
              className="w-full h-full object-cover object-top rounded-lg"
              loading="lazy"
              style={imageStyle}
            />
          </div>
          {showSpecs && (
            <div className="absolute left-0 right-0 z-50 bg-white rounded-lg shadow-xl border mt-1">
              <div className="bg-gray-50 p-3 border-b flex justify-between items-center">
                <h3 className="text-sm font-bold text-gray-900">{techTitle}</h3>
                <button onClick={() => setShowSpecs(false)} className="text-gray-400 hover:text-gray-600">
                  <Icon name="X" className="h-4 w-4" />
                </button>
              </div>
              <div className="p-3 space-y-2 text-xs max-h-64 overflow-y-auto">
                {techSpecs.map((spec, i) => (
                  <div key={i}>
                    <span className="font-semibold">{spec.label}:</span> {spec.value}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
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
            variant="outline"
            className="w-full text-xs mb-2"
            asChild
          >
            <a
              href="https://cdn.poehali.dev/projects/cbca45d3-e5bd-4606-92f4-2a84a020c161/bucket/docs/passport-speed-valve.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="FileText" className="mr-1 h-3 w-3" />
              ПАСПОРТ
            </a>
          </Button>
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