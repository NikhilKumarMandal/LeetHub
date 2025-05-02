import { db } from "./../libs/db";
import { ProblemData } from "../types/types";

export class ProblemService {
  async create(problemData: ProblemData) {
    return await db.problem.create({
      data: {
        ...problemData,
      },
    });
  }
}
