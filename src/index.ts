import express, { Application } from "express";
import dotenv from "dotenv"

dotenv.config()

const PORT = process.env.PORT || 5000; 

const app:Application = express();

app.use(express.json());

app.listen(PORT, () => {
    console.log(`App is listening on PORT: ${PORT}`);
});