import { Request, Response } from "express";
import { ApiError, ApiResponse, asyncHandler } from "express-strategy";
import { pollBatchResult, submitBatch } from "../utils/judge0.utils";
import { TestCaseService } from "../services/TestCase.service";

export class ExecuteCode {
  constructor(private testCaseSerive: TestCaseService) {}
  executeCode = asyncHandler(async (req: Request, res: Response) => {
    const {
      source_code,
      language_id,
      stdin,
      expected_outputs,
      problemId,
      mode = "run",
    } = req.body;

    if (!source_code || !language_id) {
      throw new ApiError(
        400,
        "Missing required fields: source_code or language_id"
      );
    }

    let testInputs: string[] = stdin;
    let expectedOutputs: string[] = expected_outputs;

    if (problemId) {
      const testCases = await this.testCaseSerive.getTestCasesFromDB(
        problemId,
        mode
      );
      if (!testCases.length) {
        throw new ApiError(
          404,
          `No ${mode === "run" ? "public" : "available"} test cases found for this problem`
        );
      }
      testInputs = testCases.map((tc) => tc.input);
      expectedOutputs = testCases.map((tc) => tc.output);
    }

    if (
      !Array.isArray(testInputs) ||
      testInputs.length === 0 ||
      !Array.isArray(expectedOutputs) ||
      expectedOutputs.length !== testInputs.length
    ) {
      throw new ApiError(400, "Invalid or missing test cases");
    }

    const submissions = testInputs.map((input) => ({
      source_code,
      language_id,
      stdin: input,
    }));

    const isSQL = language_id === 82;
    const submissionResponse = await submitBatch(submissions, isSQL);
    const tokens = submissionResponse.map((res: any) => res.token);
    const results = await pollBatchResult(tokens, isSQL);

    res
      .status(200)
      .json(new ApiResponse(200, results, "Code executed successfully"));
  });
}
