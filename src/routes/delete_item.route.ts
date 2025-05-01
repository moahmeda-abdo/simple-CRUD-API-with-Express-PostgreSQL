import { Router } from "express";
import { Middleware } from "../types/Middleware.types";
import { pool } from "../models/db";
import { itemTableName } from "../models/tableNames";

const router = Router();

const DeleteItem: Middleware = async (req, res) => {
  const { id } = req.params;
  const result = await pool.query(
    `DELETE FROM ${itemTableName} WHERE id = $1`,
    [id]
  );
  if (result.rows.length === 0) res.status(404).send("Item not found");
  res.status(204).end();
};

router.delete("/:id", DeleteItem);

export { router as DeleteItemRouter };
