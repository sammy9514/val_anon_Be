import dotenv from "dotenv";
import cors from "cors";
import express, { Application } from "express";
import { mainApp } from "./mainApp";
import { mainConnection } from "./utils/dbConfig";

dotenv.config();

const port = parseInt(process.env.PORT!);
const app: Application = express();

app.use(cors());
app.use(express.json());

mainApp(app);
mainConnection();
const server = app.listen(port, () => {
  console.log("server is up and running");
});

process.on("uncaughtException", (error: Error) => {
  console.log("uncaughtException", error);
  process.exit(1);
});
process.on("unhandledRejection", (reason: any) => {
  console.log("unhandledRejection", reason);
  server.close(() => {
    process.exit(1);
  });
});
