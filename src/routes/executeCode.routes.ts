import express from "express";
import authenticate from "../middlewares/auth.middleware";
import { ExecuteCode } from "../controllers/executeCode.controllers";
import { TestCaseService } from "../services/TestCase.service";

const router = express.Router();

const testCaseService = new TestCaseService();

const executeCode = new ExecuteCode(testCaseService);

router.post("/execute", authenticate, executeCode.executeCode);

export default router;
