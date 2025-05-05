import express, { RequestHandler } from "express";
import authenticate from "../middlewares/auth.middleware";
import { Submission } from "../controllers/submission.controllers";
import { SubmissionService } from "../services/Submission.service";

const router = express.Router();

const submissionService = new SubmissionService();
const submissionController = new Submission(submissionService);

router.get(
  "/submission",
  authenticate,
  submissionController.getAllSubmission as RequestHandler
);

router.get(
  "/get-submission/:id",
  authenticate,
  submissionController.getSubmissionsForProblem as RequestHandler
);

router.get(
  "/get-submission-count/:id",
  authenticate,
  submissionController.getALlTheSubmissionForProblem
);

export default router;
