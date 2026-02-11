import { deleteProductService } from '@/services/admin/catalogue/delete-product.service';
import { queryClient } from '@/utils/query-client';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

export const useDeleteProduct = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: async (id: string) => {
      const result = await deleteProductService(id);
      if (!result.success) {
        throw result.error;
      }
      queryClient.invalidateQueries({
        queryKey: ['admin', 'product', 'list'],
      });
      queryClient.invalidateQueries({
        queryKey: ['product', 'list'],
      });
      return result.data.data;
    },
    onSuccess: () => {
      toast.success('Product deleted successfully');
    },
    onError(error) {
      toast.error(error.message);
    },
  });
  return {
    deleteProduct: mutate,
    isPending,
  };
};
