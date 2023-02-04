import { Request, Response } from "express";
import { prisma } from "../services/seed";

export const cartController = {
  async cartItems(req: Request, res: Response) {
    const cart_id = req.params.id;

    const cart = await prisma.cart.findUnique({
      where: {
        cart_id,
      },
    });

    res.status(200).json(cart);
  },
};
