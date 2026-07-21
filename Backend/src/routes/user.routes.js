import express from "express";
import { isAuth } from "../middleware/auth.middleware.js";
import { getAllUserUrls } from "../controllers/user.controller.js";
const router = express.Router();

router.post("/urls", isAuth, getAllUserUrls);

export default router;
