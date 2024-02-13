"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlError = void 0;
const buildErrorMessage = (err, res) => {
    res.status(200).json({
        name: err.name,
        message: err.message,
        status: err.status,
        success: err.success,
        error: err,
    });
};
const handlError = (err, req, res, next) => {
    return buildErrorMessage(err, res);
};
exports.handlError = handlError;
