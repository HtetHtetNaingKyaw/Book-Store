/*
  Warnings:

  - You are about to drop the `Book` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `Book`;

-- CreateTable
CREATE TABLE `Books` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `author` VARCHAR(191) NOT NULL,
    `release` VARCHAR(191) NOT NULL,
    `price` DOUBLE NOT NULL,
    `img` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Books_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
