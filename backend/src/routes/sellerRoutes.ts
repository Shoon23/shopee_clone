import { Router } from "express";
import { sellerController } from "../controller/sellerController";
const routes = Router();

routes.post("/create_shop", sellerController.createShop);
routes.get("/is_seller/:user_id", sellerController.isSeller);
routes.get("/products/:shop_id", sellerController.getProducts);

export default routes;
