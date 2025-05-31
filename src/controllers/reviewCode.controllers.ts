import { NextFunction, Response } from "express";
import { AuthRequest } from "./../types/types";
import OpenAI from "openai";
import { ProblemService } from "../services/Problem.service";
import { ApiError, ApiResponse } from "express-strategy";

const client = new OpenAI({
  apiKey: process.env.OPEN_AI_API_KEY,
});

export class Review {
  constructor(private problemService: ProblemService) {}

  reviewUserCode = async (
    req: AuthRequest,
    res: Response,
    next: NextFunction
  ) => {
    const userId = req.auth.sub;

    const { problemId, userCode, language } = req.body;

    if (!problemId || !userCode) {
      throw new ApiError(400, "Missinig required fileds!");
    }

    const problem = await this.problemService.uniqueProblem(problemId);

    if (!problem) {
      throw new ApiError(400, "Problem not found!");
    }

    const systemPrompt = `
        You are a coding assistant. Your job is to:
        1. Validate user-submitted code for correctness based on a problem description.
        2. Suggest improvements to code quality and performance.
        3. Provide an improved or optimized version if applicable.
        Return your answer in three sections:
        ✅ Is the code correct?
        🛠 Improvements
        💡 Optimized Solution
            `.trim();

    const userPrompt = `
        Problem Description:
        ${problem.description}
        
        Constraints:
        ${problem.constraints || "N/A"}
        
        Examples:
        ${problem.examples || "N/A"}
        
        ---
        
        User Code:
        \`\`\`${language}
        ${userCode}
        \`\`\`
            `.trim();

    const completion = await client.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
      temperature: 0.3,
    });

    const feedback = completion.choices[0].message.content;

    res
      .status(200)
      .json(new ApiResponse(200, feedback, "generate successfully"));
  };
}
