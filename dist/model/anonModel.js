"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.anonModel = void 0;
const mongoose_1 = require("mongoose");
exports.anonModel = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Types.ObjectId,
        ref: "regis",
    },
    message: [
        {
            type: String,
        },
    ],
}, {
    timestamps: true,
});
exports.default = (0, mongoose_1.model)("anon", exports.anonModel);
