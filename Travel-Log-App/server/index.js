import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import travelLogRoutes from "./routes/travelLog.js";

const app = express();
dotenv.config();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use("/travel-log", travelLogRoutes);

const port = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(port, () => console.log(`Server is listening on port ${port}`))
  )
  .catch((error) => console.log(error.message));
