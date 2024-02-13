import { Request, Response } from "express";
import anonModel from "../model/anonModel";
import { Types } from "mongoose";
import regisModel from "../model/regisModell";

export const sendMessage = async (req: Request, res: Response) => {
  try {
    const { token } = req.params;
    const { message } = req.body;
    const find = await regisModel.findOne({ token });

    if (find) {
      const send = await anonModel.create({
        message,
      });
      find.messageGrab.push(new Types.ObjectId(send._id));
      find.save();
      return res.status(200).json({
        message: "created",
        data: send,
      });
    } else {
      return res.status(404).json({
        message: "failed",
      });
    }
  } catch (error) {
    return res.status(404).json({
      message: "failed to send message",
    });
  }
};

export const getMessage = async (req: Request, res: Response) => {
  try {
    const { token } = req.params;
    const find = await regisModel.findOne({ token }).populate({
      path: "messageGrab",
    });

    return res.status(200).json({
      message: "created",
      data: find,
    });
  } catch (error) {
    console.log(error);

    return res.status(404).json({
      message: "error",
    });
  }
};
