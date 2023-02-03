import { Request, Response } from "express";
import { prisma } from "../services/seed";
import bcrypt from "bcrypt";

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
      console.log(hashPassword);
      const newUser = await prisma.user.create({
        data: {
          email: user.email,
          first_name: user.first_name,
          last_name: user.last_name,
          password: hashPassword,
        },
      });
      const { password, ...others } = newUser;

      return res.status(201).json(others);
    } else {
      return res.status(200).json({ message: "user exist" });
    }
  },
  async login(req: Request, res: Response) {
    const user = req.body;

    const checkUser: any = await prisma.user.findUnique({
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

    res.status(200).json(others);
  },
};