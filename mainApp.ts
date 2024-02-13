import { Application, NextFunction, Request, Response } from "express";
import { mainError } from "./error/mainError";
import { HTTP } from "./utils/enum";
import { handlError } from "./error/handleError";
import anon from "./router/anonRouter";
import regis from "./router/regisRouter";

export const mainApp = (app: Application) => {
  try {
    app.use("/api/v1", regis);
    app.use("/api/v1", anon);
    app.get("/", (req: Request, res: Response) => {
      try {
        res.status(200).json({
          message: "success",
        });
        app.all("*", (req: Request, res: Response, next: NextFunction) => {
          next(
            new mainError({
              name: "njfjzx",
              message: " kjxgjfx",
              status: HTTP.BAD,
              success: false,
            })
          );
        });
      } catch (error) {
        res.status(404).json({
          message: "failed",
        });
      }
    });
  } catch (error) {
    app.use(handlError);
  }
};
