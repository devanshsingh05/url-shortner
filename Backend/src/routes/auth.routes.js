import express from "express";

import { loginUser, registerUser } from "../controllers/auth.controller.js";
import { isAuth } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/me", isAuth, (req, res) => {
  res.status(200).json({
    user: req.user,
  });
});
export default router;
