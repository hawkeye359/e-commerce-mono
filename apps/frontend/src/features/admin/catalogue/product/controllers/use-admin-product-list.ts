import { getProductListService } from '@/services/admin/catalogue/get-product-list.service';
import { useQuery, useQueryClient } from '@tanstack/react-query';

type ProductListView = {
  id: string;
  title: string;
  description: string;
  rating: number;
  images: string[];
  price: number;
};

export const useAdminProductList = () => {
  const queryClient = useQueryClient();

  const { isLoading, data, isError, error } = useQuery({
    queryFn: async function productListQueryFn(): Promise<ProductListView[]> {
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
