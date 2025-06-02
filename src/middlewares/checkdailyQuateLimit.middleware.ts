import { NextFunction, Request, Response } from "express";
import { AuthRequest } from "../types/types";
import { db } from "../libs/db";
import { ApiError } from "express-strategy";

export const checkDailyQuestionLimit = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const userId = req.auth.sub;

  try {
    const user = await db.user.findUnique({
      where: { id: userId },
    });

    console.log("User", user);

    const today = new Date();
    const lastDate = user!.lastQuestionDate;

    const isSameDay =
      lastDate && lastDate.toDateString() === today.toDateString();

    if (!isSameDay) {
      await db.user.update({
        where: { id: userId },
        data: {
          dailyQuestionCount: 0,
          lastQuestionDate: today,
        },
      });
    }

    const updatedUser = await db.user.findUnique({
      where: { id: userId },
    });
    const currentCount = updatedUser!.dailyQuestionCount;
    console.log(currentCount);

    const maxQuestionsPerDay = 3;
    const remaining = maxQuestionsPerDay - currentCount;

    if (currentCount >= maxQuestionsPerDay) {
      throw new ApiError(
        429,
        `❌ Daily question limit reached. Try again tomorrow.`
      );
    }

    (req as any).questionsRemaining = remaining;

    next();
  } catch (error) {
    next(error);
    return;
  }
};
