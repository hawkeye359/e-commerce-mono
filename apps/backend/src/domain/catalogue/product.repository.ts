import type { Product } from "./product";

export interface ProductRepository {
  findAll(): Promise<Product[]>;
  findById(id: string): Promise<Product | null>;
  create(product: Omit<Product, "getId">): Promise<Product>;
  update(product: Product): Promise<Product>;
}
