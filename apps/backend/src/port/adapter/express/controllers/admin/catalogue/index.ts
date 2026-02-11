import { Router } from "express";
import { productController } from "./product.controller";

export const catalogueController: Router = Router();

catalogueController.use("/product", productController);
