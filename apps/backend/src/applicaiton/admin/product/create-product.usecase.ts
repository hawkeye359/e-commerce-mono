import { ValidationError } from "@/applicaiton/exceptions/validation-error";
import { Product } from "@/domain/catalogue/product";
import type { ProductRepository } from "@/domain/catalogue/product.repository";
import { zodPathToJsonPointer } from "@/domain/common/utils";
import z from "zod";

export const createProductSchema = z.object({
  title: z.string(),
  description: z.string(),
  images: z.array(z.string()),
  price: z.number(),
});

export type CreateProductUseCaseInputDto = z.infer<typeof createProductSchema>;

export class CreateProductUseCase {
  constructor(private readonly _productRespository: ProductRepository) {}

  async handle(input: CreateProductUseCaseInputDto): Promise<Product> {
    const parsedResult = createProductSchema.safeParse(input);
    if (!parsedResult.success) {
      throw new ValidationError(
        "Invalid input for create product",
        parsedResult.error.issues.map((issue) => {
          return {
            message: issue.message,
            path: zodPathToJsonPointer(issue.path),
          };
        }),
      );
    }

    const product = Product.create(
      input.title,
      input.description,
      input.images,
      input.price,
    );

    const saveResult = await this._productRespository.create(product);

    return saveResult;
  }
}
