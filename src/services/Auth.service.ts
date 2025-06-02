import { db } from "../libs/db";
import { UserData } from "../types/types";

type UserUpdateInput = Parameters<typeof db.user.update>[0]["data"];
export class AuthService {
  async findUnique(where: { id: string } | { email: string }) {
    return await db.user.findUnique({
      where,
      select: {
        name: true,
        password: true,
        id: true,
        role: true,
        email: true,
        refreshToken: true,
        avatar: true,
      },
    });
  }

  async findUniqueSelf(where: { id: string }) {
    return await db.user.findUnique({
      where,
      select: {
        name: true,
        id: true,
        role: true,
        email: true,
        avatar: true,
      },
    });
  }

  async create(userData: UserData) {
    return await db.user.create({
      data: {
        ...userData,
      },
    });
  }

  async update(where: { id: string }, data: UserUpdateInput) {
    return db.user.update({
      where,
      data,
    });
  }

  async findUniqueProblem(userId: string) {
    return await db.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        favoriteProblems: true,
      },
    });
  }

  async updateFavorite(
    userId: string,
    problemId: string,
    isAlreadyFavorited: boolean
  ) {
    return await db.user.update({
      where: { id: userId },
      data: {
        favoriteProblems: {
          [isAlreadyFavorited ? "disconnect" : "connect"]: { id: problemId },
        },
      },
      include: { favoriteProblems: true },
    });
  }

  async updateLimit(userId: string) {
    return await db.user.update({
      where: {
        id: userId,
      },
      data: {
        dailyQuestionCount: { increment: 1 },
      },
    });
  }
}
