import { Router } from "express";
import { authController } from "../controller/authController";

const routes = Router();

routes.post("/login", authController.login);
routes.post("/signup", authController.signup);

export default routes;
