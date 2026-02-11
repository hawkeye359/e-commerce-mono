import { prisma } from "@/lib/prisma";
import type { ProductsModel } from "../../../../../generated/prisma/models";
import { Product } from "../../../../domain/catalogue/product";
import type { ProductRepository } from "../../../../domain/catalogue/product.repository";

export class PrismaProductRepository implements ProductRepository {
  fromPrismaToDomainModel(product: ProductsModel): Product {
    return Product.fromPrisma(
      product.id,
      product.title,
      product.description,
      product.rating,
      product.images,
      product.price,
    );
  }

  async findAll(): Promise<Product[]> {
    const products = await prisma.products.findMany();
    return products.map((product) => this.fromPrismaToDomainModel(product));
  }

  async findById(id: string): Promise<Product | null> {
    const product = await prisma.products.findUnique({
      where: {
        id,
      },
    });
    if (!product) {
      return null;
    }
    return this.fromPrismaToDomainModel(product);
  }

  async create(product: Omit<Product, "getId">): Promise<Product> {
    const created = await prisma.products.create({
      data: {
        title: product.getTitle(),
        description: product.getDescription(),
        rating: product.getRating(),
        images: product.getImages(),
        price: product.getPrice(),
      },
    });
    return this.fromPrismaToDomainModel(created);
  }

  async update(product: Product): Promise<Product> {
    const updated = await prisma.products.update({
      where: {
        id: product.getId(),
      },
      data: {
        title: product.getTitle(),
        description: product.getDescription(),
        price: product.getPrice(),
        images: product.getImages(),
      },
    });
    return this.fromPrismaToDomainModel(updated);
  }

  async delete(id: string): Promise<void> {
    await prisma.products.delete({
      where: {
        id,
      },
    });
  }
}
