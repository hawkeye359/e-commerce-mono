import { UpdateProductScreen } from '@/features/admin/catalogue/product/screens/update-product';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute(
  '/_authenticated/admin/catalogue/product/update/$productId/',
)({
  component: RouteComponent,
});

function RouteComponent() {
  const id = Route.useParams().productId;
  return <UpdateProductScreen id={id} />;
}
