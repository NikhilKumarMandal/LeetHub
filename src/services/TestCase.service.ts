import { db } from "../libs/db";

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
}
