import { login, logout, signUp } from "../controllers/auth.controller.js";
import express from 'express';
import { singleProfile } from "../middlewares/multer.js";

const router = express.Router();

router.post("/login", login);
router.post("/signup", singleProfile, signUp);
router.get("/logout", logout)

export default router