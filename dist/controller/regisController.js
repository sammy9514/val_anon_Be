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
exports.deleteAll = exports.view = exports.registerAnon = void 0;
const regisModell_1 = __importDefault(require("../model/regisModell"));
const crypto_1 = __importDefault(require("crypto"));
const registerAnon = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.body;
        const namee = name.toLowerCase().split(" ").join("");
        const token = crypto_1.default.randomBytes(3).toString("hex");
        const link = `send-message/${namee}/${token}`;
        const regis = yield regisModell_1.default.create({
            name: namee,
            link,
            token,
        });
        return res.status(200).json({
            message: "success",
            data: regis,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "failed",
        });
    }
});
exports.registerAnon = registerAnon;
const view = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const regis = yield regisModell_1.default.find();
        return res.status(200).json({
            message: "success",
            data: regis,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "failed",
        });
    }
});
exports.view = view;
const deleteAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield regisModell_1.default.deleteMany();
        return res.status(200).json({
            message: "deleted",
            data: user,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "failed to delete",
        });
    }
});
exports.deleteAll = deleteAll;
