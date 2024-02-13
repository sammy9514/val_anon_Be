import { Document, Schema, Types, model } from "mongoose";
import { iAnon } from "../utils/interface";

interface anonData extends iAnon, Document {}

export const anonModel = new Schema<anonData>(
  {
    user: {
      type: Types.ObjectId,
      ref: "regis",
    },
    message: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default model<anonData>("anon", anonModel);
