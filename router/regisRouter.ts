import { Router } from "express";
import { deleteAll, registerAnon, view } from "../controller/regisController";

const router: Router = Router();
router.route("/register").post(registerAnon);

router.route("/view").get(view);

router.route("/delete").delete(deleteAll);

export default router;
