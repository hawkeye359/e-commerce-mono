import { CreateProductScreen } from '@/features/admin/catalogue/product/screens/create-product'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_authenticated/admin/catalogue/product/create/',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <CreateProductScreen />
}
