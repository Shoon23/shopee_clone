import { Request, Response } from "express";
import { prisma } from "../services/seed";
import bcrypt from "bcrypt";
import {
  generateRefreshToken,
  generateAccessToken,
} from "../utils/generateToken";
import jwt from "jsonwebtoken";

export const authController = {
  async signup(req: Request, res: Response) {
    const user = req.body;
    const checkUser = await prisma.user.findUnique({
      where: {
        email: user.email,
      },
    });

    if (!checkUser) {
      const hashPassword = await bcrypt.hash(user.password, 10);
      const newUser = await prisma.user.create({
        data: {
          email: user.email,
          first_name: user.first_name,
          last_name: user.last_name,
          password: hashPassword,
        },
      });
      const { password, ...others } = newUser;

      const newCart = await prisma.cart.create({
        data: {
          user_id: newUser.user_id,
        },
      });

      const accessToken = generateAccessToken(others.user_id);
      const refreshToken = generateRefreshToken(others.user_id);

      const userDetail: any = { ...others, accessToken };

      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        sameSite: false,
      });

      return res.status(201).json({ ...userDetail, cart: newCart });
    } else {
      return res.status(200).json({ message: "user exist" });
    }
  },
  async login(req: Request, res: Response) {
    const user = req.body;

    let checkUser: any = await prisma.user.findUnique({
      where: {
        email: user.email,
      },
    });

    if (!checkUser) {
      return res.status(404).json({ error: "not registered yet" });
    }

    const isPassword = bcrypt.compare(user.password, checkUser?.password);

    if (!isPassword) {
      return res.status(403).json({ error: "wrong password" });
    }

    const { password, ...others } = checkUser;

    const cart = await prisma.cart.findUnique({
      where: {
        user_id: checkUser.user_id,
      },
    });

    const accessToken = generateAccessToken(others.user_id);
    const refreshToken = generateRefreshToken(others.user_id);

    checkUser = { ...others, accessToken };

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      sameSite: false,
    });

    res.status(200).json({ ...checkUser, cart });
  },
  async refreshToken(req: Request, res: Response) {
    const refreshToken = req.cookies.refreshToken;

    const privateKey = process.env?.JWT_PRIVATE_KEY as string;

    jwt.verify(refreshToken, privateKey, async (err: any, decoded: any) => {
      if (err) {
        return res.status(403).json(err);
      }

      const user_id = decoded.use_id;

      let user: any = await prisma.user.findUnique({
        where: {
          user_id,
        },
      });

      const cart = await prisma.cart.findUnique({
        where: {
          user_id,
        },
      });

      const { password, ...others } = user;

      const accessToken = generateAccessToken(user_id);
      const refreshToken = generateRefreshToken(user_id);

      user = { ...others, accessToken };

      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        sameSite: false,
      });

      res.status(200).json({ ...user, cart });
    });
  },
};
