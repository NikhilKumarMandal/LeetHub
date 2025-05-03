import { NextFunction, Request, Response } from "express";
import { ApiError, ApiResponse, asyncHandler } from "express-strategy";
import { AuthRequest, ProblemData } from "../types/types";
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
        let isSQL = false;
        if (languageId === 82) {
          isSQL = true;
        }
        const submission = testcases.map(
          ({ input, output }: { input: string | null; output: string }) => {
            const sourceCode = isSQL
              ? `${input ? input + "\n" : ""}${solutionCode}`
              : solutionCode;

            console.log("Final SQL source code:\n", sourceCode);

            return {
              source_code: sourceCode,
              language_id: languageId,
              stdin: isSQL ? null : input,
              expected_output: output,
            };
          }
        );

        const submissionResult = await submitBatch(submission, isSQL);

        const tokens = submissionResult.map(
          (res: { token: string }) => res.token
        );

        const result = await pollBatchResult(tokens, isSQL);

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

  getAllProblem = asyncHandler(async (req: Request, res: Response) => {
    const problems = await this.problemService.getProblem();

    if (!problems) {
      throw new ApiError(400,"There is no problem avaiable")
    }
    res.status(200).json(
      new ApiResponse(200, problems, "Fected problem succesfully")
    );
  });

  getProblemById = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!id) {
      throw new ApiError(400, "Please Id!");
    };

    const problem = await this.problemService.findProblemById(id);

    res.status(200).json(
      new ApiResponse(200, problem, "Fected problem")
    );
  });

  deleteProblem = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!id) {
      throw new ApiError(400, "Please Provide Id of problem!");
    };

    await this.problemService.deleteProblem(id)

    res.status(200).json(
      new ApiResponse(200, {}, "Problem deleted successfully!")
    );
    
  });

  updateProblem = async (req: AuthRequest, res: Response, next: NextFunction) => {
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

    const { id } = req.params;

    if (req.auth.role !== "ADMIN") {
      throw new ApiError(403, "You are not allowed to creates problem!");
    };

    try {
      for (const [language, solutionCode] of Object.entries(
        referenceSolutions
      )) {
        const languageId = getJudge0LanguageId(language);

        if (!languageId) {
          throw new ApiError(400, "This languageId is not exits!");
        }
        let isSQL = false;
        if (languageId === 82) {
          isSQL = true;
        }
        const submission = testcases.map(
          ({ input, output }: { input: string | null; output: string }) => {
            const sourceCode = isSQL
              ? `${input ? input + "\n" : ""}${solutionCode}`
              : solutionCode;

            return {
              source_code: sourceCode,
              language_id: languageId,
              stdin: isSQL ? null : input,
              expected_output: output,
            };
          }
        );

        const submissionResult = await submitBatch(submission, isSQL);

        const tokens = submissionResult.map(
          (res: { token: string }) => res.token
        );

        const result = await pollBatchResult(tokens, isSQL);

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

      const problemUpdated = await this.problemService.update({ id: id }, problem);

      this.logger.info("Problem update", { problemUpdated });

      res
        .status(200)
        .json(new ApiResponse(200, problemUpdated, "Problem updated successfully"));
    } catch (error) {
      next(error);
      return;
    }
  };
}
