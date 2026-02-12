import { getProductListService } from '@/services/catalogue/get-product-list.service';
import type { ProductListingView } from '@/types/catalogue/product';
import { useQuery } from '@tanstack/react-query';

export const useProductListController = () => {
  const { data, isError, error, isLoading } = useQuery({
    queryKey: ['product', 'list'],
    queryFn: async function productListQueryFn(): Promise<
      ProductListingView[]
    > {
      const result = await getProductListService();

      if (!result.success) {
        throw result.error;
      }
      return result.data.data;
    },
  });

  return {
    data,
    isError,
    error,
    isLoading,
  };
};
