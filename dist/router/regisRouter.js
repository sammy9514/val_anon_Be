"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const regisController_1 = require("../controller/regisController");
const router = (0, express_1.Router)();
router.route("/register").post(regisController_1.registerAnon);
router.route("/view").get(regisController_1.view);
router.route("/delete").delete(regisController_1.deleteAll);
exports.default = router;
