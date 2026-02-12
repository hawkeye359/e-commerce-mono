import { getProductDetailsService } from '@/services/admin/catalogue/get-product-details.service';
import type { AdminProductDetails } from '@/types/admin/catalogue/product';
import { useQuery } from '@tanstack/react-query';

export const useProductDetails = (
  id: string,
  onSuccess?: (response: AdminProductDetails) => void,
) => {
  const {
    data,
    isError: isErrorInFetchingProductDetails,
    error: erorrInFetchingProductDetails,
    isLoading: isFetchingProductDetails,
  } = useQuery({
    queryKey: ['product', 'details', id],
    queryFn: async () => {
      const result = await getProductDetailsService(id);
      if (!result.success) {
        throw result.error;
      }
      try {
        onSuccess && onSuccess(result.data.data);
      } catch (e) {}
      return result.data.data;
    },
  });
  return {
    data,
    isErrorInFetchingProductDetails,
    erorrInFetchingProductDetails,
    isFetchingProductDetails,
  };
};
