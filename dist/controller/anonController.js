"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMessage = exports.sendMessage = void 0;
const anonModel_1 = __importDefault(require("../model/anonModel"));
const mongoose_1 = require("mongoose");
const regisModell_1 = __importDefault(require("../model/regisModell"));
const sendMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { token } = req.params;
        const { message } = req.body;
        const find = yield regisModell_1.default.findOne({ token });
        if (find) {
            const send = yield anonModel_1.default.create({
                message,
            });
            find.messageGrab.push(new mongoose_1.Types.ObjectId(send._id));
            find.save();
            return res.status(200).json({
                message: "created",
                data: send,
            });
        }
        else {
            return res.status(404).json({
                message: "failed",
            });
        }
    }
    catch (error) {
        return res.status(404).json({
            message: "failed to send message",
        });
    }
});
exports.sendMessage = sendMessage;
const getMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { token } = req.params;
        const find = yield regisModell_1.default.findOne({ token }).populate({
            path: "messageGrab",
        });
        return res.status(200).json({
            message: "created",
            data: find,
        });
    }
    catch (error) {
        console.log(error);
        return res.status(404).json({
            message: "error",
        });
    }
});
exports.getMessage = getMessage;
