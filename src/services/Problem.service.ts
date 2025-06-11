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

  async findProblemById(id: string, userId: string) {
    const problem = await db.problem.findUnique({
      where: { id },
      include: {
        testcases: true,
        votes: {
          where: { userId },
          select: { type: true },
        },
      },
    });

    return {
      ...problem,
      vote: problem?.votes?.[0]?.type || null,
      votes: undefined,
    };
  }

  async problemById(id: string) {
    return await db.problem.findUnique({
      where: {
        id,
      },
    });
  }

  async deleteProblem(id: string) {
    await db.playlistProblemSolved.deleteMany({
      where: {
        problemId: id,
      },
    });
    await db.review.deleteMany({
      where: {
        problemId: id,
      },
    });
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

  async uniqueProblem(id: string) {
    return await db.problem.findUnique({
      where: {
        id,
      },
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
    const problems = await db.problem.findMany({
      where: {
        ...(validatedQuery.q &&
          (isNaN(Number(validatedQuery.q))
            ? {
                title: {
                  contains: validatedQuery.q,
                  mode: "insensitive",
                },
              }
            : {
                problemNumber: Number(validatedQuery.q),
              })),
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
        ...(validatedQuery.companyName &&
          (Array.isArray(validatedQuery.companyName)
            ? {
                companyName: {
                  hasSome: validatedQuery.companyName,
                },
              }
            : {
                companyName: {
                  has: validatedQuery.companyName,
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
      const solvedProblems = await db.problemSolved.findMany({
        where: {
          userId,
          problem: {
            ...(validatedQuery.q &&
              (isNaN(Number(validatedQuery.q))
                ? {
                    title: {
                      contains: validatedQuery.q,
                      mode: "insensitive",
                    },
                  }
                : {
                    problemNumber: Number(validatedQuery.q),
                  })),
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
            ...(validatedQuery.companyName &&
              (Array.isArray(validatedQuery.companyName)
                ? {
                    companyName: {
                      hasSome: validatedQuery.companyName,
                    },
                  }
                : {
                    companyName: {
                      has: validatedQuery.companyName,
                    },
                  })),
          },
        },
        select: { problemId: true },
      });

      solvedProblemIds = new Set(solvedProblems.map((p) => p.problemId));
    }
    const userWithFavorites = await db.user.findUnique({
      where: { id: userId },
      select: {
        favoriteProblems: {
          select: { id: true },
        },
      },
    });

    const favoriteProblemIds = new Set(
      userWithFavorites?.favoriteProblems.map((p) => p.id) ?? []
    );

    const problemsWithFlags = problems.map((problem) => ({
      ...problem,
      isSolved: solvedProblemIds.has(problem.id),
      isFavorite: favoriteProblemIds.has(problem.id),
    }));

    const filteredProblems = validatedQuery.status
      ? problemsWithFlags.filter((problem) =>
          validatedQuery.status === "solved"
            ? problem.isSolved
            : !problem.isSolved
        )
      : problemsWithFlags;

    const totalProblem = await db.problem.count();
    return {
      problems: filteredProblems,
      solvedCount: solvedProblemIds.size,
      totalProblem,
    };
  }

  async getTotalProblemCount(validatedQuery: ProblemQueryParams) {
    return await db.problem.count({
      where: {
        ...(validatedQuery.q &&
          (isNaN(Number(validatedQuery.q))
            ? {
                title: {
                  contains: validatedQuery.q,
                  mode: "insensitive",
                },
              }
            : {
                problemNumber: Number(validatedQuery.q),
              })),
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
        ...(validatedQuery.companyName &&
          (Array.isArray(validatedQuery.companyName)
            ? {
                companyName: {
                  hasSome: validatedQuery.companyName,
                },
              }
            : {
                companyName: {
                  has: validatedQuery.companyName,
                },
              })),
      },
    });
  }

  async getAllTopics() {
    return await db.problem.findMany({
      select: {
        topic: true,
        companyName: true,
      },
    });
  }
}
