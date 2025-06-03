import { NextFunction, Response } from "express";
import { AuthRequest, AuthRequestWithLimit } from "./../types/types";
import { ProblemService } from "../services/Problem.service";
import { ApiError, ApiResponse } from "express-strategy";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { AuthService } from "../services/Auth.service";
import { db } from "../libs/db";

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
    try {
      const userId = req.auth.sub;
      const remaining = req.questionsRemaining;
      const { problemId, userCode, language } = req.body;

      if (!problemId || !userCode || !language) {
        throw new ApiError(400, "Missing required fields!");
      }

      // 1. Check for existing review
      const existingReview = await db.review.findFirst({
        where: {
          userId,
          problemId,
          language,
          userCode, // Ensures exact code match
        },
      });
      console.log(existingReview, "existingReview");

      if (existingReview) {
        return res.status(200).json(
          new ApiResponse(
            200,
            {
              data: {
                "✅ Is the code correct?": existingReview.isCorrect,
                "🛠 Improvements": existingReview.improvements,
                "💡 Optimized Solution": {
                  language: existingReview.language,
                  code: existingReview.optimizedCode,
                },
              },
              remaining,
              fromCache: true,
            },
            "Returned cached review"
          )
        );
      }

      // 2. Fetch the problem
      const problem = await this.problemService.uniqueProblem(problemId);
      if (!problem) {
        throw new ApiError(404, "Problem not found!");
      }

      // 3. Generate prompt
      const systemPrompt = `
        You are a coding Mentor. Your job is to:
        1. Validate user-submitted code for correctness based on a problem description.
        2. Suggest improvements to code quality and performance.
        3. Provide an improved or optimized version if applicable.
        Return your answer in three sections:
        ✅ Is the code correct?
        🛠 Improvements
        💡 Optimized Solution

        IMPORTANT:
        - Respond with *only* valid raw JSON.
        - Do NOT include markdown, code fences, comments, or extra formatting.
        - The format must be a raw JSON object.
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
      const result = await model.generateContent({
        contents: [
          {
            role: "user",
            parts: [{ text: `${systemPrompt}\n\n${userPrompt}` }],
          },
        ],
      });

      const raw = await result.response.text();
      const jsonString =
        raw.match(/```json\s*([\s\S]*?)\s*```/i)?.[1] || raw.trim();
      const parsed = JSON.parse(jsonString);

      const isCorrect = parsed["✅ Is the code correct?"];
      const improvements = parsed["🛠 Improvements"];
      const optimized = parsed["💡 Optimized Solution"];

      // 4. Save to DB
      await db.review.create({
        data: {
          userId,
          problemId,
          userCode,
          language,
          isCorrect,
          improvements,
          optimizedCode: optimized.code,
        },
      });

      // 5. Update user usage
      await this.userService.updateLimit(userId);

      return res.status(200).json(
        new ApiResponse(
          200,
          {
            data: {
              "✅ Is the code correct?": isCorrect,
              "🛠 Improvements": improvements,
              "💡 Optimized Solution": optimized,
            },
            remaining,
            fromCache: false,
          },
          "Generated successfully"
        )
      );
    } catch (err) {
      next(err);
    }
  };
}
