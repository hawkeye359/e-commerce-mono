import { apiClient, type ProblemDetails } from '@/utils/api-client';

type ProductListServerResponse = {
  id: string;
  title: string;
  description: string;
  rating: number;
  images: string[];
  price: number;
};

export async function getProductListService() {
  const servicePath = '/catalogue/product';
  return await apiClient.get<ProductListServerResponse[], ProblemDetails>(
    servicePath,
  );
}
