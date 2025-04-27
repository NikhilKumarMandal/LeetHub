import { db } from "../libs/db";
import { UserData } from "../types/types";

export class AuthService {
  async findUnique(where:{ email: string }) {
    return await db.user.findUnique({
      where,
    });
    };

    async create( userData: UserData ) {
        return await db.user.create({
            data: {
                ...userData
            }
        })
    }
}
