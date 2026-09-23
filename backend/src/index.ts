import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
const app = express();
app.use(express.json());
app.use(cors());

// we will get an error for the REquest and Response so we have to add it seperately in express
app.get("/test", async (req: Request, res: Response) => {
  res.json({ message: `Hello World` });
});
app.listen(1222, () => console.log(`Server is running at port 1222`));
