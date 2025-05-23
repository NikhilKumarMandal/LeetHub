-- AlterTable
ALTER TABLE "Playlist" ADD COLUMN     "image" JSONB,
ADD COLUMN     "summary" TEXT;

-- AlterTable
ALTER TABLE "Problem" ADD COLUMN     "image" JSONB;
