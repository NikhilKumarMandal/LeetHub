import { Prisma } from "@prisma/client";
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
        avatar: true
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

async update(where: { id: string }, data: UserUpdateInput ) {
  return db.user.update({
    where,
    data
  });
}
}
