import { ErrorRequestHandler } from "express";
import { HTTPSTATUS } from "../config/http.config";

export const errorhandler: ErrorRequestHandler = (
  error,
  req,
  res,
  next
): any => {
  console.log(`Error occurred: ${req.path}`, error);

  return res.status(HTTPSTATUS.INTERNAL_SERVER_ERROR).json({
    message: "INTERNAL SERVER ERROR",
    error: error.message || "Something went wrong",
  });
};
