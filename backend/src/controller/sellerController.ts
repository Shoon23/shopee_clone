import { Request, Response } from "express";
import { prisma } from "../services/seed";

export const sellerController = {
  async isSeller(req: Request, res: Response) {
    const user_id = req.params.user_id;

    const shop = await prisma.shop.findUnique({
      where: {
        user_id,
      },
    });

    if (!shop) {
      return res.status(403).json({ message: "User Dont have a shop" });
    }

    return res.status(200).json(shop);
  },
  async createShop(req: Request, res: Response) {
    const shopDetails = req.body;

    const newShop = await prisma.shop.create({
      data: {
        shop_name: shopDetails.shop_name,
        user_id: shopDetails.user_id,
      },
    });

    return res.status(201).json(newShop);
  },
  async getProducts(req: Request, res: Response) {
    const shop_id = req.params.shop_id;
    const limit = req.query.limit || 10;

    const products = await prisma.product.findMany({
      where: {
        shop_id,
      },
      take: Number(limit),
      include: {
        categories: {
          include: {
            category: true,
          },
        },
        product_images: true,
        product_variation: {
          include: {
            variation_item: true,
          },
        },
      },
    });

    return res.status(200).json(products);
  },
};
