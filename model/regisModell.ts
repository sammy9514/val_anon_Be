import { Document, Schema, Types, model } from "mongoose";
import { iAnonB } from "../utils/interface";

interface regisD extends iAnonB, Document {}

const regisModel = new Schema<regisD>(
  {
    name: {
      type: String,
    },
    link: {
      type: String,
    },
    token: {
      type: String,
    },
    messageGrab: [
      {
        type: Types.ObjectId,
        ref: "anon",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default model<regisD>("regis", regisModel);
