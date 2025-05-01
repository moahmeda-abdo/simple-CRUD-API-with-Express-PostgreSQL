import express, { Request, Response } from "express";
import { pool } from "./models/db";
import { itemTableName } from "./models/tableNames";
import { ItemsRouter } from "./routes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello TypeScript with Express!");
});

(async () => {
  await pool.query(`
        CREATE TABLE IF NOT EXISTS ${itemTableName} (
          id SERIAL PRIMARY KEY,
          name TEXT NOT NULL
        )
      `);
})();

app.use("/items", ItemsRouter);
