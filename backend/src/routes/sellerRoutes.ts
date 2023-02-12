import { Router } from "express";
import { sellerController } from "../controller/sellerController";
const routes = Router();

routes.post("/create_shop", sellerController.createShop);
routes.post("/is_seller", sellerController.isSeller);

export default routes;
