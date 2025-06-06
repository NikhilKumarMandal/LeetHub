/*
  Warnings:

  - You are about to drop the column `image` on the `Playlist` table. All the data in the column will be lost.
  - You are about to drop the column `topics` on the `Playlist` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Playlist` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Playlist_name_userId_key";

-- AlterTable
ALTER TABLE "Playlist" DROP COLUMN "image",
DROP COLUMN "topics";

-- CreateIndex
CREATE UNIQUE INDEX "Playlist_name_key" ON "Playlist"("name");
