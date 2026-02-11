import { Router } from "express";
import { adminController } from "./admin";
import { catalogueController } from "./catalogue";

export const rootController: Router = Router();

rootController.use("/admin", adminController);

rootController.use("/catalogue", catalogueController);
