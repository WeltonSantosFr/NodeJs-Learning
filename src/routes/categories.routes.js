import { Router } from "express";
import createCategoryController from "../controllers/createCategory.controller";
import deleteCategoryController from "../controllers/deleteCategory.controller";
import listCategoriesController from "../controllers/listCategories.controller";
import listCategoryController from "../controllers/listCategory.controller";
import updateCategoryController from "../controllers/updateCategory.controller";

const categoriesRouter = Router();

categoriesRouter.get("", listCategoriesController);
categoriesRouter.post("", createCategoryController);
categoriesRouter.get("/:id", listCategoryController);
categoriesRouter.patch("/:id", updateCategoryController);
categoriesRouter.delete("/:id", deleteCategoryController);

export default categoriesRouter;
