import { Request, Response } from "express";
import { asyncHandler } from "../middlewares/asyncHandler.middleware";

export const registerController = asyncHandler(
  async (req: Request, res: Response) => {
    const body = req.body;
  }
);
