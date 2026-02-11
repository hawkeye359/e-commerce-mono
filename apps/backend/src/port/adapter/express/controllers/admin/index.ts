import { Router } from "express";
import { catalogueController } from "./catalogue";

export const adminController: Router = Router();

adminController.use("/catalogue", catalogueController);
