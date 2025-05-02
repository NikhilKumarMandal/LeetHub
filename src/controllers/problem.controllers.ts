import { NextFunction, Request, Response } from "express";
import { ApiError, ApiResponse, asyncHandler } from "express-strategy";
import { AuthRequest, ProblemData, Submission } from "../types/types";
import {
  getJudge0LanguageId,
  pollBatchResult,
  submitBatch,
} from "../utils/judge0.utils";
import { ProblemService } from "../services/Problem.service";
import { Logger } from "winston";

export class Problem {
  constructor(
    private problemService: ProblemService,
    private logger: Logger
  ) {}
  create = async (req: AuthRequest, res: Response, next: NextFunction) => {
    const {
      title,
      description,
      tags,
      difficulty,
      examples,
      constraints,
      hints,
      editorial,
      testcases,
      codeSnippets,
      referenceSolutions,
    } = req.body;

    if (req.auth.role !== "ADMIN") {
      throw new ApiError(403, "You are not allowed to creates problem!");
    }

    try {
      for (const [language, solutionCode] of Object.entries(
        referenceSolutions
      )) {
        const languageId = getJudge0LanguageId(language);

        if (!languageId) {
          throw new ApiError(400, "This languageId is not exits!");
        }

        const isSQL = languageId === 82;
        const submission = testcases.map(
          ({ input, output }: { input: string; output: string }) => ({
            source_code: solutionCode,
            language_id: languageId,
            stdin: input,
            expected_output: output,
          })
        );

        const submissionResult = await submitBatch(submission);

        const tokens = submissionResult.map(
          (res: { token: string }) => res.token
        );

        const result = await pollBatchResult(tokens);

        for (const res of result) {
          if (res.status.id !== 3) {
            throw new ApiError(
              400,
              `Testcase failed for language: ${language}`
            );
          }
        }
      }

      const problem: ProblemData = {
        title,
        description,
        tags,
        difficulty,
        examples,
        constraints,
        hints,
        editorial,
        testcases,
        codeSnippets,
        referenceSolutions,
        userId: req.auth.sub,
      };

      const newProblem = await this.problemService.create(problem);

      this.logger.info("Problem created", { newProblem });

      res
        .status(200)
        .json(new ApiResponse(200, newProblem, "Problem created successfully"));
    } catch (error) {
      next(error);
      return;
    }
  };
}
