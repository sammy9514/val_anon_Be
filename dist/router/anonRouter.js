"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const anonController_1 = require("../controller/anonController");
const router = (0, express_1.Router)();
router.route("/send-message/:token").post(anonController_1.sendMessage);
router.route("/get-message/:token").get(anonController_1.getMessage);
exports.default = router;
