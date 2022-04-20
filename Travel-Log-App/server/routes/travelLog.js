import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("Travel Log App!");
});

export default router;
