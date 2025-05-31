import { db } from "../libs/db";
import { DiscussionData } from "../types/types";

export class DiscussionService {
  async create(data: DiscussionData) {
    return db.discussion.create({
      data: {
        ...data,
      },
    });
  }

  async findunique(id: string) {
    return db.discussion.findUnique({
      where: {
        id,
      },
    });
  }

  async delete(id: string) {
    return db.discussion.delete({
      where: {
        id,
      },
    });
  }

  async findMany(problemId: string) {
    return await db.discussion.findMany({
      where: { problemId },
      include: {
        user: { select: { name: true } },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }
}
