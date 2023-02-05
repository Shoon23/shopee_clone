import { Router } from "express";
import { cartController } from "../controller/cartController";

const routes = Router();

routes.get("/:id", cartController.getCart);
routes.post("/add", cartController.addCartItem);
routes.delete("/delete", cartController.deleteCartItem);
routes.put("/update", cartController.updateCartItem);

export default routes;
