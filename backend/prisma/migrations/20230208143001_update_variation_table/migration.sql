/*
  Warnings:

  - You are about to drop the column `color` on the `Variation` table. All the data in the column will be lost.
  - You are about to drop the column `size` on the `Variation` table. All the data in the column will be lost.
  - Added the required column `variation_name` to the `Variation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Variation` DROP COLUMN `color`,
    DROP COLUMN `size`,
    ADD COLUMN `variation_name` VARCHAR(191) NOT NULL;
