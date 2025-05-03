import express, { RequestHandler } from "express";
import { Problem } from "../controllers/problem.controllers";
import { ProblemService } from "../services/Problem.service";
import logger from "../utils/logger";
import authenticate from "../middlewares/auth.middleware";
import { canAccess } from "../middlewares/canAccess.midddleware";
import { Roles } from "../types/types";

const router = express.Router();

const problemService = new ProblemService();

const problemController = new Problem(problemService, logger);

router.post(
  "/create-problem",
  authenticate,
  canAccess([Roles.ADMIN]),
  problemController.create as RequestHandler
);

router.get(
  "/get-problem",
  authenticate,
  problemController.getAllProblem
);

router.get(
  "/get-problem/:id",
  authenticate,
  problemController.getProblemById
);

router.delete(
  "/delete-problem/:id",
  authenticate,
  problemController.deleteProblem
);

router.put(
  "/update-problem/:id",
  authenticate,
  canAccess([Roles.ADMIN]),
  problemController.updateProblem as RequestHandler
);

export default router;
