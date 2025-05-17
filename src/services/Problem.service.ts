import { Difficulty } from "./../generated/prisma/index.d";
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


  async getProblemsPaginated(
    skip: number,
    limit: number,
    validatedQuery: ProblemQueryParams,
    userId: string
  ) {
    const problems =  await db.problem.findMany({
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

    let solvedProblemIds = new Set<string>();

  if (userId) {
    // Get all problem IDs the user has solved from the current filtered list
    const solvedProblems = await db.problemSolved.findMany({
      where: {
        userId,
        problem: {
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
      },
      select: { problemId: true },
    });

    solvedProblemIds = new Set(solvedProblems.map((p) => p.problemId));

  }

  // Add `isSolved` flag to each problem
  const problemsWithFlag = problems.map((problem) => ({
    ...problem,
    isSolved: solvedProblemIds.has(problem.id),
  }));
    
  return {
    problems: problemsWithFlag,
    solvedCount: solvedProblemIds.size,
  }

  }

  async getTotalProblemCount(validatedQuery: ProblemQueryParams) {
    return await db.problem.count({
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
        ...(validatedQuery.difficulty && {
          difficulty: validatedQuery.difficulty,
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
