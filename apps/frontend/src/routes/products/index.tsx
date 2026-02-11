import ProductItem from '@/features/catalogue/components/product-item'
import { useProductListController } from '@/features/catalogue/controllers/use-product-catalogue.controller'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/products/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { isLoading, data, isError, error, addToCart } =
    useProductListController()
  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return (
      <div>
        Error: {error instanceof Error ? error.message : 'Unknown error'}
      </div>
    )
  }

  return (
    <div>
      <h2>Product Catalogue</h2>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-4">
        {data?.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  )
}
