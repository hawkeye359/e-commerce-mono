This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
prisma/
  schema.prisma
src/
  applicaiton/
    admin/
      product/
        create-product.usecase.ts
        get-product-list.usecase.ts
        get-produuct-details.ts
        update-product.usecase.ts
    catalogue/
      get-product-list.usecase.ts
    exceptions/
      application-error.ts
      internal-server-error.ts
      record-not-found-error.ts
      validation-error.ts
  domain/
    catalogue/
      product.repository.ts
      product.ts
    common/
      assertion-concern.ts
      utils.ts
    exceptions/
      invalid-params.exception.ts
  infrastructure/
    repositories/
      prisma/
        models/
          product.ts
  lib/
    prisma.ts
  port/
    adapter/
      express/
        controllers/
          admin/
            catalogue/
              index.ts
              product.controller.ts
            index.ts
          catalogue/
            index.ts
            product.controller.ts
          index.ts
        index.ts
        uploadthing.ts
.gitignore
.nvmrc
.prettierrc
env.ts
nodemon.json
package.json
prisma.config.ts
temp.ts
tsconfig.json
```

# Files

## File: prisma/schema.prisma
```prisma
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?
// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init

generator client {
  provider = "prisma-client"
  output   = "../generated/prisma"
}

datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}

model Products {
  id          String   @id @default(auto()) @map("_id") @db.ObjectId
  title       String
  description String
  rating      Float?
  images      String[]
  price       Float
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

## File: src/applicaiton/admin/product/create-product.usecase.ts
```typescript
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
```

## File: src/applicaiton/admin/product/get-product-list.usecase.ts
```typescript
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
```

## File: src/applicaiton/admin/product/get-produuct-details.ts
```typescript
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
```

## File: src/applicaiton/admin/product/update-product.usecase.ts
```typescript
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
```

## File: src/applicaiton/catalogue/get-product-list.usecase.ts
```typescript
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
```

## File: src/applicaiton/exceptions/application-error.ts
```typescript
export class ApplicationError extends Error {
  readonly occuredOn: Date;
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
    Object.setPrototypeOf(this, this.constructor.prototype);
    this.occuredOn = new Date();
  }
}
```

## File: src/applicaiton/exceptions/internal-server-error.ts
```typescript
import { ApplicationError } from "./application-error";

export class InternalServerError extends ApplicationError {
  constructor(message: string) {
    super(message);
  }
}
```

## File: src/applicaiton/exceptions/record-not-found-error.ts
```typescript
import { ApplicationError } from "./application-error";

export class RecordNotFoundException extends ApplicationError {
  constructor(message: string) {
    super(message);
  }
}
```

## File: src/applicaiton/exceptions/validation-error.ts
```typescript
import { ApplicationError } from "./application-error";

interface ValidatioErrorSchema {
  message: string;
  path: string;
}

export class ValidationError extends ApplicationError {
  errors: ValidatioErrorSchema[];
  constructor(message: string, errors: ValidatioErrorSchema[]) {
    super(message);
    this.errors = errors;
  }
}
```

## File: src/domain/catalogue/product.repository.ts
```typescript
import type { Product } from "./product";

export interface ProductRepository {
  findAll(): Promise<Product[]>;
  findById(id: string): Promise<Product | null>;
  create(product: Omit<Product, "getId">): Promise<Product>;
  update(product: Product): Promise<Product>;
}
```

## File: src/domain/catalogue/product.ts
```typescript
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
```

## File: src/domain/common/assertion-concern.ts
```typescript
export class AssertionConcern {
  assertArgumentNotEmpty(aString: string, aMessage: string) {}
}
```

## File: src/domain/common/utils.ts
```typescript
export function zodPathToJsonPointer(zodPath: PropertyKey[]) {
  return (
    "/" +
    zodPath
      .map((part) => part.toString().replace(/~/g, "~0").replace(/\//g, "~1"))
      .join("/")
  );
}
```

## File: src/domain/exceptions/invalid-params.exception.ts
```typescript
interface errorType {
  message: string;
  path: string;
}

export class InvalidParamsException extends Error {
  constructor(message: string) {
    super(message);
    this.name = "InvalidParamsException";
  }
}
```

## File: src/infrastructure/repositories/prisma/models/product.ts
```typescript
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
}
```

## File: src/lib/prisma.ts
```typescript
import { PrismaClient } from "../../generated/prisma/client";

export const prisma = new PrismaClient();
```

## File: src/port/adapter/express/controllers/admin/catalogue/index.ts
```typescript
import { Router } from "express";
import { productController } from "./product.controller";

export const catalogueController: Router = Router();

catalogueController.use("/product", productController);
```

## File: src/port/adapter/express/controllers/admin/catalogue/product.controller.ts
```typescript
import { CreateProductUseCase } from "@/applicaiton/admin/product/create-product.usecase";
import { GetProductListUsecase } from "@/applicaiton/admin/product/get-product-list.usecase";
import { GetProductDetailsUsecase } from "@/applicaiton/admin/product/get-produuct-details";
import { UpdateProductProductUseCase } from "@/applicaiton/admin/product/update-product.usecase";
import { PrismaProductRepository } from "@/infrastructure/repositories/prisma/models/product";
import { Router } from "express";

export const productController: Router = Router();

const repo = new PrismaProductRepository();

productController.get("/", async (req, res, next) => {
  try {
    const repo = new PrismaProductRepository();
    const useCase = new GetProductListUsecase(repo);
    const response = await useCase.handle();
    return res.json({ success: true, data: response });
  } catch (e) {
    next(e);
  }
});

productController.get("/:id", async (req, res, next) => {
  try {
    const useCase = new GetProductDetailsUsecase(repo);
    const response = await useCase.handle(req.params.id);
    res.json({ success: true, data: response });
  } catch (e) {
    next(e);
  }
});

productController.post("/", async (req, res, next) => {
  try {
    const useCase = new CreateProductUseCase(repo);
    const response = await useCase.handle(req.body);
    res.json({ success: true, data: response });
  } catch (e) {
    next(e);
  }
});

productController.put("/:id", async (req, res, next) => {
  try {
    const useCase = new UpdateProductProductUseCase(repo);
    const response = await useCase.handle(req.params.id, req.body);
    res.json({ success: true, data: response });
  } catch (e) {
    next(e);
  }
});
```

## File: src/port/adapter/express/controllers/admin/index.ts
```typescript
import { Router } from "express";
import { catalogueController } from "./catalogue";

export const adminController: Router = Router();

adminController.use("/catalogue", catalogueController);
```

## File: src/port/adapter/express/controllers/catalogue/index.ts
```typescript
import { Router } from "express";
import { productController } from "./product.controller";

export const catalogueController: Router = Router();

catalogueController.use("/product", productController);
```

## File: src/port/adapter/express/controllers/catalogue/product.controller.ts
```typescript
import { GetProductListUsecase } from "@/applicaiton/catalogue/get-product-list.usecase";
import { PrismaProductRepository } from "@/infrastructure/repositories/prisma/models/product";
import { Router } from "express";

export const productController: Router = Router();

productController.get("/", async (req, res, next) => {
  try {
    const repo = new PrismaProductRepository();
    const useCase = new GetProductListUsecase(repo);
    const response = await useCase.handle();
    return res.json({ success: true, data: response });
  } catch (e) {
    next(e);
  }
});
```

## File: src/port/adapter/express/controllers/index.ts
```typescript
import { Router } from "express";
import { adminController } from "./admin";
import { catalogueController } from "./catalogue";

export const rootController: Router = Router();

rootController.use("/admin", adminController);

rootController.use("/catalogue", catalogueController);
```

## File: src/port/adapter/express/index.ts
```typescript
import { ValidationError } from "@/applicaiton/exceptions/validation-error";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import morgan from "morgan";
import { createRouteHandler } from "uploadthing/express";
import { rootController } from "./controllers";
import { uploadRouter } from "./uploadthing";

const app = express();

app.use(cors());
app.use(morgan("tiny"));

app.use(bodyParser.json());

function errorHandler(err: any, req: any, res: any, next: any) {
  console.log(err);

  if (res.headersSent) {
    return next(err);
  }

  res.status(500);
  if (err instanceof ValidationError) {
    return res.json({
      type: "https://example.com/probs/invalid-params",
      title: "Invalid params",
      status: 0,
      detail: err.message,
      instance: req.path,
      errors: err.errors,
    });
  }
  res.json({ err });
}

app.use("/v1", rootController);

app.use(
  "/v1/uploadthing",
  createRouteHandler({
    router: uploadRouter,
  }),
);

app.use(errorHandler);

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
```

## File: src/port/adapter/express/uploadthing.ts
```typescript
import { createUploadthing, type FileRouter } from "uploadthing/express";

const f = createUploadthing();

export const uploadRouter: FileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug

  imageUploader: f({
    image: {
      /**
       * For full list of options and defaults, see the File Route API reference
       * @see https://docs.uploadthing.com/file-routes#route-config
       */

      maxFileSize: "16MB",
      maxFileCount: 1,
    },
  }).onUploadComplete((data) => {}),
} satisfies FileRouter;

export type OurFileRouter = typeof uploadRouter;
```

## File: .gitignore
```
node_modules
# Keep environment variables out of version control
.env

/generated/prisma

/generated/prisma
```

## File: .nvmrc
```
v25.0.0
```

## File: .prettierrc
```
{}
```

## File: env.ts
```typescript
import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  server: {
    DATABASE_URL: z.string(),
    UPLOADTHING_TOKEN: z.string(),
  },
  runtimeEnv: process.env,
  /**
   * By default, this library will feed the environment variables directly to
   * the Zod validator.
   *
   * This means that if you have an empty string for a value that is supposed
   * to be a number (e.g. `PORT=` in a ".env" file), Zod will incorrectly flag
   * it as a type mismatch violation. Additionally, if you have an empty string
   * for a value that is supposed to be a string with a default value (e.g.
   * `DOMAIN=` in an ".env" file), the default value will never be applied.
   *
   * In order to solve these issues, we recommend that all new projects
   * explicitly specify this option as true.
   */
  emptyStringAsUndefined: true,
});
```

## File: nodemon.json
```json
{
  "watch": ["src"],
  "ext": "ts,js,json",
  "exec": "tsx src/port/adapter/express/index.ts"
}
```

## File: package.json
```json
{
  "name": "full-stack-backend",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "loadenv": "dotenvx run -f .env",
    "dev": "pnpm run loadenv -- nodemon",
    "test": "echo \"Error: no test specified\" && exit 1",
    "prisma:generate": "pnpm run loadenv -- prisma generate",
    "prisma:push": "pnpm run loadenv -- prisma db push",
    "prisma:migrate": "pnpm run loadenv -- prisma db migrate"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "packageManager": "pnpm@10.15.1",
  "dependencies": {
    "@dotenvx/dotenvx": "^1.52.0",
    "@prisma/client": "~6.19.2",
    "@t3-oss/env-core": "^0.13.10",
    "@types/body-parser": "^1.19.6",
    "@types/morgan": "^1.9.10",
    "body-parser": "^2.2.2",
    "cors": "^2.8.6",
    "express": "^5.2.1",
    "morgan": "^1.10.1",
    "uploadthing": "^7.7.4",
    "zod": "^4.3.6"
  },
  "devDependencies": {
    "@types/cors": "^2.8.19",
    "@types/express": "^5.0.6",
    "@types/node": "^25.2.2",
    "nodemon": "^3.1.11",
    "prisma": "~6.19.2",
    "tsx": "^4.21.0"
  }
}
```

## File: prisma.config.ts
```typescript
import { defineConfig } from "prisma/config";
import { env } from "./env";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: env.DATABASE_URL,
  },
});
```

## File: temp.ts
```typescript
import z from "zod";

const schema = z.object({
  obj: z.object(
    {
      a: z.string(),
      b: z.number(),
    },
    "Invalid object",
  ),
  arr: z.array(
    z.object(
      {
        c: z.string(),
        d: z.number(),
      },
      "Invalid array item",
    ),
  ),
});

const okay = {
  arr: [
    {
      c: undefined,
      d: undefined,
    },
  ],
};

const errors = schema.safeParse(okay).error;

console.log(errors?.issues);
```

## File: tsconfig.json
```json
{
  // Visit https://aka.ms/tsconfig to read more about this file
  "compilerOptions": {
    // File Layout
    // "rootDir": "./src",
    // "outDir": "./dist",

    // Environment Settings
    // See also https://aka.ms/tsconfig/module
    "module": "esnext",
    "target": "es2023",
    "moduleResolution": "bundler",
    "types": [],
    // For nodejs:
    // "lib": ["esnext"],
    // "types": ["node"],
    // and npm install -D @types/node

    // Other Outputs
    "sourceMap": true,
    "declaration": true,
    "declarationMap": true,

    // Stricter Typechecking Options
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,

    "esModuleInterop": true,
    "ignoreDeprecations": "6.0",
    // Style Options
    // "noImplicitReturns": true,
    // "noImplicitOverride": true,
    // "noUnusedLocals": true,
    // "noUnusedParameters": true,
    // "noFallthroughCasesInSwitch": true,
    // "noPropertyAccessFromIndexSignature": true,

    // Recommended Options
    "strict": true,
    "jsx": "react-jsx",
    "verbatimModuleSyntax": true,
    "isolatedModules": true,
    "noUncheckedSideEffectImports": true,
    "moduleDetection": "force",
    "skipLibCheck": true,
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```
