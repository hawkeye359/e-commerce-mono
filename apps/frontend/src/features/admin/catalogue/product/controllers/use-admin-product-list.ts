import { getProductListService } from '@/services/admin/catalogue/get-product-list.service';
import type { AdminProductListView } from '@/types/admin/catalogue/product';

import { useQuery } from '@tanstack/react-query';

export const useAdminProductList = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryFn: async function productListQueryFn(): Promise<
      AdminProductListView[]
    > {
      const result = await getProductListService();
      if (!result.success) {
        throw result.error;
      } else {
        return result.data.data;
      }
    },
    queryKey: ['admin', 'product', 'list'],
  });
  return {
    isLoading,
    data,
    isError,
    error,
  };
};
