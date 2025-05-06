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
}
