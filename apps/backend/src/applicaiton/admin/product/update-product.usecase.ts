import { RecordNotFoundException } from "@/applicaiton/exceptions/record-not-found-error";
import { ValidationError } from "@/applicaiton/exceptions/validation-error";
import { Product } from "@/domain/catalogue/product";
import type { ProductRepository } from "@/domain/catalogue/product.repository";
import { zodPathToJsonPointer } from "@/domain/common/utils";
import z from "zod";

export const updateProductSchema = z.object({
  title: z.string(),
  description: z.string(),
  images: z.array(z.string()),
  price: z.number(),
});

export type UpdateProductUseCaseInputDto = z.infer<typeof updateProductSchema>;

export class UpdateProductProductUseCase {
  constructor(private readonly _productRespository: ProductRepository) {}

  async handle(
    id: string,
    input: UpdateProductUseCaseInputDto,
  ): Promise<Product> {
    const parsedResult = updateProductSchema.safeParse(input);
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

    const product = await this._productRespository.findById(id);

    if (!product) {
      throw new RecordNotFoundException(`No product with product id ${id}`);
    }

    product.updateProductData(
      input.title,
      input.description,
      input.images,
      input.price,
    );

    const saveResult = await this._productRespository.update(product);

    return saveResult;
  }
}
