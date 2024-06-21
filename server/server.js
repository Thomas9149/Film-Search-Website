const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

mongoose
  .connect("mongodb://localhost:27017/food-ordering")

  .then(async () => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.error("Error connecting to MongoDB:", err));

app.use(express.json());
app.use(cors());

const usersRouter = require("./pages/api/films.js");
app.use("/films", usersRouter);

app.listen(5000, () => console.log("Server Started"));
