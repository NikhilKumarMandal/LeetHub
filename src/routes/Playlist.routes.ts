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

router.get("/", authenticate, playlist.getAllListDetails as RequestHandler);

router.get("/:id", authenticate, playlist.getPlaylistDetails as RequestHandler);

router.post("/add-problem/:id", authenticate, playlist.addProblemToPlaylist);

export default router;
