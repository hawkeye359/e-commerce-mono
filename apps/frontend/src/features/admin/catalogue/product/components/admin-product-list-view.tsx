import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';
import { useDeleteProduct } from '../controllers/use-delete-product';

interface ProductListViewProps {
  id: string;
  title: string;
  description: string;
}

export const AdminProductListView = ({
  product,
}: {
  product: ProductListViewProps;
}) => {
  const { deleteProduct, isPending } = useDeleteProduct();

  return (
    <div key={product.id} className="border border-gray-300 rounded p-4 mb-4">
      <h2 className="text-lg font-semibold">{product.title}</h2>
      <p className="text-gray-600">{product.description}</p>
      <Link
        to={`/admin/catalogue/product/update/$productId`}
        params={{ productId: product.id }}
        className="text-blue-500 hover:underline"
      >
        Update product
      </Link>
      <Button
        variant="destructive"
        onClick={() => deleteProduct(product.id)}
        disabled={isPending}
        className="mt-2"
      >
        Delete Product
      </Button>
    </div>
  );
};
