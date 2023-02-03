import express from "express";
import { authRoutes } from "./routes";
import cors from "cors";
const PORT = 8080;
const app = express();

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);
app.use(express.json());
app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log("runnng");
});
