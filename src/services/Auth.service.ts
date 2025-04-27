import { db } from "../libs/db";
import { UserData } from "../types/types";

export class AuthService {
  async findUnique(where: { id: string } | { email: string }) {
    return await db.user.findUnique({
      where,
      select: {
        name: true,
        password: true,
        id: true,
        role: true,
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
}
