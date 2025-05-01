import { Request, Response } from "express";

export interface Middleware {
  (req: Request, res: Response): Promise<void>;
}
