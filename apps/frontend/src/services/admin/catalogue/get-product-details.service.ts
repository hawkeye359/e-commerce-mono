import { apiClient, type ProblemDetails } from '@/utils/api-client';

type GetProductDetailsResponse = {
  id: string;
  title: string;
  description: string;
  rating: number;
  images: string[];
  price: number;
};

export async function getProductDetailsService(id: string) {
  const servicePath = '/admin/catalogue/product/' + id;
  return await apiClient.get<GetProductDetailsResponse, ProblemDetails>(
    servicePath,
  );
}
