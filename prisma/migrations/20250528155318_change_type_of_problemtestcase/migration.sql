/*
  Warnings:

  - The `input` column on the `ProblemTestCase` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "ProblemTestCase" DROP COLUMN "input",
ADD COLUMN     "input" JSONB;
