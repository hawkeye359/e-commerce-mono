import { useProductListController } from '@/features/catalogue/controllers/use-product-catalogue.controller';
import { ProductListingScreen } from '@/features/catalogue/screens/product-listing-screen';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/products/')({
  component: RouteComponent,
});

function RouteComponent() {
  const { isLoading, data, isError, error, addToCart } =
    useProductListController();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return (
      <div>
        Error: {error instanceof Error ? error.message : 'Unknown error'}
      </div>
    );
  }

  return <ProductListingScreen data={data} addToCart={addToCart} />;
}
