/*
  Warnings:

  - You are about to drop the column `cart_item_id` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `order_item_id` on the `Product` table. All the data in the column will be lost.
  - Added the required column `product_id` to the `Cart_item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `product_id` to the `Order_item` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Product` DROP FOREIGN KEY `Product_cart_item_id_fkey`;

-- DropForeignKey
ALTER TABLE `Product` DROP FOREIGN KEY `Product_order_item_id_fkey`;

-- AlterTable
ALTER TABLE `Cart_item` ADD COLUMN `product_id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Order_item` ADD COLUMN `product_id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Product` DROP COLUMN `cart_item_id`,
    DROP COLUMN `order_item_id`;
