import z from "zod";

export const productSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  rating: z.number().nullable(),
  images: z.array(z.string()),
  price: z.number(),
});

export class Product {
  private constructor(
    private id: string,
    private title: string,
    private description: string,
    private rating: number | null,
    private images: string[],
    private price: number,
  ) {}

  public static create(
    title: string,
    description: string,
    images: string[],
    price: number,
  ) {
    const parsed = productSchema.safeParse({
      id: "",
      title,
      description,
      rating: null,
      images,
      price,
    });

    if (!parsed.success) {
      console.log(parsed.error?.issues);
      throw new Error("Invalid product data");
    }

    return new Product("", title, description, null, images, price);
  }

  public static fromPrisma(
    id: string,
    title: string,
    description: string,
    rating: number | null,
    images: string[],
    price: number,
  ): Product {
    return new Product(id, title, description, rating, images, price);
  }

  updateProductData(
    title: string,
    description: string,
    images: string[],
    price: number,
  ) {
    this.title = title;
    this.description = description;
    this.images = images;
    this.price = price;
  }

  getId() {
    return this.id;
  }
  getTitle() {
    return this.title;
  }
  getDescription() {
    return this.description;
  }
  getRating() {
    return this.rating;
  }
  getImages() {
    return this.images;
  }
  getPrice() {
    return this.price;
  }
}
