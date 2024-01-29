-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PENDING', 'APPROVED', 'DISCARDED');

-- CreateTable
CREATE TABLE "suggested_names" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "suggestedName" TEXT NOT NULL,
    "status" "Status" NOT NULL,
    "fish_id" TEXT NOT NULL,
    "community_id" TEXT NOT NULL,

    CONSTRAINT "suggested_names_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "suggested_names" ADD CONSTRAINT "suggested_names_fish_id_fkey" FOREIGN KEY ("fish_id") REFERENCES "fish"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "suggested_names" ADD CONSTRAINT "suggested_names_community_id_fkey" FOREIGN KEY ("community_id") REFERENCES "communities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
