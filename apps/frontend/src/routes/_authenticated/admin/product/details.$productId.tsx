import { ProductDetails } from '@/features/admin/catalogue/product/screens/product-details';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute(
  '/_authenticated/admin/product/details/$productId',
)({
  component: RouteComponent,
});

function RouteComponent() {
  const productId = Route.useParams().productId;
  return <ProductDetails productId={productId} />;
}
