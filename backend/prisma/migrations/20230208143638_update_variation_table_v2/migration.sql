-- CreateTable
CREATE TABLE `Variation_item` (
    `variation_item_id` VARCHAR(191) NOT NULL,
    `variation_item_name` VARCHAR(191) NOT NULL,
    `variation_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`variation_item_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Variation_item` ADD CONSTRAINT `Variation_item_variation_id_fkey` FOREIGN KEY (`variation_id`) REFERENCES `Variation`(`variation_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
