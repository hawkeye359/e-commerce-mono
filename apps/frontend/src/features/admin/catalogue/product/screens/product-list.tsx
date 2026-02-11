import { AdminProductListView } from '../components/admin-product-list-view';
import { useAdminProductList } from '../controllers/use-admin-product-list';

export const ProductListScreen = () => {
  const { isLoading, data, isError, error } = useAdminProductList();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-svh">
        <div className="w-full max-w-md my-20">
          <h1 className="text-2xl font-bold mb-4">Loading...</h1>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center min-h-svh">
        <div className="w-full max-w-md my-20">
          <h1 className="text-2xl font-bold mb-4">Error: {error?.message}</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-svh">
      <div className="w-full max-w-md my-20">
        <h1 className="text-2xl font-bold mb-4">Product List</h1>
        {data?.map((product) => (
          <AdminProductListView product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductListScreen;
