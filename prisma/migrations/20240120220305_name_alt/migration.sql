/*
  Warnings:

  - You are about to drop the `suggested_names` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "suggested_names" DROP CONSTRAINT "suggested_names_community_id_fkey";

-- DropForeignKey
ALTER TABLE "suggested_names" DROP CONSTRAINT "suggested_names_fish_id_fkey";

-- DropTable
DROP TABLE "suggested_names";

-- CreateTable
CREATE TABLE "suggested_common_names" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "suggestedName" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'PENDING',
    "fish_id" TEXT NOT NULL,
    "community_id" TEXT NOT NULL,

    CONSTRAINT "suggested_common_names_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "suggested_common_names" ADD CONSTRAINT "suggested_common_names_fish_id_fkey" FOREIGN KEY ("fish_id") REFERENCES "fish"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "suggested_common_names" ADD CONSTRAINT "suggested_common_names_community_id_fkey" FOREIGN KEY ("community_id") REFERENCES "communities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
