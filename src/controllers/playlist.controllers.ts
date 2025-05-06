import { NextFunction, Request, Response } from "express";
import { AuthRequest } from "../types/types";
import { PlaylistService } from "../services/Playlist.service";
import { ApiError, ApiResponse, asyncHandler } from "express-strategy";

export class Playlist {
  constructor(private playlistService: PlaylistService) {}

  createPlaylist = async (
    req: AuthRequest,
    res: Response,
    next: NextFunction
  ) => {
    const { name, description } = req.body;
    const userId = req.auth.sub;

    try {
      const data = {
        name,
        description,
        userId,
      };
      const playlist = await this.playlistService.create(data);

      res
        .status(200)
        .json(new ApiResponse(200, playlist, "Playlist created successfully"));
    } catch (error) {
      next(error);
      return;
    }
  };

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

  getPlaylistDetails = async (
    req: AuthRequest,
    res: Response,
    next: NextFunction
  ) => {
    const { playlistId } = req.params;
    const userId = req.auth.sub;

    try {
      const playlist = await this.playlistService.findUnique(
        playlistId,
        userId
      );

      if (!playlist) {
        throw new ApiError(400, "Playlist not found!");
      }

      res
        .status(200)
        .json(new ApiResponse(200, playlist, "Fected Playlist successfully!"));
    } catch (error) {
      next(error);
      return;
    }
  };

  addProblemToPlaylist = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      const { playlistId } = req.params;
      const { problemIds } = req.body;

      if (!Array.isArray(problemIds) || problemIds.length === 0) {
        throw new ApiError(400, "Invalid or missing problemsId");
      }

      try {
        const problemAdded = await this.playlistService.createMany(
          problemIds,
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
}
