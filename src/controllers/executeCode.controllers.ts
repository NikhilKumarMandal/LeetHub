import { ApiError, ApiResponse, asyncHandler } from "express-strategy";
import {  Request, Response } from "express";
import { pollBatchResult, submitBatch } from "../utils/judge0.utils";


export class ExecuteCode{

    executeCode = asyncHandler(async (req: Request, res: Response) => {
        const { source_code, language_id, stdin, expected_outputs, problemId } = req.body;

        if (
            !Array.isArray(stdin) ||
            stdin.length === 0 ||
            !Array.isArray(expected_outputs) ||
            expected_outputs.length !== stdin.length
        ) {
            throw new ApiError(400, "Invalid or Missing Test Case!");
        };

        const submission = stdin.map((input) => ({
            source_code,
            language_id,
            stdin: input,
        }));
        let isSQL = false;

        if (language_id === 82) {
            isSQL = true;
        };

        const submitResponse = await submitBatch(submission,isSQL);

        const tokens = submitResponse.map((res: any) => res.token);

        const result = await pollBatchResult(tokens, isSQL);

        res.status(200).json(new ApiResponse(200,result,"Code Executed!"))
    })
}