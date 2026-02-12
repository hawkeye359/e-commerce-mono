import { Button } from '@/components/ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import type { ProductListingView } from '@/types/catalogue/product';
import { Heart } from 'lucide-react';

export default function ProductItem({
  product,
  addToCart,
}: {
  product: ProductListingView;
  addToCart: (id: string) => void;
}) {
  return (
    <Card className="flex-1 justify-between" key={product.id}>
      <Carousel>
        <CarouselContent className="relative">
          {product.images.map((image, index) => (
            <CarouselItem>
              <img
                key={index}
                src={image}
                alt={`${product.title} - Image ${index + 1}`}
                className="w-full h-48 object-contain rounded-t-md bg-black"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious></CarouselPrevious>
        <CarouselNext></CarouselNext>
      </Carousel>
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
