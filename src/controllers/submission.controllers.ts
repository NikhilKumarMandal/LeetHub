import { Request, NextFunction, Response } from "express";
import { AuthRequest } from "../types/types";
import { SubmissionService } from "../services/Submission.service";
import { ApiResponse, asyncHandler } from "express-strategy";

export class Submission {
  constructor(private submissionService: SubmissionService) {}
  getAllSubmission = async (
    req: AuthRequest,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const userId = req.auth.sub;

      const submissions = await this.submissionService.findMany(userId);

      res
        .status(200)
        .json(
          new ApiResponse(200, submissions, "Submission fected successfully")
        );
    } catch (error) {
      next(error);
      return;
    }
  };

  getSubmissionsForProblem = async (
    req: AuthRequest,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const userId = req.auth.sub;
      const { problemId } = req.params;

      const submissionForProblem = await this.submissionService.findMany(
        userId,
        problemId
      );

      res
        .status(200)
        .json(
          new ApiResponse(
            200,
            submissionForProblem,
            "Submission for problem fected successfully"
          )
        );
    } catch (error) {
      next(error);
      return;
    }
  };

  getALlTheSubmissionForProblem = asyncHandler(
    async (req: Request, res: Response) => {
      const { problemId } = req.params;

      const count = await this.submissionService.count(problemId);

      res
        .status(200)
        .json(
          new ApiResponse(200, count, "Submission count fected successfully")
        );
    }
  );
}
