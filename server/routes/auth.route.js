import { login, signUp } from "../controllers/auth.controller.js";
import express, { Router } from 'express';

const router = express.Router();

router.post("/login", login);
router.post("/signup", signUp);

export default router