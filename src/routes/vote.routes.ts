import express, { RequestHandler } from "express";
import authenticate from "../middlewares/auth.middleware";
import { Vote } from "../controllers/vote.controllers";
import { VoteService } from "../services/Vote.service";

const router = express.Router();

const voteService = new VoteService();
const vote = new Vote(voteService);

router.post(
  "/vote-problem/:id",
  authenticate,
  vote.voteOnProblem as RequestHandler
);

export default router;
