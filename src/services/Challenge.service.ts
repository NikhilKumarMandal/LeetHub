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
}
