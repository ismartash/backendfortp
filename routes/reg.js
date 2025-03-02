import express from "express";
import registerash from "../controllers/usermanage.js";

const router = express.Router();

router.route("/register").post(registerash);

export default router;
