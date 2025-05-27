import express, { RequestHandler } from "express";
import authenticate from "../middlewares/auth.middleware";
import { Discussion } from "../controllers/discussion.controllers";
import { DiscussionService } from "../services/Discussion.service";

const router = express.Router();

const discussuinService = new DiscussionService();
const discussion = new Discussion(discussuinService);

router.post(
  "/create-discussion",
  authenticate,
  discussion.createDiscussion as RequestHandler
);

router.get("/:problemId", authenticate, discussion.getDiscussionsByProblem);

router.delete(
  "/discusssion/:id",
  authenticate,
  discussion.deleteDiscussion as RequestHandler
);

export default router;
