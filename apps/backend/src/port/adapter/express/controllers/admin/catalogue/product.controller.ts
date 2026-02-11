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
