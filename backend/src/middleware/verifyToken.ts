import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const bearerToken = req.headers.authorization;
  const publicKey = process.env?.JWT_PUBLIC_KEY as string;
  const accessToken = bearerToken?.split(" ")[1] as string;

  jwt.verify(accessToken, publicKey, (err: any, decoded: any) => {
    if (err) {
      return res.status(403).json(err);
    }
    next();
  });
};
