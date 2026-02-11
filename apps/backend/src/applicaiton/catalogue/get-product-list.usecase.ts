import { InternalServerError } from "@/applicaiton/exceptions/internal-server-error";
import type { Product } from "@/domain/catalogue/product";
import type { PrismaProductRepository } from "@/infrastructure/repositories/prisma/models/product";
import z from "zod";

export const getProductListOutputSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  rating: z.string().nullable(),
  images: z.array(z.string()),
  price: z.number(),
});

export type GetProductListUseCaseOutputType = z.infer<
  typeof getProductListOutputSchema
>;

export class GetProductListUsecase {
  constructor(private readonly _productRepository: PrismaProductRepository) {}

  async handle(): Promise<GetProductListUseCaseOutputType[]> {
    const result = await this._productRepository.findAll();
    const outputValid = result.reduce(
      (acc, product) =>
        getProductListOutputSchema.safeParse(product).success && acc,
      true,
    );

    return this.domainToDto(result);
  }

  domainToDto(products: Product[]): GetProductListUseCaseOutputType[] {
    return products.map((product) => {
      const output = getProductListOutputSchema.safeParse(product);
      if (!output.success) {
        throw new InternalServerError("output validation failed");
      } else return output.data;
    });
  }
}
