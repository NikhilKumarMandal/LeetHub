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
}
