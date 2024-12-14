import express from 'express'
import { addNewBook, approveRequest, getAllRequest } from '../controllers/librarian.controller.js';
import { protectRoute } from '../middlewares/protectRoute.js';

const router = express.Router();

//book add, book update, delete, user profile
router.use(protectRoute)
router.post("/addBook", addNewBook);
router.get("/getRequests", getAllRequest);
router.post("/approveRequest", approveRequest);

export default router;