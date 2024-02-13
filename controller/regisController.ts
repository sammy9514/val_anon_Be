import { Request, Response } from "express";
import regisModel from "../model/regisModell";
import crypto from "crypto";
export const registerAnon = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const namee = name.toLowerCase().split(" ").join("");
    const token = crypto.randomBytes(3).toString("hex");
    const link = `send-message/${namee}/${token}`;
    const regis = await regisModel.create({
      name: namee,
      link,
      token,
    });

    return res.status(200).json({
      message: "success",
      data: regis,
    });
  } catch (error) {
    return res.status(404).json({
      message: "failed",
    });
  }
};

export const view = async (req: Request, res: Response) => {
  try {
    const regis = await regisModel.find();

    return res.status(200).json({
      message: "success",
      data: regis,
    });
  } catch (error) {
    return res.status(404).json({
      message: "failed",
    });
  }
};

export const deleteAll = async (req: Request, res: Response) => {
  try {
    const user = await regisModel.deleteMany();

    return res.status(200).json({
      message: "deleted",
      data: user,
    });
  } catch (error) {
    return res.status(404).json({
      message: "failed to delete",
    });
  }
};
