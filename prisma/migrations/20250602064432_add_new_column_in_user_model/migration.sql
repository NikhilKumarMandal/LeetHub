-- AlterTable
ALTER TABLE "User" ADD COLUMN     "dailyQuestionCount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "lastQuestionDate" TIMESTAMP(3);
