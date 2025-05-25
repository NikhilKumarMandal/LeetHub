import { db } from "../libs/db";
import { Submission } from "../types/types";

export class TestCaseService {
  async getTestCasesFromDB(problemId: string, mode: string) {
    return db.problemTestCase.findMany({
      where: {
        problemId,
        ...(mode === "run" ? { isPublic: true } : {}),
      },
      orderBy: { id: "asc" },
    });
  }

  async createSubmission(data: Submission) {
    return await db.submission.create({
      data,
    });
  }

  async upsert(userId: string, problemId: string) {
    return await db.problemSolved.upsert({
      where: {
        userId_problemId: {
          userId,
          problemId,
        },
      },
      update: {},
      create: {
        userId,
        problemId,
      },
    });
  }

  async createMany(testCaseData: any) {
    return await db.testCase.createMany({
      data: testCaseData,
      skipDuplicates: true,
    });
  }
}
