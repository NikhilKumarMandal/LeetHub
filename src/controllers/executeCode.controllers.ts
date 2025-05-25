import { NextFunction, Request, Response } from "express";
import { ApiError, ApiResponse } from "express-strategy";
import {
  getLanguageName,
  pollBatchResult,
  submitBatch,
} from "../utils/judge0.utils";
import { TestCaseService } from "../services/TestCase.service";
import { SubmissionService } from "../services/Submission.service";
import { ProblemService } from "../services/Problem.service";

export class ExecuteCode {
  constructor(
    private testCaseSerive: TestCaseService,
    private submissionService: SubmissionService,
    private problemService: ProblemService
  ) {}

  executeCode = async (req: Request, res: Response, next: NextFunction) => {
    const {
      source_code,
      language_id,
      problemId,
      mode = "run", // "run" or "submit"
    } = req.body;

    const userId = (req as any).auth?.sub;

    if (!source_code || !language_id || !problemId) {
      return next(
        new ApiError(
          400,
          "Missing required fields: source_code, language_id, or problemId"
        )
      );
    }

    try {
      // Fetch test cases from DB
      const testCases = await this.testCaseSerive.getTestCasesFromDB(
        problemId,
        mode
      );
      if (!testCases.length) {
        throw new ApiError(
          404,
          `No ${mode === "run" ? "public" : "available"} test cases found`
        );
      }

      const testInputs = testCases.map((tc) => tc.input);
      const expectedOutputs = testCases.map((tc) => tc.output);

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
        compile_output: result.compile_output,
      }));

      // Handle submission logic
      if (mode === "submit") {
        const allPassed = formattedResults.every((res: any) => res.passed);

        const submissionData = {
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
          memory: JSON.stringify(
            formattedResults.map((r: any) => String(r.memory))
          ),
          time: JSON.stringify(
            formattedResults.map((r: any) => String(r.time))
          ),
        };

        const submission =
          await this.testCaseSerive.createSubmission(submissionData);

        if (allPassed) {
          await this.testCaseSerive.upsert(userId, problemId);
        }

        const testCaseResults = formattedResults.map((result: any) => ({
          submissionId: submission.id,
          testCase: result.testCase,
          passed: result.passed,
          stdout: result.actual_output,
          expected: result.expected_output,
          stderr: result.stderr ?? undefined,
          compileOutput: result.compile_output ?? undefined,
          status: result.status,
          memory: String(result.memory) ?? undefined,
          time: String(result.time) ?? undefined,
        }));

        await this.testCaseSerive.createMany(testCaseResults);

        const submissionDetail = await this.submissionService.findUnique(
          submission.id
        );

        return res
          .status(200)
          .json(
            new ApiResponse(
              200,
              submissionDetail,
              "Code submitted successfully"
            )
          );
      }

      // Just running the code, not submitting
      return res
        .status(200)
        .json(
          new ApiResponse(200, formattedResults, "Code executed successfully")
        );
    } catch (error) {
      next(error);
    }
  };

  // executeCode = async (req: Request, res: Response, next: NextFunction) => {
  //   const {
  //     source_code,
  //     language_id,
  //     problemId,
  //     mode = "run", // default mode
  //   } = req.body;

  //   const userId = (req as any).auth?.sub;

  //   if (!source_code || !language_id || !problemId) {
  //     return next(
  //       new ApiError(400, "Missing required fields: source_code, language_id, or problemId")
  //     );
  //   }

  //   try {
  //     // Step 1: Load problem with starter function
  //     const problem = await this.problemService.findProblemById(problemId); // replace with your service
  //     if (!problem) {
  //       return next(new ApiError(404, "Problem not found"));
  //     }
  //     const starterFunction =
  //     typeof problem.starterFunction === "string"
  //       ? problem.starterFunction.trim()
  //       : "";

  //    const fullSourceCode = `${starterFunction}\n\n${source_code.trim()}`

  //     // Step 2: Get test cases
  //     const testCases = await this.testCaseSerive.getTestCasesFromDB(problemId, mode);
  //     if (!testCases.length) {
  //       throw new ApiError(404, `No ${mode === "run" ? "public" : "available"} test cases found`);
  //     }

  //     const testInputs = testCases.map(tc => tc.input);
  //     const expectedOutputs = testCases.map(tc => tc.output);

  //     // Step 3: Submit for execution
  //     const isSQL = language_id === 82;
  //     const submissions = testInputs.map(input => ({
  //       source_code: fullSourceCode,
  //       language_id,
  //       stdin: input,
  //     }));

  //     const submissionResponse = await submitBatch(submissions, isSQL);
  //     const tokens = submissionResponse.map((res: any) => res.token);
  //     const results = await pollBatchResult(tokens, isSQL);

  //     // Step 4: Format results
  //     const formattedResults = results.map((result: any, index: number) => ({
  //       testCase: testInputs[index],
  //       expected_output: expectedOutputs[index]?.trim(),
  //       actual_output: result.stdout?.trim(),
  //       passed: result.stdout?.trim() === expectedOutputs[index]?.trim(),
  //       status: result.status?.description || "Unknown",
  //       time: result.time,
  //       memory: result.memory,
  //       stderr: result.stderr,
  //       compile_output: result.compile_output,
  //     }));

  //     // Step 5: Handle submission
  //     if (mode === "submit") {
  //       const allPassed = formattedResults.every((res:any) => res.passed);

  //       const submissionData = {
  //         userId,
  //         problemId,
  //         sourceCode: source_code,
  //         language: getLanguageName(language_id),
  //         stdin: testInputs.join("\n"),
  //         stdout: JSON.stringify(formattedResults.map((r:any) => r.actual_output)),
  //         stderr: formattedResults.some((r:any) => r.stderr)
  //           ? JSON.stringify(formattedResults.map((r:any) => r.stderr))
  //           : null,
  //         compileOutput: formattedResults.some((r:any) => r.compile_output)
  //           ? JSON.stringify(formattedResults.map((r:any) => r.compile_output))
  //           : null,
  //         status: allPassed ? "Accepted" : "Wrong Answer",
  //         memory: JSON.stringify(formattedResults.map((r:any) => String(r.memory))),
  //         time: JSON.stringify(formattedResults.map((r:any) => String(r.time))),
  //       };

  //       const submission = await this.testCaseSerive.createSubmission(submissionData);
  //       if (allPassed) {
  //         await this.testCaseSerive.upsert(userId, problemId);
  //       }

  //       const testCaseResults = formattedResults.map((result:any) => ({
  //         submissionId: submission.id,
  //         testCase: result.testCase,
  //         passed: result.passed,
  //         stdout: result.actual_output,
  //         expected: result.expected_output,
  //         stderr: result.stderr ?? undefined,
  //         compileOutput: result.compile_output ?? undefined,
  //         status: result.status,
  //         memory: String(result.memory) ?? undefined,
  //         time: String(result.time) ?? undefined,
  //       }));

  //       await this.testCaseSerive.createMany(testCaseResults);

  //       const submissionDetail = await this.submissionService.findUnique(submission.id);

  //       return res.status(200).json(new ApiResponse(200, submissionDetail, "Code submitted successfully"));
  //     }

  //     // Step 6: Handle run-only mode
  //     return res.status(200).json(new ApiResponse(200, formattedResults, "Code executed successfully"));
  //   } catch (error) {
  //     next(error);
  //   }
  // };
}
