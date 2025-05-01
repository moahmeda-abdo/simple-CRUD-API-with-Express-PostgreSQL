import { Router } from "express";
import { Middleware } from "../types/Middleware.types";
import { pool } from "../models/db";
import { itemTableName } from "../models/tableNames";

const router = Router();

const GetItems: Middleware = async (req, res) => {
  const result = await pool.query(`SELECT * FROM ${itemTableName} `);
  res.status(201).json({ data: result.rows });
};

router.get("/", GetItems);

export { router as GetItemsRouter };
