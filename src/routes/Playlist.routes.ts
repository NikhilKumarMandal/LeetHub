import express, { RequestHandler } from "express";
import authenticate from "../middlewares/auth.middleware";
import { Playlist } from "../controllers/playlist.controllers";
import { PlaylistService } from "../services/Playlist.service";

const router = express.Router();

const playlistService = new PlaylistService();
const playlist = new Playlist(playlistService);

router.post(
  "/create-playlist",
  authenticate,
  playlist.createPlaylist as RequestHandler
);

export default router;
