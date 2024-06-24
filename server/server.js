const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

mongoose
  .connect("mongodb+srv://itzreddragon99:%406NzD9yU$HDfd!c@cluster0.pk73tqr.mongodb.net/film-search?retryWrites=true&w=majority&appName=Cluster0")

  .then(async () => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.error("Error connecting to MongoDB:", err));

app.use(express.json());
app.use(cors());

const usersRouter = require("./pages/api/films.js");
app.use("/films", usersRouter);

app.listen(5000, () => console.log("Server Started"));
