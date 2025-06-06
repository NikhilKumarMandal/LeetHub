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
import { serve } from "inngest/express";
import { inngest } from "./inngest/client";
import { onUserSignup } from "./inngest/functions/on-singup";
import http from "http";
import { Server } from "socket.io";
import axios from "axios";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app: Application = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

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

const rooms = new Map();

io.on("connection", (socket) => {
  let currentRoom: any = null;
  let currentUser: any = null;
  socket.on("join", ({ roomId, userName }) => {
    if (currentRoom) {
      socket.leave(currentRoom);
      if (rooms.has(currentRoom)) {
        rooms.get(currentRoom).users.delete(currentUser);
        io.to(currentRoom).emit(
          "userJoined",
          Array.from(rooms.get(currentRoom).users)
        );
      }
    }

    currentRoom = roomId;
    currentUser = userName;

    socket.join(roomId);

    if (!rooms.has(roomId)) {
      rooms.set(roomId, {
        users: new Set(),
        code: "//  start code here",
        language: "javascript",
      });
    }

    rooms.get(roomId).users.add(userName);

    socket.emit("codeUpdate", rooms.get(roomId).code);

    socket.emit("languageUpdate", rooms.get(roomId).language);

    io.to(roomId).emit("userJoined", Array.from(rooms.get(currentRoom).users));
  });

  socket.on("codeChange", ({ roomId, code }) => {
    if (rooms.has(roomId)) {
      rooms.get(roomId).code = code;
    }
    socket.to(roomId).emit("codeUpdate", code);
  });

  socket.on("leaveRoom", () => {
    if (currentRoom && currentUser && rooms.has(currentRoom)) {
      rooms.get(currentRoom).users.delete(currentUser);
      io.to(currentRoom).emit(
        "userJoined",
        Array.from(rooms.get(currentRoom).users)
      );

      socket.leave(currentRoom);

      // Clean up empty room
      if (rooms.get(currentRoom).size === 0) {
        rooms.delete(currentRoom);
      }

      currentRoom = null;
      currentUser = null;
    }
  });

  socket.on("typing", ({ roomId, userName }) => {
    socket.to(roomId).emit("userTyping", userName);
  });

  socket.on("compileCode", async ({ code, roomId, language, version }) => {
    if (rooms.has(roomId)) {
      try {
        const response = await axios.post(
          "https://emkc.org/api/v2/piston/execute",
          {
            language,
            version,
            files: [{ content: code }],
          }
        );

        console.log(response, "response");

        io.to(roomId).emit("codeResponse", response.data);
      } catch (error) {
        console.error("Compilation error:", error);
        io.to(roomId).emit("codeResponse", {
          run: { output: "Compilation error occurred." },
        });
      }
    }
  });

  socket.on("languageChange", ({ roomId, language }) => {
    if (rooms.has(roomId)) {
      rooms.get(roomId).language = language;
      io.to(roomId).emit("languageUpdate", language);
    }
  });

  socket.on("disconnect", () => {
    if (currentRoom && currentUser && rooms.has(currentRoom)) {
      rooms.get(currentRoom).users.delete(currentUser);
      io.to(currentRoom).emit(
        "userJoined",
        Array.from(rooms.get(currentRoom).users)
      );

      // Clean up empty room
      if (rooms.get(currentRoom).size === 0) {
        rooms.delete(currentRoom);
      }
    }
  });
});

// Routes
app.use("/api/v1/auth", AuthRouter);
app.use("/api/v1/problem", ProblemRouter);
app.use("/api/v1/execute-code", ExecuteRouter);
app.use("/api/v1/submission", SubmissionRouter);
app.use("/api/v1/discussion", DiscussionRouter);
app.use("/api/v1/vote", VoteRouter);
app.use("/api/v1/playlist", PlaylistRouter);
app.use("/api/v1/challenge", ChallengeRouter);

app.use(
  "/api/inngest",
  serve({
    client: inngest,
    functions: [onUserSignup],
  })
);

server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
