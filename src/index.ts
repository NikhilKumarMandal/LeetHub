import express, { Application } from "express";
import dotenv from "dotenv"
import AuthRouter from "./routes/auth.routes"
dotenv.config()

const PORT = process.env.PORT || 5000; 

const app:Application = express();

app.use(express.json());

// Routes
app.use("/api/v1/auth",AuthRouter)

app.listen(PORT, () => {
    console.log(`App is listening on PORT: ${PORT}`);
});