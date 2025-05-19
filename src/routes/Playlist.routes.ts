import express, { RequestHandler } from "express";
import authenticate from "../middlewares/auth.middleware";
import { Playlist } from "../controllers/playlist.controllers";
import { PlaylistService } from "../services/Playlist.service";

const router = express.Router();

const playlistService = new PlaylistService();
const playlist = new Playlist(playlistService);

router.post("/", authenticate, playlist.createPlaylist as RequestHandler);

router.get("/", authenticate, playlist.getAllListDetails as RequestHandler);

router.get(
  "/:playlistId",
  authenticate,
  playlist.getPlaylistDetails as RequestHandler
);

router.post(
  "/:playlistId/add-problem",
  authenticate,
  playlist.addProblemToPlaylist
);

router.delete("/:id", authenticate, playlist.deletePlaylist);

router.delete(
  "/remove-problem/:id",
  authenticate,
  playlist.removeProblemFromPlaylist
);

export default router;
