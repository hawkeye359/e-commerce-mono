import {
  apiClient,
  type ProblemDetails,
  type ServerProblems,
} from '@/utils/api-client';

type UpdateProductServerResponse = {
  id: string;
  title: string;
  description: string;
  rating: number;
  images: string[];
  price: number;
};

export type UpdateProductServerPayload = {
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

export async function updateProductService(
  id: string,
  data: UpdateProductServerPayload,
) {
  const servicePath = '/admin/catalogue/product/' + id;
  return await apiClient.put<UpdateProductServerResponse, ServiceProblems>(
    servicePath,
    data,
  );
}
