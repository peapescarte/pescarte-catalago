-- CreateTable
CREATE TABLE "fish" (
    "id" TEXT NOT NULL,
    "scientific_name" TEXT NOT NULL,
    "native" BOOLEAN NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "fish_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "habitats" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "habitats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "gears" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "gears_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "localities" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "community_id" TEXT NOT NULL,

    CONSTRAINT "localities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "communities" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "municipality_id" TEXT NOT NULL,

    CONSTRAINT "communities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "municipalities" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "uf_name" TEXT NOT NULL,

    CONSTRAINT "municipalities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ufs" (
    "uf_name" TEXT NOT NULL,
    "uf" TEXT NOT NULL,

    CONSTRAINT "ufs_pkey" PRIMARY KEY ("uf_name")
);

-- CreateTable
CREATE TABLE "fish_habitat" (
    "fish_id" TEXT NOT NULL,
    "habitat_id" TEXT NOT NULL,

    CONSTRAINT "fish_habitat_pkey" PRIMARY KEY ("fish_id","habitat_id")
);

-- CreateTable
CREATE TABLE "fish_gear" (
    "fish_id" TEXT NOT NULL,
    "gear_id" TEXT NOT NULL,

    CONSTRAINT "fish_gear_pkey" PRIMARY KEY ("fish_id","gear_id")
);

-- CreateTable
CREATE TABLE "fish_common_name_by_community" (
    "common_name" TEXT NOT NULL,
    "fish_id" TEXT NOT NULL,
    "community_id" TEXT NOT NULL,

    CONSTRAINT "fish_common_name_by_community_pkey" PRIMARY KEY ("fish_id","community_id","common_name")
);

-- CreateIndex
CREATE UNIQUE INDEX "fish_scientific_name_key" ON "fish"("scientific_name");

-- CreateIndex
CREATE UNIQUE INDEX "habitats_name_key" ON "habitats"("name");

-- CreateIndex
CREATE UNIQUE INDEX "gears_name_key" ON "gears"("name");

-- AddForeignKey
ALTER TABLE "localities" ADD CONSTRAINT "localities_community_id_fkey" FOREIGN KEY ("community_id") REFERENCES "communities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "communities" ADD CONSTRAINT "communities_municipality_id_fkey" FOREIGN KEY ("municipality_id") REFERENCES "municipalities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "municipalities" ADD CONSTRAINT "municipalities_uf_name_fkey" FOREIGN KEY ("uf_name") REFERENCES "ufs"("uf_name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fish_habitat" ADD CONSTRAINT "fish_habitat_fish_id_fkey" FOREIGN KEY ("fish_id") REFERENCES "fish"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fish_habitat" ADD CONSTRAINT "fish_habitat_habitat_id_fkey" FOREIGN KEY ("habitat_id") REFERENCES "habitats"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fish_gear" ADD CONSTRAINT "fish_gear_fish_id_fkey" FOREIGN KEY ("fish_id") REFERENCES "fish"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fish_gear" ADD CONSTRAINT "fish_gear_gear_id_fkey" FOREIGN KEY ("gear_id") REFERENCES "gears"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fish_common_name_by_community" ADD CONSTRAINT "fish_common_name_by_community_fish_id_fkey" FOREIGN KEY ("fish_id") REFERENCES "fish"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fish_common_name_by_community" ADD CONSTRAINT "fish_common_name_by_community_community_id_fkey" FOREIGN KEY ("community_id") REFERENCES "communities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
