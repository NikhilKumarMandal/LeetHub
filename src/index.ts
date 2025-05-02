import express, { Application } from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import AuthRouter from "./routes/auth.routes";
import ProblemRouter from "./routes/problem.routes"

dotenv.config();

const PORT = process.env.PORT || 5000;

const app: Application = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true, limit: "116kb" }));
app.use(express.static("public"));

// Routes
app.use("/api/v1/auth", AuthRouter);
app.use("/api/v1/problem", ProblemRouter);

app.listen(PORT, () => {
  console.log(`App is listening on PORT: ${PORT}`);
});
