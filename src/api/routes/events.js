import { Router } from "express";
import { auth } from "../middlewares/index.js";
import {} from "../controllers/user/index.js";

const router = Router();

// Event Management
router.post("/", createEvent);

export default router;
