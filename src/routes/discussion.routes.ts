import express, { RequestHandler } from "express";
import authenticate from "../middlewares/auth.middleware";
import { Discussion } from "../controllers/discussion.controllers";
import { DiscussionService } from "../services/Discussion.service";
import discussionValidators from "../validators/discussion.validators";

const router = express.Router();

const discussuinService = new DiscussionService();
const discussion = new Discussion(discussuinService);

router.post(
  "/create-discussion",
  authenticate,
  discussionValidators,
  discussion.createDiscussion as RequestHandler
);

router.get("/:problemId", authenticate, discussion.getDiscussionsByProblem);

router.delete(
  "/:id",
  authenticate,
  discussion.deleteDiscussion as RequestHandler
);

export default router;
