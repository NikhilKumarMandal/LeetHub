import { Request, Response } from "express";
import { ApiError, ApiResponse, asyncHandler } from "express-strategy";
import { ChallengeData } from "../types/types";
import { ChallengeService } from "../services/Challenge.service";
import { validationResult } from "express-validator";

export class Challenge {
  constructor(private challengeService: ChallengeService) {}

  create = asyncHandler(async (req: Request, res: Response) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      throw new ApiError(400, result.array()[0].msg as string);
    }
    const { name, description, totalDays } = req.body;
    const totalDaysInInt = parseInt(totalDays);

    const data: ChallengeData = {
      name,
      description,
      totalDays: totalDaysInInt,
    };

    const challengeCreate = await this.challengeService.create(data);

    res
      .status(200)
      .json(
        new ApiResponse(200, challengeCreate, "Challenge create successfully!")
      );
  });

  assignProblemsToChallenge = asyncHandler(
    async (req: Request, res: Response) => {
      const challengeId = req.params.id;
      const { problems } = req.body;

      const challenge = await this.challengeService.findUnique(challengeId);

      if (!challenge) {
        throw new ApiError(400, "Challenge not found");
      }

      const sortedProblems = problems.sort(
        (a: any, b: any) => a.problemNumber - b.problemNumber
      );

      const resolvedProblems = [];

      for (let i = 0; i < sortedProblems.length; i++) {
        const { problemNumber } = sortedProblems[i];
        const day = i + 1;

        const problem =
          await this.challengeService.findUniqueProblemNumber(problemNumber);

        if (!problem) {
          throw new ApiError(
            400,
            `Problem with number ${problemNumber} not found.`
          );
        }

        resolvedProblems.push({
          challengeId,
          problemId: problem.id,
          day,
        });
      }

      const problemChallenge =
        await this.challengeService.createMany(resolvedProblems);

      res
        .status(200)
        .json(
          new ApiResponse(
            200,
            problemChallenge,
            "Problems assigned successfully"
          )
        );
    }
  );
}
