import { Request, Response } from "express";
import { prisma } from "../services/seed";

export const cartController = {
  async getCart(req: Request, res: Response) {
    const cartId = req.params.id;

    const cart: any = await prisma.cart.findUnique({
      where: {
        cart_id: cartId,
      },
      include: {
        cart_item: true,
      },
    });

    const { cart_item, ...other } = cart;

    const productId = cart_item.map((item: any) => {
      return prisma.product.findFirst({
        where: {
          product_id: item.product_id,
        },
      });
    });

    const products = await Promise.all(productId);

    res.status(200).json({ ...other, cart_item: products });
  },
  async addCartItem(req: Request, res: Response) {
    const cartItem = req.body;

    const newCartItem = await prisma.cart_item.create({
      data: {
        quantity: cartItem.quantity,
        total_price: cartItem.total_price,
        cart_id: cartItem.cart_id,
        product_id: cartItem.product_id,
      },
    });

    res.status(201).json(newCartItem);
  },
  async deleteCartItem(req: Request, res: Response) {
    const cartItemId = req.body.cart_item_id;

    const deleteCartItem = await prisma.cart_item.delete({
      where: {
        cart_item_id: cartItemId,
      },
    });

    res.status(200).json(deleteCartItem);
  },
  async updateCartItem(req: Request, res: Response) {
    const cartItem = req.body;

    const updateCartItem = await prisma.cart_item.update({
      where: {
        cart_item_id: cartItem.cart_item_id,
      },
      data: cartItem,
    });
    res.status(200).json(updateCartItem);
  },
};
