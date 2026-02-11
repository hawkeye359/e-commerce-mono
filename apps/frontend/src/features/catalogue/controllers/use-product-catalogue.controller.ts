import { getProductListService } from '@/services/catalogue/get-product-list.service';
import { useQuery } from '@tanstack/react-query';
import { useCallback } from 'react';

export interface ProductListView {
  id: string;
  rating: number;
  images: string[];
  title: string;
  price: number;
  description: string;
}

export const useProductListController = () => {
  const { data, isError, error, isLoading } = useQuery({
    queryKey: ['product', 'list'],
    queryFn: async function productListQueryFn(): Promise<ProductListView[]> {
      const result = await getProductListService();

      if (!result.success) {
        throw result.error;
      }
      return result.data.data;
    },
  });

  const addToCart = useCallback((id: string) => {
    // Code for add to cart
  }, []);

  return {
    data,
    isError,
    error,
    isLoading,
    addToCart,
  };
};
