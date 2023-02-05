import { Router } from "express";
import { authController } from "../controller/authController";

const routes = Router();

routes.post("/login", authController.login);
routes.post("/signup", authController.signup);
routes.get("/refresh_token", authController.refreshToken);

export default routes;
