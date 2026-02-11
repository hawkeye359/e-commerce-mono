import { Button } from '@/components/ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Heart } from 'lucide-react';
import type { ProductListView } from '../controllers/use-product-catalogue.controller';

export default function ProductItem({
  product,
  addToCart,
}: {
  product: ProductListView;
  addToCart: (id: string) => void;
}) {
  return (
    <Card className="flex-1 justify-between" key={product.id}>
      <CardHeader>
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-48 object-contain rounded-t-md"
        />
      </CardHeader>
      <CardContent>
        <p className="font-bold text-lg">Price: ${product.price}</p>
        <CardTitle className="mt-2 whitespace-nowrap overflow-hidden text-ellipsis">
          {product.title}
        </CardTitle>
        <CardDescription>{`${product.description.slice(0, 100)}...`}</CardDescription>
        <CardAction className="flex mt-2 items-end justify-between">
          <Button onClick={() => addToCart(product.id)}>Add to Cart</Button>
          <Button variant="outline" onClick={() => addToCart(product.id)}>
            <Heart fill="currentColor" className="w-4 h-4 text-red-500" />
          </Button>
        </CardAction>
      </CardContent>
    </Card>
  );
}
