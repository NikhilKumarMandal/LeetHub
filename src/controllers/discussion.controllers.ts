import { NextFunction, Request, Response } from "express";
import { ApiResponse, asyncHandler } from "express-strategy";
import { DiscussionService } from "../services/Discussion.service";
import { AuthRequest } from "../types/types";

export class Discussion {
  constructor(private disccussionService: DiscussionService) {}

  createDiscussion = async (
    req: AuthRequest,
    res: Response,
    next: NextFunction
  ) => {
    try {
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
        .json(
          new ApiResponse(200, discussion, "Discussion created successfully")
        );
    } catch (error) {
      next(error);
      return;
    }
  };

  getDiscussionsByProblem = asyncHandler(
    async (req: Request, res: Response) => {
      const { problemId } = req.body;

      const discussion = await this.disccussionService.findMany(problemId);

      res
        .status(200)
        .json(
          new ApiResponse(200, discussion, "Discussion fected successfully")
        );
    }
  );
}
