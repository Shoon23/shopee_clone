import { Router } from "express";
import { cartController } from "../controller/cartController";

const routes = Router();

routes.get("/:id", cartController.cartItems);

export default routes;
