import { NextFunction, Response, Request } from "express";
import { AuthRequest } from "../types/types";
import { ApiError, ApiResponse, asyncHandler } from "express-strategy";
import { VoteService } from "../services/Vote.service";

export class Vote {
  constructor(private voteService: VoteService) {}

  voteOnProblem = async (
    req: AuthRequest,
    res: Response,
    next: NextFunction
  ) => {
    const { problemId } = req.params;
    const { type } = req.body;
    try {
      if (!["UPVOTE", "DOWNVOTE"].includes(type)) {
        throw new ApiError(400, "Invalid vote type.");
      }
      const userId = req.auth.sub;

      const existingVote = await this.voteService.findUnique(userId, problemId);

      if (existingVote) {
        await this.voteService.update(userId, problemId, type);
      } else {
        const data = {
          userId,
          problemId,
          type,
        };
        await this.voteService.create(data);
      }

      res.status(200).json(new ApiResponse(200, {}, "Vote recorded."));
    } catch (error) {
      next(error);
      return;
    }
  };

  getProblemVotes = asyncHandler(async (req: Request, res: Response) => {
    const { problemId } = req.params;
    const [upvote, downvote] = await Promise.all([
      await this.voteService.count(problemId, "UPVOTE"),
      await this.voteService.count(problemId, "DOWNVOTE"),
    ]);

    res.status(200).json(
      new ApiResponse(
        200,
        {
          upvote,
          downvote,
        },
        "Fected data successfully"
      )
    );
  });
}
