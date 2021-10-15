import { Router } from "express";
import { auth } from "../middlewares/index.js";
import {} from "../controllers/user/index.js";

const router = Router();

// Event Management
// router.post("/", createEvent);

// Deleting Event Route
import delete_event from "../controllers/event/delete-event.js";
router.get("/event/delete", delete_event);

// Listing Events Route
import {
  get_all_event_names,
  get_event_stats,
} from "../controllers/event/get-event-stats.js";
router.get("/event/all", get_all_event_names);
router.get("/event/view", get_event_stats);

export default router;
