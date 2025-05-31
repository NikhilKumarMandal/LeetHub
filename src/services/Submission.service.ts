import { db } from "../libs/db";

export class SubmissionService {
  async findUnique(submissionId: string) {
    return await db.submission.findUnique({
      where: {
        id: submissionId,
      },
      include: {
        testcase: true,
      },
    });
  }

  async findMany(userId: string, problemId?: string) {
    return await db.submission.findMany({
      where: {
        userId,
        ...(problemId && { problemId }),
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async count(problemId: string) {
    return await db.submission.count({
      where: {
        problemId,
      },
    });
  }

  async groupBy(userId: string) {
    return await db.submission.groupBy({
      by: ["createdAt"],
      where: {
        userId,
      },
      _count: {
        _all: true,
      },
    });
  }

  async findManyByStatus(userId: string) {
    return await db.submission.findMany({
      where: {
        userId,
        status: "Accepted",
      },
      include: {
        problem: true,
      },
    });
  }

  async getAllProblem() {
    return await db.problem.findMany();
  }

  async findManyData(userId: string, skip: number, take: number) {
    return await db.submission.findMany({
      where: { userId },
      include: { problem: true },
      skip,
      take,
      orderBy: { createdAt: "desc" },
    });
  }
  async countData(userId: string) {
    return await db.submission.count({
      where: { userId },
    });
  }

  async countSubmissionsPerProblem(userId: string, problemIds: string[]) {
    const result = await db.submission.groupBy({
      by: ["problemId"],
      where: {
        userId,
        problemId: { in: problemIds },
      },
      _count: true,
    });

    const counts: Record<string, number> = {};
    result.forEach((r) => {
      counts[r.problemId] = r._count;
    });

    return counts;
  }

  async findManySubmission(userId: string, skip: number, take: number) {
    return await db.submission.findMany({
      where: {
        userId,
      },
      include: {
        problem: {
          select: {
            title: true,
          },
        },
      },
      skip,
      take,
      orderBy: { createdAt: "desc" },
    });
  }
}
