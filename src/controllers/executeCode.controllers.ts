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
import { PlaylistService } from "../services/Playlist.service";
import {
  extractFunctionBody,
  extractFunctionNamehello,
  injectLogicHere,
} from "../utils/functionCode";

export class ExecuteCode {
  constructor(
    private testCaseSerive: TestCaseService,
    private submissionService: SubmissionService,
    private playlistService: PlaylistService,
    private problemService: ProblemService
  ) {
    this.executeCode = this.executeCode.bind(this);
  }

  executeCode = async (req: Request, res: Response, next: NextFunction) => {
    const { source_code, language_id, problemId, mode = "run" } = req.body;

    const userId = (req as any).auth?.sub;
    console.log("languageId", language_id);
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
      const language = getLanguageName(language_id).toUpperCase(); // "JAVASCRIPT", etc.

      const isSQL = language_id === 82;

      if (isSQL) {
        const testInputs = testCases.map((tc) => tc.input);
        const expectedOutputs = testCases.map((tc) => tc.output);

        const submissions = testInputs.map((input) => ({
          source_code,
          language_id,
          stdin: input,
        }));

        const submissionResponse = await submitBatch(submissions, isSQL);
        const tokens = submissionResponse.map((res: any) => res.token);
        const results = await pollBatchResult(tokens, isSQL);
        console.log(results);

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

        // ⏬ For `submit`, save submission logic
        if (mode === "submit") {
          const allPassed = formattedResults.every((r: any) => r.passed);

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
              ? JSON.stringify(
                  formattedResults.map((r: any) => r.compile_output)
                )
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
            const { playlistId } = req.body;
            if (playlistId) {
              await this.playlistService.markProblemAsSolvedInPlaylist({
                playlistId,
                userId,
                problemId,
              });
            }
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
                "SQL code submitted successfully"
              )
            );
        }

        // ⏬ For `run`, just return results
        return res
          .status(200)
          .json(
            new ApiResponse(
              200,
              formattedResults,
              "SQL code executed successfully"
            )
          );
      }

      const problem = (await this.problemService.problemById(problemId)) as any;

      const baseTemplate = problem?.codeSnippets[language];
      const functionName = extractFunctionNamehello(baseTemplate, language);

      console.log("functionName", functionName);

      let userLogic = extractFunctionBody(
        source_code,
        functionName!,
        language.toLocaleLowerCase()
      );
      console.log("-------------");

      console.log(userLogic, "userLogic");
      console.log("-------------");
      const fullSourceCode = injectLogicHere(
        baseTemplate,
        functionName!,
        userLogic,
        language.toLocaleLowerCase()
      );
      console.log("fullSourceCode", fullSourceCode);
      const submissions = testInputs.map((input) => ({
        source_code: fullSourceCode,
        language_id,
        stdin: input,
      }));
      //console.log("submission",submissions);

      const submissionResponse = await submitBatch(submissions, isSQL);
      const tokens = submissionResponse.map((res: any) => res.token);
      const results = await pollBatchResult(tokens, isSQL);
      //console.log(results,"result");

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

        if (allPassed) {
          await this.testCaseSerive.upsert(userId, problemId);
          const { playlistId } = req.body;
          if (playlistId) {
            await this.playlistService.markProblemAsSolvedInPlaylist({
              playlistId,
              userId,
              problemId,
            });
          }
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
  //   const { source_code, language_id, problemId, mode = "run" } = req.body;
  //   const userId = (req as any).auth?.sub;

  //   if (!source_code || !language_id || !problemId) {
  //     return next(
  //       new ApiError(400, "Missing required fields: source_code, language_id, or problemId")
  //     );
  //   }

  //   try {
  //     const problem = await this.problemService.problemById(problemId);
  //     const testCases = await this.testCaseSerive.getTestCasesFromDB(problemId, mode);
  //     if (!testCases.length) {
  //       throw new ApiError(404, `No ${mode === "run" ? "public" : "available"} test cases found`);
  //     }

  //     const testInputs = testCases.map((tc) => tc.input);
  //     const expectedOutputs = testCases.map((tc) => tc.output);

  //     const functionName = extractFunctionName(source_code, language_id);

  //     // const wrappedCode = getWrappedCode({
  //     //   userCode: source_code,
  //     //   languageId: language_id,
  //     //   testCaseInputs: testInputs,
  //     //   functionName,
  //     // });

  //     console.log(source_code);

  //     const langName = getLanguageName(language_id).toUpperCase(); // e.g., "PYTHON", "JAVA", etc.

  //     const wrapperTemplate = (problem!.executionWrappers as Record<string, string>)?.[langName];
  //     console.log(problem,"problem");

  //     console.log("wrapper ",wrapperTemplate)
  //   if (!wrapperTemplate) {
  //     throw new ApiError(400, `No execution wrapper found for language: ${langName}`);
  //   }

  //   // Replace the user code in wrapper template
  //   const wrappedCode = injectUserCodeIntoWrapper(wrapperTemplate, source_code, langName);

  //   const submissions = testInputs.map((input) => ({
  //     source_code: wrappedCode,
  //     language_id,
  //     stdin: input,
  //   }));

  //     const isSQL = language_id === 82;
  //     const submissionResponse = await submitBatch(submissions, isSQL);
  //     const tokens = submissionResponse.map((res: any) => res.token);
  //     const results = await pollBatchResult(tokens, isSQL);

  //     const result = results[0];
  //     const formattedResult = {
  //       testCase: testInputs.join("\n"),
  //       expected_output: expectedOutputs[0]?.trim(),
  //       actual_output: result.stdout?.trim(),
  //       passed: result.stdout?.trim() === expectedOutputs[0]?.trim(),
  //       status: result.status?.description || "Unknown",
  //       time: result.time,
  //       memory: result.memory,
  //       stderr: result.stderr,
  //       compile_output: result.compile_output,
  //     };

  //     return res
  //       .status(200)
  //       .json(new ApiResponse(200, formattedResult, "Code executed successfully"));
  //   } catch (error) {
  //     next(error);
  //   }
  // };
}
