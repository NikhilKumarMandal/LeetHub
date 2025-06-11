import { NextFunction, Request, Response } from "express";
import { AuthRequest, AuthRequestWithLimit } from "./../types/types";
import { ProblemService } from "../services/Problem.service";
import { ApiError, ApiResponse } from "express-strategy";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { AuthService } from "../services/Auth.service";
import { db } from "../libs/db";
import OpenAI from "openai";
import { PROMPT } from "../utils/prompt";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPEN_ROUTER_API_KEY,
});

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

      const existingReview = await db.review.findFirst({
        where: {
          userId,
          problemId,
          language,
          userCode,
        },
      });

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

      const problem = await this.problemService.uniqueProblem(problemId);
      if (!problem) {
        throw new ApiError(404, "Problem not found!");
      }

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

      // 👇 Clean up markdown if Gemini returned with backticks
      let jsonString = raw;
      const match = raw.match(/```(?:json)?\s*([\s\S]*?)\s*```/i);
      if (match) {
        jsonString = match[1]; // Extract inner JSON
      }
      jsonString = jsonString.trim();

      let parsed;
      try {
        parsed = JSON.parse(jsonString);
      } catch (err) {
        console.error("Failed to parse JSON from Gemini response:", raw);
        throw new ApiError(500, "Invalid JSON response from LLM.");
      }

      const isCorrect = parsed["✅ Is the code correct?"];
      const improvements = parsed["🛠 Improvements"];
      let optimized = parsed["💡 Optimized Solution"];

      // 👇 Remove inner backticks if Gemini returned code block inside string
      if (optimized?.code) {
        optimized.code = optimized.code
          .replace(/```[a-z]*\n?/gi, "")
          .replace(/```/gi, "")
          .trim();
      }

      await db.review.create({
        data: {
          userId,
          problemId,
          userCode,
          language,
          isCorrect,
          improvements,
          optimizedCode: optimized?.code || "",
        },
      });

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

  generateProblem = async (
    req: AuthRequest,
    res: Response,
    next: NextFunction
  ) => {
    const { jobPosition, jobDescription, duration, type } = req.body;

    const FINAL_PROMPRT = PROMPT.replace("{{job Title}}", jobPosition)
      .replace("{{jobDescription}}", jobDescription)
      .replace("{{duration}}", duration)
      .replace("{{type}}", type);

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
      const result = await model.generateContent({
        contents: [
          {
            role: "user",
            parts: [{ text: FINAL_PROMPRT }],
          },
        ],
      });

      const raw = await result.response.text();
      let jsonString = raw;
      const match = raw.match(/```(?:json)?\s*([\s\S]*?)\s*```/i);
      if (match) {
        jsonString = match[1]; // Extract inner JSON
      }
      jsonString = jsonString.trim();

      let parsed;
      try {
        parsed = JSON.parse(jsonString);
      } catch (err) {
        console.error("Failed to parse JSON from Gemini response:", raw);
        throw new ApiError(500, "Invalid JSON response from LLM.");
      }

      const userId = req.auth.sub;
      const savedInterview = await db.interview.create({
        data: {
          userId,
          jobPosition,
          jobDescription,
          duration,
          type,
          questionList: parsed,
        },
      });

      res
        .status(200)
        .json(
          new ApiResponse(200, savedInterview, "Generate problem successfully")
        );
    } catch (error) {
      next(error);
      return;
    }
  };

  getInterviewById = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const interview = await db.interview.findUnique({
        where: {
          id,
        },
      });

      res
        .status(200)
        .json(new ApiResponse(200, interview, "Fected interview by id"));
    } catch (error) {
      console.error(error);
      throw new ApiError(500, "somthing went wrong!");
    }
  };
}
