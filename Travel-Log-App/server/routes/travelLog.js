import express from "express";

import {
  getAllTravelLogs,
  createTravelLog,
  getSingleTravelLog,
  updateTravelLog,
  deleteTravelLog,
} from "../controllers/travelLog.js";

const router = express.Router();

router.get("/", getAllTravelLogs);
router.post("/", createTravelLog);
router.get("/:id", getSingleTravelLog);
router.patch("/:id", updateTravelLog);
router.delete("/:id", deleteTravelLog);

export default router;
