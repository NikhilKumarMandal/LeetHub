import { AuthRequest } from "./../types/types";
import { NextFunction, Request, Response } from "express";

import { PlaylistData, PlaylistService } from "../services/Playlist.service";
import { ApiError, ApiResponse, asyncHandler } from "express-strategy";
import { uploadOnCloudinary } from "../utils/cloudinary";
import { validationResult } from "express-validator";
import { startOfWeek } from "date-fns";
import { db } from "../libs/db";
export class Playlist {
  constructor(private playlistService: PlaylistService) {}

  createPlaylist = async (
    req: AuthRequest,
    res: Response,
    next: NextFunction
  ) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      throw new ApiError(400, result.array()[0].msg as string);
    }
    const { name, description, summary } = req.body;
    const userId = req.auth.sub;

    try {
      const data: PlaylistData = {
        name,
        description,
        summary,
        userId,
      };

      const playlist = await this.playlistService.create(data);
      console.log(playlist);
      res
        .status(200)
        .json(new ApiResponse(200, playlist, "Playlist created successfully"));
    } catch (error) {
      next(error);
      return;
    }
  };
  fecthPlaylist = asyncHandler(async (req: Request, res: Response) => {
    const playlist = await this.playlistService.getALL();

    res
      .status(200)
      .json(new ApiResponse(200, playlist, "Fetch all Playlist details "));
  });

  getAllListDetails = async (
    req: AuthRequest,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const userId = req.auth.sub;

      const playlists = await this.playlistService.findMany(userId);

      res
        .status(200)
        .json(new ApiResponse(200, playlists, "Playlist fected successfully"));
    } catch (error) {
      next(error);
      return;
    }
  };

  getPlaylistByID = async (
    req: AuthRequest,
    res: Response,
    next: NextFunction
  ) => {
    const { playlistId } = req.params;
    if (!playlistId) {
      throw new ApiError(400, "Playlist ID is missing");
    }

    try {
      const playlist = await this.playlistService.findUnique(playlistId);

      if (!playlist) {
        throw new ApiError(400, "Playlist not found!");
      }

      const groupedProblems: Record<string, any[]> = {};
      const addedProblemIds = new Set<string>();

      for (const problemEntry of playlist.problems) {
        const problem = problemEntry.problem;

        if (addedProblemIds.has(problem.id)) continue;
        addedProblemIds.add(problem.id);

        const topics =
          problem.topic && problem.topic.length > 0
            ? problem.topic
            : ["Uncategorized"];

        const topic = topics[0];

        if (!groupedProblems[topic]) {
          groupedProblems[topic] = [];
        }

        groupedProblems[topic].push(problem);
      }

      const categories = Object.entries(groupedProblems).map(
        ([name, problems]) => ({
          name,
          problems,
        })
      );

      const playlistResponse = {
        id: playlist.id,
        name: playlist.name,
        description: playlist.description,
        createdAt: playlist.createdAt,
        updatedAt: playlist.updatedAt,
        categories,
        summary: playlist.summary,
      };

      res
        .status(200)
        .json(
          new ApiResponse(
            200,
            playlistResponse,
            "Fetched Playlist successfully!"
          )
        );
    } catch (error) {
      next(error);
    }
  };

  addProblemToPlaylist = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      const { playlistId } = req.params;
      const { problemId } = req.body;

      if (!problemId || typeof problemId !== "string") {
        throw new ApiError(400, "Invalid or missing problemId");
      }

      try {
        const problemAdded = await this.playlistService.createMany(
          [problemId],
          playlistId
        );

        res
          .status(200)
          .json(
            new ApiResponse(200, problemAdded, "Problem Added in playlist")
          );
      } catch (error) {
        next(error);
        return;
      }
    }
  );

  deletePlaylist = asyncHandler(async (req: Request, res: Response) => {
    const { playlistId } = req.params;

    await this.playlistService.deletePlaylist(playlistId);

    res
      .status(200)
      .json(new ApiResponse(200, {}, "Playlist deleted successfully"));
  });

  removeProblemFromPlaylist = asyncHandler(
    async (req: Request, res: Response) => {
      const { playlistId } = req.params;
      const { problemIds } = req.body;

      const deletedProblems = await this.playlistService.deleteOne(
        playlistId,
        problemIds
      );

      res
        .status(200)
        .json(
          new ApiResponse(200, deletedProblems, "Problem removed from Playlist")
        );
    }
  );

  getWeeklyPlaylistLeaderboard = async (
    req: AuthRequest,
    res: Response,
    next: NextFunction
  ) => {
    const { playlistId } = req.params;
    const userId = req.auth.sub;

    const startOfThisWeek = startOfWeek(new Date(), { weekStartsOn: 1 });

    try {
      const solves = await db.playlistProblemSolved.findMany({
        where: {
          playlistId,
          solvedAt: { gte: startOfThisWeek },
        },
        select: {
          userId: true,
          solvedAt: true,
        },
        orderBy: {
          solvedAt: "asc",
        },
      });

      const userMap: Record<string, { count: number; earliestSolve: Date }> =
        {};

      for (const solve of solves) {
        if (!userMap[solve.userId]) {
          userMap[solve.userId] = { count: 0, earliestSolve: solve.solvedAt };
        }
        userMap[solve.userId].count++;
      }

      const leaderboardList = Object.entries(userMap).map(([uid, data]) => ({
        userId: uid,
        count: data.count,
        earliestSolve: data.earliestSolve,
      }));

      leaderboardList.sort((a, b) => {
        if (b.count !== a.count) return b.count - a.count;
        return a.earliestSolve.getTime() - b.earliestSolve.getTime();
      });

      type RankedEntry = {
        userId: string;
        count: number;
        earliestSolve: Date;
        rank: number;
      };

      const ranked: RankedEntry[] = leaderboardList.map((entry, index, arr) => {
        let rank = index + 1;
        if (
          index > 0 &&
          entry.count === arr[index - 1].count &&
          entry.earliestSolve.getTime() ===
            arr[index - 1].earliestSolve.getTime()
        ) {
          rank = (arr[index - 1] as RankedEntry).rank;
        }
        return { ...entry, rank };
      });

      const top3Ids = ranked.slice(0, 3).map((u) => u.userId);
      const topUsers = await db.user.findMany({
        where: { id: { in: top3Ids } },
        select: { id: true, name: true, avatar: true },
      });

      const top3 = ranked.slice(0, 3).map((entry) => ({
        ...entry,
        ...topUsers.find((u) => u.id === entry.userId),
      }));

      const currentUserEntry = ranked.find((r) => r.userId == userId);

      return res.status(200).json({
        success: true,
        top3,
        userRank: currentUserEntry ?? null,
      });
    } catch (err) {
      next(err);
    }
  };
}
