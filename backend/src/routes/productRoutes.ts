import { Router } from "express";
import multer from "multer";
import { productController } from "../controller/productController";
import { verifyToken } from "../middleware/verifyToken";

const routes = Router();

const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, "uploads");
  },
  filename(req, file, callback) {
    callback(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

routes.get("/", productController.getAll);
routes.get("/:id", productController.getSingle);

routes.use(verifyToken);
routes.post("/add", upload.array("images"), productController.addProduct);
routes.put(
  "/update",
  upload.array("new_images"),
  productController.updateProduct
);
routes.delete("/delete", productController.deleteProduct);

export default routes;
