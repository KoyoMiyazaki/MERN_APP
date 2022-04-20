import express from "express";
import dotenv from "dotenv";

import travelLogRoutes from "./routes/travelLog.js";

const app = express();
dotenv.config();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/travel-log", travelLogRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is listening on port ${port}`));
