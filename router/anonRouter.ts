import { Router } from "express";
import { getMessage, sendMessage } from "../controller/anonController";

const router: Router = Router();
router.route("/send-message/:token").post(sendMessage);
router.route("/get-message/:token").get(getMessage);

export default router;
