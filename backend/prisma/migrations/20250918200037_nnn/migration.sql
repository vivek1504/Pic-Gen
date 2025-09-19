/*
  Warnings:

  - Added the required column `style` to the `Image` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "public"."Image_url_key";

-- AlterTable
ALTER TABLE "public"."Image" ADD COLUMN     "style" TEXT NOT NULL;
