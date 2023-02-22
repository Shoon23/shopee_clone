/*
  Warnings:

  - A unique constraint covering the columns `[variation_id]` on the table `Variation` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Variation_variation_id_key` ON `Variation`(`variation_id`);
