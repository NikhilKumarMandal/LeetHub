import { db } from "../libs/db";

interface Data {
  name: string;
  description: string;
  userId: string;
}

export class PlaylistService {
  async create(data: Data) {
    return await db.playlist.create({
      data: {
        ...data,
      },
    });
  }

  async findMany(id: string) {
    return await db.playlist.findMany({
      where: {
        userId: id,
      },
      include: {
        problems: {
          include: {
            problem: true,
          },
        },
      },
    });
  }

  async findUnique(playlistId: string) {
    return await db.playlist.findUnique({
      where: {
        id: playlistId,
      },
      include: {
        problems: {
          include: {
            problem: true,
          },
        },
      },
    });
  }

  async createMany(problemsId: string[], playlistId: string) {
    const data = problemsId.map((problemId) => ({
      playlistId,
      problemId,
    }));
    return await db.problemInPlaylist.createMany({
      data,
      skipDuplicates: true,
    });
  }

  async getALL() {
    return await db.playlist.findMany({
      include: {
        problems: {
          include: {
            problem: true,
          },
        },
      },
    });
  }

  async deletePlaylist(playlistId: string) {
    return await db.playlist.delete({
      where: {
        id: playlistId,
      },
    });
  }

  async deleteMany(playlistId: string, problemIds: string[]) {
    return await db.problemInPlaylist.deleteMany({
      where: {
        playlistId,
        problemId: {
          in: problemIds,
        },
      },
    });
  }

  async markProblemAsSolvedInPlaylist({
    playlistId,
    userId,
    problemId,
  }: {
    playlistId: string;
    userId: string;
    problemId: string;
  }) {
    const playlistProgress = await db.playlistProblemSolved.upsert({
      where: {
        userId_playlistId_problemId: {
          userId,
          playlistId,
          problemId,
        },
      },
      update: {
        solvedAt: new Date(),
      },
      create: {
        userId,
        playlistId,
        problemId,
      },
    });

    return playlistProgress;
  }
}
