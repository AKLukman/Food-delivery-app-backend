import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
app.use(cors());
app.use(express.json);

app.get("/", async (req: Request, res: Response) => {
  res.json({ message: "health OK!" });
});

app.listen(5000, () => {
  console.log("server started on localhost:7000");
});
