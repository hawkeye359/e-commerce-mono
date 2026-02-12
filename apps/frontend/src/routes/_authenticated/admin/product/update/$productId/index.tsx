import { UpdateProductScreen } from '@/features/admin/catalogue/product/components/update-product-form';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute(
  '/_authenticated/admin/product/update/$productId/',
)({
  component: RouteComponent,
});

function RouteComponent() {
  const id = Route.useParams().productId;
  return <UpdateProductScreen id={id} />;
}
