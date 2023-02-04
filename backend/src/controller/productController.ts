import { Request, Response } from "express";
import { prisma } from "../services/seed";

export const productController = {
  async getAll(req: Request, res: Response) {
    const limit = req.query.limit || 100;

    const products =
      await prisma.$queryRaw`SELECT * FROM product ORDER BY RAND() LIMIT ${limit}`;

    res.status(200).json(products);
  },

  async getSingle(req: Request, res: Response) {
    const id = req.params.id;

    const product = await prisma.product.findUnique({
      where: {
        product_id: id,
      },
    });
    res.status(200).json(product);
  },

  async addProduct(req: Request, res: Response) {
    const product = req.body;

    const newProduct = await prisma.product.create({
      data: {
        product_name: product.product_name,
        quantity: product.quantity,
        price: product.price,
        seller_id: product.seller_id,
      },
    });

    res.status(201).json(newProduct);
  },

  async updateProduct(req: Request, res: Response) {
    const product = req.body;

    const updateProduct = await prisma.product.update({
      where: {
        product_id: product.product_id,
      },
      data: product,
    });

    res.status(200).json(updateProduct);
  },
  async deleteProduct(req: Request, res: Response) {
    const product_id = req.body.product_id;

    const deleteProduct = await prisma.product.delete({
      where: {
        product_id,
      },
    });

    res.status(200).json(deleteProduct);
  },
};
