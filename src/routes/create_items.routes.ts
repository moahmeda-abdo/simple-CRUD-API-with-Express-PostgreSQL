import { Router } from "express";
import { Middleware } from "../types/Middleware.types";
import { pool } from "../models/db";
import { itemTableName } from "../models/tableNames";

const router = Router();

const CreateItemController: Middleware = async (req, res) => {
  const { name } = req.body;

  const result = await pool.query(
    `INSERT INTO ${itemTableName}(Name) VALUES($1) RETURNING *`,
    [name]
  );

  res.status(201).json({ data: result.rows[0] });
};

router.post("/", CreateItemController);

export { router as CreateItemRouter };
