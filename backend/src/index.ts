import express from "express";
import { authRoutes, cartRoutes, productRoutes, sellerRoutes } from "./routes";
import { verifyToken } from "./middleware/verifyToken";
import cors from "cors";
import * as dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();

const PORT = 8080;
const app = express();

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);
app.use(cookieParser());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/products", productRoutes);

app.use(verifyToken);
app.use("/cart", cartRoutes);
app.use("/seller", sellerRoutes);

app.listen(PORT, () => {
  console.log("runnng");
});
