import { db } from "../libs/db";
import { DiscussionData } from "../types/types";

export class DiscussionService {
  async create(data: DiscussionData) {
    return db.discussion.create({
      data: {
        ...data,
      },
    });
  }
}
