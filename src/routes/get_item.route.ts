import { Router } from "express";
import { Middleware } from "../types/Middleware.types";
import { pool } from "../models/db";
import { itemTableName } from "../models/tableNames";

const router = Router();

const GetItem: Middleware = async (req, res) => {
  const { id } = req.params;

  const result = await pool.query(
    `SELECT * FROM ${itemTableName} WHERE id = $1`,
    [id]
  );

  res.status(201).json({ data: result.rows[0] });
};

router.get("/:id", GetItem);

export { router as GetItemRouter };
