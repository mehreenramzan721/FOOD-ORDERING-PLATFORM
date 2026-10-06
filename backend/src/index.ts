import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
const app = express();
app.use(express.json());
app.use(cors());
mongoose
  .connect(
    process.env.MONGODB_CONNECTION_STRING as string, // casting in typescript to force the connection string to be string
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));
console.log(
  process.env.MONGODB_CONNECTION_STRING ? "string found" : "string MISSING",
);
// we will get an error for the REquest and Response so we have to add it seperately in express
app.get("/test", async (req: Request, res: Response) => {
  res.json({ message: `Hello World` });
});
app.listen(8000, () => console.log(`Server is running at port 8000`));
