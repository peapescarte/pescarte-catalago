/*
  Warnings:

  - You are about to drop the `localities` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[uf]` on the table `ufs` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "localities" DROP CONSTRAINT "localities_community_id_fkey";

-- DropTable
DROP TABLE "localities";

-- CreateIndex
CREATE UNIQUE INDEX "ufs_uf_key" ON "ufs"("uf");
