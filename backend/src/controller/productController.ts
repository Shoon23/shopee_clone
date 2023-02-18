import { Request, Response } from "express";
import { prisma } from "../services/seed";
import { categoryCode, iCategoryCode } from "../lib/constant";

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
    const productDetails = req.body;
    const productImges: any = req.files;
    let parseVariations;
    let responseData;
    const category: keyof iCategoryCode = productDetails.category;

    const newProduct = await prisma.product.create({
      data: {
        product_name: productDetails.product_name,
        quantity: Number(productDetails.quantity),
        price: Number(productDetails.price),
        description: productDetails.description,
        shop_id: productDetails.shop_id,
      },
    });

    const addCategories = await prisma.categories_on_product.create({
      data: {
        product_id: newProduct?.product_id,
        category_id: categoryCode[category],
      },
    });

    if (productDetails?.variations) {
      parseVariations = JSON.parse(productDetails?.variations);
      const addVariant = await prisma.variation.create({
        data: {
          product_id: newProduct?.product_id,
          variation_name: parseVariations?.variant,
        },
      });

      const addOptions = Object.values(parseVariations).map(
        (val: any, index) => {
          if (val && index !== 0) {
            return prisma.variation_item.create({
              data: {
                variation_item_name: val,
                variation_id: addVariant?.variation_id,
              },
            });
          }
        }
      );

      const options = await Promise.all(addOptions);

      responseData = { variation: { ...addVariant, option: [...options] } };
    }

    if (productImges) {
      const addImages = productImges?.map((item: any) => {
        console.log(item);
        return prisma.product_image.create({
          data: {
            product_id: newProduct.product_id,
            product_image_link: item.filename,
          },
        });
      });
      const productImages = await Promise.all(addImages);
      responseData = { ...responseData, product_images: { ...productImages } };
    }
    responseData = { ...newProduct, ...responseData };
    res.status(201).json(responseData);
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
    const variation_id = req.body.product_variations.variation_id;
    console.log();

    const deleteCategories = prisma.categories_on_product.deleteMany({
      where: {
        product_id,
      },
    });

    const deleteOptions = prisma.variation_item.deleteMany({
      where: {
        variation_id,
      },
    });

    const deleteVariants = prisma.variation.deleteMany({
      where: {
        AND: [{ product_id }, { variation_id }],
      },
    });

    const deleteImages = prisma.product_image.deleteMany({
      where: {
        product_id,
      },
    });

    const deleteProduct = prisma.product.delete({
      where: {
        product_id,
      },
    });

    const transaction = await prisma.$transaction([
      deleteCategories,
      deleteOptions,
      deleteVariants,
      deleteImages,
      deleteProduct,
    ]);

    console.log(transaction);
    res.status(200).json(transaction);
  },
};
