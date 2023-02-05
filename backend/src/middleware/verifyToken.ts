import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const accessToken = req.headers.authorization as string;
  const publicKey = process.env?.JWT_PUBLIC_KEY as string;

  jwt.verify(accessToken, publicKey, (err: any, decoded: any) => {
    if (err) {
      return res.status(403).json({ message: "acces token missing" });
    }
    next();
  });
};
