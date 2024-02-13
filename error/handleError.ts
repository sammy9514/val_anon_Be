import { NextFunction, Request, Response } from "express";
import { mainError } from "./mainError";

const buildErrorMessage = (err: mainError, res: Response) => {
  res.status(200).json({
    name: err.name,
    message: err.message,
    status: err.status,
    success: err.success,
    error: err,
  });
};

export const handlError = (
  err: mainError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return buildErrorMessage(err, res);
};
