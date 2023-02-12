-- AlterTable
ALTER TABLE `Shop` ADD COLUMN `shop_profile_picture` VARCHAR(255) NULL;

-- AlterTable
ALTER TABLE `User` MODIFY `profile_picture` VARCHAR(255) NULL;
