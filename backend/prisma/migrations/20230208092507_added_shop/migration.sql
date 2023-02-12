/*
  Warnings:

  - A unique constraint covering the columns `[user_id]` on the table `Shop` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `user_id` to the `Shop` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Shop` ADD COLUMN `user_id` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Shop_user_id_key` ON `Shop`(`user_id`);

-- AddForeignKey
ALTER TABLE `Shop` ADD CONSTRAINT `Shop_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
