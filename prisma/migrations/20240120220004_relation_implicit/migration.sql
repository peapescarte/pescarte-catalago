/*
  Warnings:

  - You are about to drop the `fish_gear` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `fish_habitat` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "fish_gear" DROP CONSTRAINT "fish_gear_fish_id_fkey";

-- DropForeignKey
ALTER TABLE "fish_gear" DROP CONSTRAINT "fish_gear_gear_id_fkey";

-- DropForeignKey
ALTER TABLE "fish_habitat" DROP CONSTRAINT "fish_habitat_fish_id_fkey";

-- DropForeignKey
ALTER TABLE "fish_habitat" DROP CONSTRAINT "fish_habitat_habitat_id_fkey";

-- DropTable
DROP TABLE "fish_gear";

-- DropTable
DROP TABLE "fish_habitat";

-- CreateTable
CREATE TABLE "_FishToHabitat" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_FishToGear" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_FishToHabitat_AB_unique" ON "_FishToHabitat"("A", "B");

-- CreateIndex
CREATE INDEX "_FishToHabitat_B_index" ON "_FishToHabitat"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FishToGear_AB_unique" ON "_FishToGear"("A", "B");

-- CreateIndex
CREATE INDEX "_FishToGear_B_index" ON "_FishToGear"("B");

-- AddForeignKey
ALTER TABLE "_FishToHabitat" ADD CONSTRAINT "_FishToHabitat_A_fkey" FOREIGN KEY ("A") REFERENCES "fish"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FishToHabitat" ADD CONSTRAINT "_FishToHabitat_B_fkey" FOREIGN KEY ("B") REFERENCES "habitats"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FishToGear" ADD CONSTRAINT "_FishToGear_A_fkey" FOREIGN KEY ("A") REFERENCES "fish"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FishToGear" ADD CONSTRAINT "_FishToGear_B_fkey" FOREIGN KEY ("B") REFERENCES "gears"("id") ON DELETE CASCADE ON UPDATE CASCADE;
