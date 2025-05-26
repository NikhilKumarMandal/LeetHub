-- CreateTable
CREATE TABLE "PlaylistProblemSolved" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "playlistId" TEXT NOT NULL,
    "problemId" TEXT NOT NULL,
    "solvedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PlaylistProblemSolved_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PlaylistProblemSolved_userId_playlistId_problemId_key" ON "PlaylistProblemSolved"("userId", "playlistId", "problemId");

-- AddForeignKey
ALTER TABLE "PlaylistProblemSolved" ADD CONSTRAINT "PlaylistProblemSolved_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlaylistProblemSolved" ADD CONSTRAINT "PlaylistProblemSolved_playlistId_fkey" FOREIGN KEY ("playlistId") REFERENCES "Playlist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlaylistProblemSolved" ADD CONSTRAINT "PlaylistProblemSolved_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "Problem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
