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
