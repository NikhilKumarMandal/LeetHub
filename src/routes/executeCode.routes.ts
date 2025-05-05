import express, { RequestHandler } from "express";
import authenticate from "../middlewares/auth.middleware";
import { ExecuteCode } from "../controllers/executeCode.controllers";
import { TestCaseService } from "../services/TestCase.service";
import { SubmissionService } from "../services/Submission.service";

const router = express.Router();

const testCaseService = new TestCaseService();
const submissionService = new SubmissionService();

const executeCode = new ExecuteCode(testCaseService, submissionService);

router.post(
  "/execute",
  authenticate,
  executeCode.executeCode as RequestHandler
);

export default router;
