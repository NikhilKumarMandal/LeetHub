import { db } from "../libs/db";

interface Data {
  userId: string;
  problemId: string;
  type: "UPVOTE" | "DOWNVOTE";
}

export class VoteService {
  async findUnique(userId: string, problemId: string) {
    return await db.problemVote.findUnique({
      where: {
        userId_problemId: {
          userId,
          problemId,
        },
      },
    });
  }

  async update(userId: string, problemId: string, type: "UPVOTE" | "DOWNVOTE") {
    return await db.problemVote.update({
      where: {
        userId_problemId: {
          userId,
          problemId,
        },
      },
      data: {
        type,
      },
    });
  }

  async create(data: Data) {
    return db.problemVote.create({
      data: {
        ...data,
      },
    });
  }

  async count(problemId: string, data: "UPVOTE" | "DOWNVOTE") {
    return await db.problemVote.count({
      where: {
        problemId,
        type: data,
      },
    });
  }
}
