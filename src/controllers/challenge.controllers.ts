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
}
