import express from "express";

import { getAllTravelLogs } from "../controllers/travelLog.js";

const router = express.Router();

router.get("/", getAllTravelLogs);

export default router;
