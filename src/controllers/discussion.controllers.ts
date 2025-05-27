import { NextFunction, Request, Response } from "express";
import { ApiError, ApiResponse, asyncHandler } from "express-strategy";
import { DiscussionService } from "../services/Discussion.service";
import { AuthRequest } from "../types/types";
import { buildDiscussionTree } from "../utils/functionCode";
import { validationResult } from "express-validator";

export class Discussion {
  constructor(private disccussionService: DiscussionService) {}

  createDiscussion = async (
    req: AuthRequest,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const result = validationResult(req);
      if (!result.isEmpty()) {
        throw new ApiError(400, result.array()[0].msg as string);
      }
      const { content, problemId, parentId } = req.body;

      const discussionData = {
        content,
        problemId,
        parentId: parentId ?? null,
        userId: req.auth.sub,
      };

      const discussion = await this.disccussionService.create(discussionData);

      res
        .status(200)
        .json(new ApiResponse(200, discussion, "Discussion added"));
    } catch (error) {
      next(error);
      return;
    }
  };
  getDiscussionsByProblem = asyncHandler(
    async (req: Request, res: Response) => {
      const { problemId } = req.params;

      if (!problemId) {
        throw new ApiError(400, "ProblemId not found!");
      }

      const discussion = await this.disccussionService.findMany(problemId);
      const nestedDiscussions = buildDiscussionTree(discussion);

      res
        .status(200)
        .json(
          new ApiResponse(
            200,
            nestedDiscussions,
            "Discussion fetched successfully"
          )
        );
    }
  );

  deleteDiscussion = async (
    req: AuthRequest,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const userId = req.auth.sub;

      const existing = await this.disccussionService.findunique(id);
      if (!existing || existing.userId !== userId) {
        throw new ApiError(403, "Not authorized");
      }

      await this.disccussionService.delete(id);

      res.status(200).json(new ApiResponse(200, {}, "delete discussion"));
    } catch (error) {
      next(error);
      return;
    }
  };
}
