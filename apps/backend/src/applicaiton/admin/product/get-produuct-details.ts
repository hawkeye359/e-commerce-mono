import { InternalServerError } from "@/applicaiton/exceptions/internal-server-error";
import { RecordNotFoundException } from "@/applicaiton/exceptions/record-not-found-error";
import type { Product } from "@/domain/catalogue/product";
import type { PrismaProductRepository } from "@/infrastructure/repositories/prisma/models/product";
import z from "zod";

export const getProductDetailsOutputSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  rating: z.string().nullable(),
  images: z.array(z.string()),
  price: z.number(),
});

export type GetProductDetailsUseCaseOutputType = z.infer<
  typeof getProductDetailsOutputSchema
>;

export class GetProductDetailsUsecase {
  constructor(private readonly _productRepository: PrismaProductRepository) {}

  async handle(id: string): Promise<GetProductDetailsUseCaseOutputType> {
    const result = await this._productRepository.findById(id);

    if (!result) {
      throw new RecordNotFoundException(`No product with product id ${id}`);
    }
    return this.domainToDto(result);
  }

  domainToDto(product: Product): GetProductDetailsUseCaseOutputType {
    const output = getProductDetailsOutputSchema.safeParse(product);
    if (!output.success) {
      throw new InternalServerError("output validation failed");
    } else return output.data;
  }
}
