import { Request, NextFunction, Response } from "express";
import { AuthRequest } from "../types/types";
import { SubmissionService } from "../services/Submission.service";
import { ApiResponse, asyncHandler } from "express-strategy";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export class Submission {
  constructor(private submissionService: SubmissionService) {}
  getAllSubmission = async (
    req: AuthRequest,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const userId = req.auth.sub;

      const submissions = await this.submissionService.findMany(userId);

      res
        .status(200)
        .json(
          new ApiResponse(200, submissions, "Submission fected successfully")
        );
    } catch (error) {
      next(error);
      return;
    }
  };

  getSubmissionsForProblem = async (
    req: AuthRequest,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const userId = req.auth.sub;
      const { problemId } = req.params;

      const submissionForProblem = await this.submissionService.findMany(
        userId,
        problemId
      );

      res
        .status(200)
        .json(
          new ApiResponse(
            200,
            submissionForProblem,
            "Submission for problem fected successfully"
          )
        );
    } catch (error) {
      next(error);
      return;
    }
  };

  getALlTheSubmissionForProblem = asyncHandler(
    async (req: Request, res: Response) => {
      const { problemId } = req.params;

      const count = await this.submissionService.count(problemId);

      res
        .status(200)
        .json(
          new ApiResponse(200, count, "Submission count fected successfully")
        );
    }
  );

  getSubmissionActivity = async (
    req: AuthRequest,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const userId = req.auth.sub;

      const submissions = await this.submissionService.groupBy(userId);

      const getSubmissionBystatus =
        await this.submissionService.findManyByStatus(userId);

      const uniqueProblemMap = new Map();
      getSubmissionBystatus.forEach((s) => {
        uniqueProblemMap.set(s.problemId, s);
      });
      const uniqueSolved = Array.from(uniqueProblemMap.values());

      const difficultyCounts: any = {
        easy: 0,
        medium: 0,
        hard: 0,
      };

      uniqueSolved.forEach((s) => {
        const diff = s.problem.difficulty.toLowerCase();
        if (difficultyCounts[diff] !== undefined) {
          difficultyCounts[diff]++;
        }
      });

      const allProblems = await this.submissionService.getAllProblem();

      const totalProblems = allProblems.length;

      const totalByDifficulty = allProblems.reduce(
        (acc: any, p: any) => {
          const d = p.difficulty.toLowerCase();
          if (acc[d] !== undefined) acc[d]++;
          return acc;
        },
        { easy: 0, medium: 0, hard: 0 }
      );

      const languageStats: Record<string, number> = {};
      getSubmissionBystatus.forEach((s: any) => {
        if (!languageStats[s.language]) {
          languageStats[s.language] = 1;
        } else {
          languageStats[s.language]++;
        }
      });

      const grouped: Record<string, number> = {};

      submissions.forEach((item) => {
        const date = item.createdAt.toISOString().split("T")[0];
        grouped[date] = (grouped[date] || 0) + 1;
      });

      const submissionActivity = Object.entries(grouped).map(
        ([date, count]) => ({
          date,
          count,
        })
      );

      const totalSubmissions = submissions.length;
      const activeDays = Object.keys(grouped).length;
      // Max streak calculation
      const sortedDates = Object.keys(grouped).sort();
      let maxStreak = 0;
      let currentStreak = 0;
      let prevDate: Date | null = null;

      sortedDates.forEach((dateStr) => {
        const currentDate = new Date(dateStr);
        if (prevDate) {
          const diff =
            (currentDate.getTime() - prevDate.getTime()) /
            (1000 * 60 * 60 * 24);
          if (diff === 1) {
            currentStreak++;
          } else if (diff > 1) {
            currentStreak = 1;
          }
        } else {
          currentStreak = 1;
        }
        maxStreak = Math.max(maxStreak, currentStreak);
        prevDate = currentDate;
      });
      res.status(200).json(
        new ApiResponse(
          200,
          {
            submissionActivity,
            totalSubmissions,
            activeDays,
            maxStreak,
            totalSolved: uniqueSolved.length,
            solvedByDifficulty: difficultyCounts,
            totalByDifficulty,
            languageStats,
            totalProblems,
          },
          "Facted succesfully"
        )
      );
    } catch (error) {
      next(error);
      return;
    }
  };

  getSubmissionData = async (
    req: AuthRequest,
    res: Response,
    next: NextFunction
  ) => {
    const userId = req.auth.sub;
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 8;
    const skip = (page - 1) * limit;

    try {
      const [submission, total] = await Promise.all([
        this.submissionService.findManyData(userId, skip, limit),
        this.submissionService.countData(userId),
      ]);

      const problemIds = submission.map((s) => s.problemId);
      const submissionCounts =
        await this.submissionService.countSubmissionsPerProblem(
          userId,
          problemIds
        );

      const userActivity = submission.map((item) => {
        const day = dayjs(item.createdAt).fromNow(true);
        const memoryArray = JSON.parse(item.time!);
        const totalTime = memoryArray.reduce(
          (sum: number, val: number) => sum + Number(val),
          0
        );

        return {
          day,
          problemId: item.problemId,
          title: item.problem.title,
          status: item.status,
          language: item.language,
          runtime: totalTime.toFixed(2),
          totalAttempts: submissionCounts[item.problemId] || 1,
        };
      });

      res.status(200).json(
        new ApiResponse(
          200,
          {
            userActivity,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
            totalSubmissions: total,
          },
          "Fetch submission data"
        )
      );
    } catch (error) {
      next(error);
    }
  };
}
