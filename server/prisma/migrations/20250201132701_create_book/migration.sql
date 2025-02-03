-- CreateTable
CREATE TABLE `Book` (
    `id` VARCHAR(191) NOT NULL,
    `bookName` VARCHAR(191) NOT NULL,
    `author` VARCHAR(191) NOT NULL,
    `release` VARCHAR(191) NOT NULL,
    `price` DOUBLE NOT NULL,

    UNIQUE INDEX `Book_bookName_key`(`bookName`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
