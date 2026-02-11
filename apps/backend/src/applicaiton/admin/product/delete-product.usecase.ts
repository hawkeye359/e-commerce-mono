import type { ProductRepository } from "@/domain/catalogue/product.repository";

export class DeleteProductUseCase {
  constructor(private readonly _productRespository: ProductRepository) {}

  async handle(id: string): Promise<void> {
    return await this._productRespository.delete(id);
  }
}
