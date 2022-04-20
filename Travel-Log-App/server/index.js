import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.status(200).send("Hello world");
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is listening on port ${port}`));
