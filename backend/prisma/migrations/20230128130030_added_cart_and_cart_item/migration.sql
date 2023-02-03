/*
  Warnings:

  - You are about to drop the column `shipping_address` on the `Cart` table. All the data in the column will be lost.
  - You are about to drop the `order` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `order_cart_id_fkey`;

-- AlterTable
ALTER TABLE `Cart` DROP COLUMN `shipping_address`;

-- DropTable
DROP TABLE `order`;

-- CreateTable
CREATE TABLE `Cart_item` (
    `cart_item_id` VARCHAR(191) NOT NULL,
    `quantity` INTEGER NOT NULL,
    `total_price` INTEGER NOT NULL,
    `cart_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`cart_item_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Orders` (
    `orders_id` VARCHAR(191) NOT NULL,
    `shipping_address` VARCHAR(100) NOT NULL,
    `total_price` INTEGER NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Orders_user_id_key`(`user_id`),
    PRIMARY KEY (`orders_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Order_item` (
    `order_item_id` VARCHAR(191) NOT NULL,
    `quantity` INTEGER NOT NULL,
    `total_price` INTEGER NOT NULL,
    `orders_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`order_item_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Cart_item` ADD CONSTRAINT `Cart_item_cart_id_fkey` FOREIGN KEY (`cart_id`) REFERENCES `Cart`(`cart_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Orders` ADD CONSTRAINT `Orders_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Order_item` ADD CONSTRAINT `Order_item_orders_id_fkey` FOREIGN KEY (`orders_id`) REFERENCES `Orders`(`orders_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
