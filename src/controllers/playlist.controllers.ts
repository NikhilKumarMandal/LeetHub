import { NextFunction } from "express";
import { Response } from "express";
import { AuthRequest } from "../types/types";
import { PlaylistService } from "../services/Playlist.service";
import { ApiError, ApiResponse } from "express-strategy";

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
}
