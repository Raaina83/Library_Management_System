import { login, logout, signUp } from "../controllers/auth.controller.js";
import express from 'express';

const router = express.Router();

router.post("/login", login);
router.post("/signup", signUp);
router.get("/logout", logout)

export default router