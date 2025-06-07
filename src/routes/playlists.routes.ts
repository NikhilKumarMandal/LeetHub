import { canAccess } from "../middlewares/canAccess.midddleware";
import express, { RequestHandler } from "express";
import authenticate from "../middlewares/auth.middleware";
import { Playlist } from "../controllers/playlist.controllers";
import { PlaylistService } from "../services/Playlist.service";
import { Roles } from "../types/types";
import { upload } from "../middlewares/multer.middleware";
import PlaylistValidators from "../validators/Playlist.validators";

const router = express.Router();

const playlistService = new PlaylistService();
const playlist = new Playlist(playlistService);

router.post(
  "/",
  authenticate,
  canAccess([Roles.ADMIN]),
  upload.fields([
    {
      name: "image",
      maxCount: 1,
    },
  ]),
  PlaylistValidators,
  playlist.createPlaylist as RequestHandler
);

router.get("/", authenticate, playlist.getAllListDetails as RequestHandler);

router.get("/get-all-playlist", playlist.fecthPlaylist);

router.get(
  "/:playlistId",
  authenticate,
  playlist.getPlaylistByID as RequestHandler
);

router.post(
  "/:playlistId/add-problem",
  authenticate,
  canAccess([Roles.ADMIN]),
  playlist.addProblemToPlaylist
);

router.delete(
  "/:playlistId",
  authenticate,
  canAccess([Roles.ADMIN]),
  playlist.deletePlaylist
);

router.delete(
  "/remove-problem/:id",
  authenticate,
  canAccess([Roles.ADMIN]),
  playlist.removeProblemFromPlaylist
);

router.get(
  "/get-rank/:playlistId",
  authenticate,
  playlist.getWeeklyPlaylistLeaderboard as RequestHandler
);

export default router;
