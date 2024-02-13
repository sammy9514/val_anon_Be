"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const regisModel = new mongoose_1.Schema({
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
            type: mongoose_1.Types.ObjectId,
            ref: "anon",
        },
    ],
}, {
    timestamps: true,
});
exports.default = (0, mongoose_1.model)("regis", regisModel);
