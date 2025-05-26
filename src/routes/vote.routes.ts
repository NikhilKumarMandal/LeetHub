import express, { RequestHandler } from "express";
import authenticate from "../middlewares/auth.middleware";
import { Vote } from "../controllers/vote.controllers";
import { VoteService } from "../services/Vote.service";

const router = express.Router();

const voteService = new VoteService();
const vote = new Vote(voteService);

router.post(
  "/vote-problem/:problemId",
  authenticate,
  vote.voteOnProblem as RequestHandler
);

router.get("/get-voted-problem/:problemId", authenticate, vote.getProblemVotes);

export default router;
