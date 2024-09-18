import { Router } from "express";
import { getAllCategories, getSingleCategory } from "../controllers/category.controller";

const categoryRouter = Router();

categoryRouter.get("/", getAllCategories);
categoryRouter.get("/:categoryId", getSingleCategory);

export default categoryRouter;