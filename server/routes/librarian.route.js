import express from 'express'
import { approveRequest, getAllRequest } from '../controllers/librarian.controller.js';

const router = express.Router();

router.get("/getRequests", getAllRequest);
router.post("/approveRequest", approveRequest);

export default router;