import dotenv from "dotenv";
import { connect } from "mongoose";
dotenv.config();

const URL: any = process.env.DATABASE_STRING;
export const mainConnection = () => {
  try {
    return connect(URL).then(() => {
      console.log("Database is connected");
    });
  } catch (error) {
    console.log(error);
  }
};
