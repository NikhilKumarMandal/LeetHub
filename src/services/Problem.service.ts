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

  async getProblem() {
    return await db.problem.findMany();
  }

  async findProblemById(id: string) {
    return await db.problem.findUnique({
      where: {
        id,
      },
    });
  }

  async deleteProblem(id: string) {
    return await db.problem.delete({
      where: {
        id,
      },
    });
  }

  async update(where: { id: string }, data: ProblemData) {
    return db.problem.update({
      where,
      data,
    });
  }

  async deleteTestCase(where: { problemId: string }) {
    return await db.problemTestCase.deleteMany({
      where,
    });
  }

  // async createMany() {
  //   await db.problemTestCase.createMany({
  //     data: formattedTestcases,
  //   });
  // }
}
