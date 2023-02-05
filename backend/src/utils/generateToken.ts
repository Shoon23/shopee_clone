import jwt from "jsonwebtoken";

const privateKey = process.env?.JWT_PRIVATE_KEY as string;
const publicKey = process.env?.JWT_PUBLIC_KEY as string;

export const generateAccessToken = (use_id: string) => {
  return jwt.sign({ use_id }, publicKey, {
    expiresIn: "1d",
  });
};

export const generateRefreshToken = (use_id: string) => {
  return jwt.sign({ use_id }, privateKey, {
    expiresIn: "1d",
  });
};
