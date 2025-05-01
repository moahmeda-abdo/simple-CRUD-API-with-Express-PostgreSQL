import { Router } from "express";
import { Middleware } from "../types/Middleware.types";
import { pool } from "../models/db";
import { itemTableName } from "../models/tableNames";

const router = Router();

const UpdateItem: Middleware = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const result = await pool.query(
    `UPDATE ${itemTableName} SET name = $1 WHERE id = $2 RETURNING *`,
    [name, id]
  );

  if (result.rowCount === 0) {
    res.status(404).json({ message: "Item not found" });
  }

  res.status(201).json({ data: result.rows[0] });
};

router.put("/:id", UpdateItem);

export { router as UpdateItemRouter };
