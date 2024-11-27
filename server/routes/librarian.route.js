import express from 'express'
import { approveRequest, getAllRequest } from '../controllers/librarian.controller.js';

const router = express.Router();

//book add, book update, delete, user profile
router.post("/addBook", addNewBook);
router.get("/getRequests", getAllRequest);
router.post("/approveRequest", approveRequest);

export default router;