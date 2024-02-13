"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainApp = void 0;
const mainError_1 = require("./error/mainError");
const enum_1 = require("./utils/enum");
const handleError_1 = require("./error/handleError");
const anonRouter_1 = __importDefault(require("./router/anonRouter"));
const regisRouter_1 = __importDefault(require("./router/regisRouter"));
const mainApp = (app) => {
    try {
        app.use("/api/v1", regisRouter_1.default);
        app.use("/api/v1", anonRouter_1.default);
        app.get("/", (req, res) => {
            try {
                res.status(200).json({
                    message: "success",
                });
                app.all("*", (req, res, next) => {
                    next(new mainError_1.mainError({
                        name: "njfjzx",
                        message: " kjxgjfx",
                        status: enum_1.HTTP.BAD,
                        success: false,
                    }));
                });
            }
            catch (error) {
                res.status(404).json({
                    message: "failed",
                });
            }
        });
    }
    catch (error) {
        app.use(handleError_1.handlError);
    }
};
exports.mainApp = mainApp;
