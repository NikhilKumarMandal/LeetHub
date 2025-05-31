import express, { Application } from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import AuthRouter from "./routes/auth.routes";
import ProblemRouter from "./routes/problem.routes";
import ExecuteRouter from "./routes/executeCode.routes";
import SubmissionRouter from "./routes/submission.routes";
import DiscussionRouter from "./routes/discussion.routes";
import VoteRouter from "./routes/vote.routes";
import PlaylistRouter from "./routes/playlist.routes";
import ChallengeRouter from "./routes/challenge.routes";
import arcjetMiddleware from "./middlewares/arcjet.middleware";
import { asyncHandler } from "./utils/asyncHandler";
import hpp from "hpp";
import helmet from "helmet";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app: Application = express();

app.use(asyncHandler(arcjetMiddleware));
app.use(helmet());
app.use(hpp());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true, limit: "116kb" }));
app.use(express.static("public"));
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    credentials: true,
  })
);

// Routes
app.use("/api/v1/auth", AuthRouter);
app.use("/api/v1/problem", ProblemRouter);
app.use("/api/v1/execute-code", ExecuteRouter);
app.use("/api/v1/submission", SubmissionRouter);
app.use("/api/v1/discussion", DiscussionRouter);
app.use("/api/v1/vote", VoteRouter);
app.use("/api/v1/playlist", PlaylistRouter);
app.use("/api/v1/challenge", ChallengeRouter);

app.listen(PORT, () => {
  console.log(`App is listening on PORT: ${PORT}`);
});
