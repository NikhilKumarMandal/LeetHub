import { Difficulty } from './../generated/prisma/index.d';
import { db } from "./../libs/db";
import { ProblemData, ProblemQueryParams } from "../types/types";

export class ProblemService {
  async create(problemData: ProblemData) {
    return await db.problem.create({
      data: {
        ...problemData,
      },
    });
  }

  async getProblem() {
    return await db.problem.findMany();
  }

  async findProblemById(id: string) {
    return await db.problem.findUnique({
      where: {
        id,
      },
    });
  }

  async deleteProblem(id: string) {
    return await db.problem.delete({
      where: {
        id,
      },
    });
  }

  async update(where: { id: string }, data: ProblemData) {
    return db.problem.update({
      where,
      data,
    });
  }

  async deleteTestCase(where: { problemId: string }) {
    return await db.problemTestCase.deleteMany({
      where,
    });
  }

  async findMany(id: string) {
    await db.problem.findMany({
      where: {
        solvedBy: {
          some: {
            userId: id,
          },
        },
      },
      include: {
        solvedBy: {
          where: {
            userId: id,
          },
        },
      },
    });
  }

  getProblemsPaginated(
    skip: number,
    limit: number,
    validatedQuery: ProblemQueryParams
  ) {
    return db.problem.findMany({
      where: {
        ...(validatedQuery.title && {
          title: {
            contains: validatedQuery.title,
            mode: "insensitive",
          },
        }),
        ...(validatedQuery.difficulty && {
          difficulty: validatedQuery.difficulty,
        }),
        ...(validatedQuery.problemNumber && {
          problemNumber: validatedQuery.problemNumber,
        }),
        ...(validatedQuery.topic &&
          (Array.isArray(validatedQuery.topic)
            ? {
                topic: {
                  hasSome: validatedQuery.topic,
                },
              }
            : {
                topic: {
                  has: validatedQuery.topic,
                },
              })),
      },
      skip,
      take: limit,
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  // getTotalProblemCount() {
  //   return db.problem.count();
  // }

  getTotalProblemCount(validatedQuery: ProblemQueryParams) {
    return db.problem.count({
      where: {
        ...(validatedQuery.title && {
          title: {
            contains: validatedQuery.title,
            mode: "insensitive",
          },
        }),
        ...(validatedQuery.problemNumber && {
          problemNumber: validatedQuery.problemNumber,
        }),
        ...(validatedQuery.topic &&
          (Array.isArray(validatedQuery.topic)
            ? {
                topic: {
                  hasSome: validatedQuery.topic,
                },
              }
            : {
                topic: {
                  has: validatedQuery.topic,
                },
              })),
      },
    });
  }
}
