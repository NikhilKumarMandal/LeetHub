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
    });
  }
}
