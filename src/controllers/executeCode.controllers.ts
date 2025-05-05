import { NextFunction, Request, Response } from "express";
import { ApiError, ApiResponse, asyncHandler } from "express-strategy";
import {
  getLanguageName,
  pollBatchResult,
  submitBatch,
} from "../utils/judge0.utils";
import { TestCaseService } from "../services/TestCase.service";
import { AuthRequest, Submission } from "../types/types";
import { SubmissionService } from "../services/Submission.service";
import { db } from "../libs/db";

export class ExecuteCode {
  constructor(
    private testCaseSerive: TestCaseService,
    private submissionService: SubmissionService
  ) {}

  executeCode = async (req: AuthRequest, res: Response, next: NextFunction) => {
    const {
      source_code,
      language_id,
      stdin,
      expected_outputs,
      problemId,
      mode = "run",
    } = req.body;

    const userId = req.auth.sub;

    if (!source_code || !language_id) {
      throw new ApiError(
        400,
        "Missing required fields: source_code or language_id"
      );
    }

    let testInputs: string[] = stdin;
    let expectedOutputs: string[] = expected_outputs;

    try {
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

      const formattedResults = results.map((result: any, index: number) => ({
        testCase: testInputs[index],
        expected_output: expectedOutputs[index]?.trim(),
        actual_output: result.stdout?.trim(),
        passed: result.stdout?.trim() === expectedOutputs[index]?.trim(),
        status: result.status?.description || "Unknown",
        time: result.time,
        memory: result.memory,
        stderr: result.stderr,
      }));

      let submissionTestCase;

      if (mode === "submit") {
        const allPassed = formattedResults.every((res: any) => res.passed);

        const submissionData: Submission = {
          userId,
          problemId,
          sourceCode: source_code,
          language: getLanguageName(language_id),
          stdin: testInputs.join("\n"),
          stdout: JSON.stringify(
            formattedResults.map((r: any) => r.actual_output)
          ),
          stderr: formattedResults.some((r: any) => r.stderr)
            ? JSON.stringify(formattedResults.map((r: any) => r.stderr))
            : null,
          compileOutput: formattedResults.some((r: any) => r.compile_output)
            ? JSON.stringify(formattedResults.map((r: any) => r.compile_output))
            : null,
          status: allPassed ? "Accepted" : "Wrong Answer",
          memory: formattedResults.some((r: any) => r.memory)
            ? JSON.stringify(
                formattedResults.map((r: any) => r.memory?.toString())
              )
            : null,
          time: formattedResults.some((r: any) => r.time)
            ? JSON.stringify(
                formattedResults.map((r: any) => r.time?.toString())
              )
            : null,
        };

        const submission =
          await this.testCaseSerive.createSubmission(submissionData);

        if (allPassed) {
          await this.testCaseSerive.upsert(userId, problemId);
        }

        console.log("formattedResults", formattedResults);

        const testCaseResults = formattedResults.map((result: any) => ({
          submissionId: submission?.id,
          testCase: result.testCase,
          passed: result.passed,
          stdout: result.stdout,
          expected: result.expected_output,
          stderr: result.stderr ?? undefined,
          compileOutput: result.compile_output ?? undefined,
          status: result.status,
          memory: String(result.memory) ?? undefined,
          time: String(result.time) ?? undefined,
        }));

        await this.testCaseSerive.createMany(testCaseResults);
        submissionTestCase = await this.submissionService.findUnique(
          submission.id
        );

        res
          .status(200)
          .json(
            new ApiResponse(
              200,
              submissionTestCase,
              "Code executed successfully"
            )
          );
      }

      res
        .status(200)
        .json(
          new ApiResponse(200, formattedResults, "Code executed successfully")
        );
    } catch (error) {
      next(error);
      return;
    }
  };
}
