import ProductListScreen from '@/features/admin/catalogue/product/screens/product-list';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute(
  '/_authenticated/admin/product/',
)({
  component: RouteComponent,
});

function RouteComponent() {
  return <ProductListScreen />;
}
