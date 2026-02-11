import { apiClient } from '@/utils/api-client';

export async function deleteProductService(id: string) {
  const servicePath = '/admin/catalogue/product/' + id;
  return await apiClient.delete(servicePath);
}
