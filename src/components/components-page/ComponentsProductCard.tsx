import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Icon from '@/components/ui/icon';

interface PopoverRow {
  label?: string;
  value?: string;
  text?: string;
  isPrice?: boolean;
  price?: string;
}

interface RelatedProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  priceLabel: string;
  image: string;
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
  relatedProducts?: RelatedProduct[];
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
  popoverRows,
  relatedProducts = [],
}: ComponentsProductCardProps) {
  const [showSpecs, setShowSpecs] = useState(false);
  const [relatedOpen, setRelatedOpen] = useState(false);
  const [relatedQuantities, setRelatedQuantities] = useState<Record<string, number>>({});

  return (
    <>
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader className="text-center">
          <div className="relative">
            <div
              className="bg-white p-6 rounded-lg mb-4 border cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => setShowSpecs(!showSpecs)}
            >
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-48 object-contain bg-white rounded"
                loading="lazy"
              />
            </div>
            {showSpecs && (
              <div className="absolute left-0 right-0 z-50 bg-white rounded-lg shadow-xl border mt-1">
                <div className="bg-gray-50 p-3 border-b flex justify-between items-center">
                  <h3 className="text-sm font-bold text-gray-900">{name}</h3>
                  <button onClick={() => setShowSpecs(false)} className="text-gray-400 hover:text-gray-600">
                    <Icon name="X" className="h-4 w-4" />
                  </button>
                </div>
                <div className="p-3 space-y-2 text-sm max-h-64 overflow-y-auto">
                  {popoverRows.map((row, i) => {
                    if (row.isPrice) {
                      return (
                        <div key={i} className="border-t pt-2 mt-2">
                          <span className="text-base font-bold text-primary">{row.price}</span>
                          <span className="text-xs text-gray-500 ml-1">с НДС</span>
                        </div>
                      );
                    }
                    if (row.text) return <p key={i} className="text-gray-700">{row.text}</p>;
                    return (
                      <div key={i}>
                        <span className="font-semibold">{row.label}:</span> {row.value}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
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
          <Button className="w-full mb-2" size="lg" variant="outline" asChild>
            <a href="https://www.ozon.ru/seller/stalpro-3601542/" target="_blank" rel="noopener noreferrer">
              <Icon name="ShoppingBag" className="mr-2 h-5 w-5" />
              Купить на Ozon
            </a>
          </Button>
          <Button
            className="w-full mb-2"
            size="lg"
            onClick={() => onAddToCart({ id, name, price: priceRaw, image, description, quantity })}
          >
            <Icon name="ShoppingCart" className="mr-2 h-5 w-5" />
            Заказать
          </Button>
          {relatedProducts.length > 0 && (
            <Button
              className="w-full"
              size="lg"
              variant="outline"
              onClick={() => setRelatedOpen(true)}
            >
              <Icon name="Package" className="mr-2 h-5 w-5" />
              Сопутствующие товары
            </Button>
          )}
        </CardContent>
      </Card>

      <Dialog open={relatedOpen} onOpenChange={setRelatedOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Сопутствующие товары</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            {relatedProducts.map((product) => (
              <div key={product.id} className="border rounded-lg p-4 flex flex-col gap-2">
                <img src={product.image} alt={product.name} className="w-full h-32 object-contain rounded bg-white border" loading="lazy" />
                <div className="font-semibold text-sm text-gray-900">{product.name}</div>
                <div className="text-xs text-gray-500">{product.description}</div>
                <div className="text-sm font-bold text-primary">{product.priceLabel} <span className="text-xs text-gray-500 font-normal">с НДС</span></div>
                <div className="flex items-center gap-2 mt-auto">
                  <input
                    type="number"
                    min="1"
                    value={relatedQuantities[product.id] ?? 1}
                    onChange={(e) => setRelatedQuantities(prev => ({
                      ...prev,
                      [product.id]: Math.max(1, parseInt(e.target.value) || 1)
                    }))}
                    className="w-14 px-2 py-1 text-xs border rounded text-center"
                  />
                  <span className="text-xs text-gray-500">шт.</span>
                  <Button
                    size="sm"
                    className="flex-1 text-xs"
                    onClick={() => onAddToCart({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      image: product.image,
                      description: product.description,
                      quantity: relatedQuantities[product.id] ?? 1,
                    })}
                  >
                    <Icon name="ShoppingCart" className="mr-1 h-3 w-3" />
                    Заказать
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}