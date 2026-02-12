import {
  apiClient,
  type ProblemDetails,
  type ServerProblems,
} from '@/utils/api-client';

type CreateProductServerResponse = {
  id: string;
  title: string;
  description: string;
  rating: number;
  images: string[];
  price: number;
};

export type CreateProductServerPayload = {
  title: string;
  description: string;
  images: string[];
  price: number;
};

interface InvalidParamsProblemDetails extends ProblemDetails<
  typeof ServerProblems.InvalidParams
> {
  errors: {
    message: string;
    path: string;
  }[];
}

type ServiceProblems = InvalidParamsProblemDetails;

export async function createProductService(data: CreateProductServerPayload) {
  const servicePath = '/admin/catalogue/product';
  return await apiClient.post<CreateProductServerResponse, ServiceProblems>(
    servicePath,
    data,
  );
}
