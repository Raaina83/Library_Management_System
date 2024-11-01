import express from 'express'
import { approveRequest, getAllRequest } from '../controllers/librarian.controller';

const router = express.Router();

router.get("/getRequests", getAllRequest);
router.post("/approveRequest", approveRequest);

export default router;