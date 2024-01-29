/*
  Warnings:

  - Added the required column `email` to the `suggested_names` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "suggested_names" ADD COLUMN     "email" TEXT NOT NULL;
