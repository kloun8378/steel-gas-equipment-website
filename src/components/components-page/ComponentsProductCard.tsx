import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Icon from '@/components/ui/icon';

interface PopoverRow {
  label?: string;
  value?: string;
  text?: string;
  isPrice?: boolean;
  price?: string;
}

interface ComponentsProductCardProps {
  id: string;
  name: string;
  description: string;
  price: string;
  priceRaw: number;
  image: string;
  imageAlt: string;
  quantity: number;
  onQuantityChange: (val: number) => void;
  onAddToCart: (product: Record<string, unknown>) => void;
  popoverWidth?: string;
  popoverRows: PopoverRow[];
}

export default function ComponentsProductCard({
  id,
  name,
  description,
  price,
  priceRaw,
  image,
  imageAlt,
  quantity,
  onQuantityChange,
  onAddToCart,
  popoverWidth = 'w-96',
  popoverRows,
}: ComponentsProductCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="text-center">
        <Popover>
          <PopoverTrigger asChild>
            <div className="bg-white p-6 rounded-lg mb-4 border cursor-pointer hover:shadow-md transition-shadow">
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-48 object-contain bg-white rounded"
                loading="lazy"
                style={{ backgroundColor: '#ffffff' }}
              />
            </div>
          </PopoverTrigger>
          <PopoverContent className={`${popoverWidth} p-0`}>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="bg-gray-50 p-4 border-b">
                <h3 className="text-lg font-bold text-gray-900">{name}</h3>
              </div>
              <div className="p-4 space-y-3 text-sm">
                {popoverRows.map((row, i) => {
                  if (row.isPrice) {
                    return (
                      <div key={i} className="border-t pt-3 mt-3">
                        <div className="text-lg font-bold text-primary">
                          {row.price} <span className="text-sm text-gray-500">с НДС</span>
                        </div>
                      </div>
                    );
                  }
                  if (row.text) {
                    return <p key={i} className="text-gray-700">{row.text}</p>;
                  }
                  return (
                    <div key={i}>
                      <span className="font-semibold">{row.label}:</span> {row.value}
                    </div>
                  );
                })}
              </div>
            </div>
          </PopoverContent>
        </Popover>
        <CardTitle className="text-xl">{name}</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <div className="mb-6">
          <p className="text-2xl font-bold text-primary mb-2">{price}</p>
          <p className="text-sm text-gray-600">с НДС</p>
        </div>
        <div className="flex items-center justify-center gap-3 mb-4">
          <label className="text-sm font-medium">Количество:</label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => onQuantityChange(Math.max(1, parseInt(e.target.value) || 1))}
            className="w-16 px-2 py-1 border rounded text-center"
          />
        </div>
        <Button
          className="w-full"
          size="lg"
          onClick={() => onAddToCart({ id, name, price: priceRaw, image, description, quantity })}
        >
          <Icon name="ShoppingCart" className="mr-2 h-5 w-5" />
          Заказать
        </Button>
      </CardContent>
    </Card>
  );
}
