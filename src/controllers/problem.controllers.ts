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
import { db } from "../libs/db";
import { matchedData } from "express-validator";

export class Problem {
  constructor(
    private problemService: ProblemService,
    private logger: Logger
  ) {}

  create = async (req: AuthRequest, res: Response, next: NextFunction) => {
    const {
      title,
      description,
      topic,
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
      throw new ApiError(403, "You are not allowed to create a problem!");
    }

    try {
      for (const [language, solutionCode] of Object.entries(
        referenceSolutions
      )) {
        const languageId = getJudge0LanguageId(language);
        if (!languageId) {
          throw new ApiError(400, `Language ID not found for: ${language}`);
        }

        const isSQL = languageId === 82;

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
        topic,
        difficulty,
        examples,
        constraints,
        hints,
        editorial,
        codeSnippets,
        referenceSolutions,
        userId: req.auth.sub,
      };

      const newProblem = await this.problemService.create(problem);

      const formattedTestcases = testcases.map(
        ({
          input,
          output,
          isPublic = false,
        }: {
          input: string;
          output: string;
          isPublic?: boolean;
        }) => ({
          input,
          output,
          isPublic,
          problemId: newProblem.id,
        })
      );

      await db.problemTestCase.createMany({
        data: formattedTestcases,
      });

      this.logger.info("Problem created", { newProblem });

      res
        .status(200)
        .json(new ApiResponse(200, newProblem, "Problem created successfully"));
    } catch (error) {
      next(error);
    }
  };

  getAllProblem = async (
    req: AuthRequest,
    res: Response,
    next: NextFunction
  ) => {
    const validatedQuery = matchedData(req, { onlyValidData: true });

    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;
    const userId = req.auth.sub;

    try {
      const total =
        await this.problemService.getTotalProblemCount(validatedQuery);

      const { problems, solvedCount } =
        await this.problemService.getProblemsPaginated(
          skip,
          limit,
          validatedQuery,
          userId
        );

      res.status(200).json(
        new ApiResponse(
          200,
          {
            problems,
            solvedCount,
            pagination: {
              total,
              page,
              limit,
              totalPages: Math.ceil(total / limit),
            },
          },
          "Fetched problems successfully"
        )
      );
    } catch (error) {
      next(error);
    }
  };

  getProblemById = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!id) {
      throw new ApiError(400, "Please Id!");
    }

    const problem = await this.problemService.findProblemById(id);

    res.status(200).json(new ApiResponse(200, problem, "Fected problem"));
  });

  deleteProblem = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!id) {
      throw new ApiError(400, "Please Provide Id of problem!");
    }

    await this.problemService.deleteProblem(id);

    res
      .status(200)
      .json(new ApiResponse(200, {}, "Problem deleted successfully!"));
  });

  updateProblem = async (
    req: AuthRequest,
    res: Response,
    next: NextFunction
  ) => {
    const {
      title,
      description,
      topic,
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
      throw new ApiError(403, "You are not allowed to update problems!");
    }

    try {
      for (const [language, solutionCode] of Object.entries(
        referenceSolutions
      )) {
        const languageId = getJudge0LanguageId(language);

        if (!languageId) {
          throw new ApiError(400, `Language ID not found for: ${language}`);
        }

        const isSQL = languageId === 82;

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

      const problem: Omit<ProblemData, "testcases"> = {
        title,
        description,
        topic,
        difficulty,
        examples,
        constraints,
        hints,
        editorial,
        codeSnippets,
        referenceSolutions,
        userId: req.auth.sub,
      };

      const problemUpdated = await this.problemService.update({ id }, problem);

      await this.problemService.deleteTestCase({
        problemId: problemUpdated.id,
      });

      const formattedTestcases = testcases.map(
        ({
          input,
          output,
          isPublic = false,
        }: {
          input: string;
          output: string;
          isPublic?: boolean;
        }) => ({
          input,
          output,
          isPublic,
          problemId: id,
        })
      );

      console.log("formattedTestcases", formattedTestcases);

      await db.problemTestCase.createMany({
        data: formattedTestcases,
      });

      this.logger.info("Problem updated", { problemUpdated });

      res
        .status(200)
        .json(
          new ApiResponse(200, problemUpdated, "Problem updated successfully")
        );
    } catch (error) {
      next(error);
    }
  };

  getAllProblemSolvedByUser = async (
    req: AuthRequest,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const userId = req.auth.sub;
      const problems = await this.problemService.findMany(userId);

      res
        .status(200)
        .json(new ApiResponse(200, problems, "Problem fected successfully"));
    } catch (error) {
      next(error);
      return;
    }
  };

  getAllTopicAndCountFromProblem = asyncHandler(
    async (req: Request, res: Response) => {
      const problems = await this.problemService.getAllTopics();

      const topicCounts: Record<string, number> = {};

      for (const problem of problems) {
        for (const topic of problem.topic) {
          topicCounts[topic] = (topicCounts[topic] || 0) + 1;
        }
      }

      res
        .status(200)
        .json(new ApiResponse(200, topicCounts, "Fetch all Topics"));
    }
  );
}
