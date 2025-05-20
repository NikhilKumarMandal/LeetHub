import { db } from "../libs/db";
import { ChallengeData } from "../types/types";

export class ChallengeService {
  async create(data: ChallengeData) {
    return await db.challenge.create({
      data: {
        ...data,
      },
    });
  }

  async findUnique(challengeId: string) {
    return await db.challenge.findUnique({
      where: {
        id: challengeId,
      },
    });
  }

  async findUniqueProblemNumber(problemNumber: any) {
    return await db.problem.findUnique({
      where: {
        problemNumber,
      },
    });
  }

  async createMany(
    data: { challengeId: string; problemId: string; day: number }[]
  ) {
    return await db.challengeProblem.createMany({
      data,
      skipDuplicates: true,
    });
  }
}
