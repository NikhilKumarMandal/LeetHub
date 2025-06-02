import { NextFunction, Response } from "express";
import { AuthRequest, AuthRequestWithLimit } from "./../types/types";
import { ProblemService } from "../services/Problem.service";
import { ApiError, ApiResponse } from "express-strategy";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { AuthService } from "../services/Auth.service";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export class Review {
  constructor(
    private problemService: ProblemService,
    private userService: AuthService
  ) {}

  reviewUserCode = async (
    req: AuthRequestWithLimit,
    res: Response,
    next: NextFunction
  ) => {
    const userId = req.auth.sub;
    const remaining = req.questionsRemaining;
    const { problemId, userCode, language } = req.body;

    if (!problemId || !userCode) {
      throw new ApiError(400, "Missinig required fileds!");
    }

    const problem = await this.problemService.uniqueProblem(problemId);

    if (!problem) {
      throw new ApiError(400, "Problem not found!");
    }

    const systemPrompt = `
        You are a coding Mentro. Your job is to:
        1. Validate user-submitted code for correctness based on a problem description.
        2. Suggest improvements to code quality and performance.
        3. Provide an improved or optimized version if applicable.
        Return your answer in three sections:
        ✅ Is the code correct?
        🛠 Improvements
        💡 Optimized Solution

        IMPORTANT:
- Respond with *only* valid raw JSON.
- Do NOT include markdown, code fences, comments, or any extra formatting.
- The format must be a raw JSON object.

Repeat: Do not wrap your output in markdown or code fences.
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

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = `${systemPrompt}\n\n${userPrompt}`;

    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
    });

    const raw = await result.response.text();
    const match = raw.match(/```json\s*([\s\S]*?)\s*```/i);
    const jsonString = match ? match[1] : raw.trim();
    const data = JSON.parse(jsonString);

    await this.userService.updateLimit(userId);

    res
      .status(200)
      .json(new ApiResponse(200, { data, remaining }, "generate successfully"));
  };
}
