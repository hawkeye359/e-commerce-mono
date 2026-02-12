import type { ProductListingView } from '@/types/catalogue/product';
import ProductItem from '../components/product-item';

export interface IProps {
  data?: ProductListingView[];
  addToCart: (productId: string) => void;
}

export const ProductListingScreen = ({ data, addToCart }: IProps) => {
  return (
    <div className="p-4">
      <h2>Product Catalogue</h2>
      <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data?.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};
