import { Router } from "express";
import { productController } from "../controller/productController";
import { verifyToken } from "../middleware/verifyToken";
const routes = Router();

routes.get("/", productController.getAll);
routes.get("/:id", productController.getSingle);

routes.use(verifyToken);
routes.post("/add", productController.addProduct);
routes.put("/update", productController.updateProduct);
routes.delete("/delete", productController.deleteProduct);

export default routes;
