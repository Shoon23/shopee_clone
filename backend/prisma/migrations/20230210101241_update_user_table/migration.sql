/*
  Warnings:

  - Added the required column `profile_picture` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User` ADD COLUMN `profile_picture` VARCHAR(255) NOT NULL;
