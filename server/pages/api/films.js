const express = require("express");
const router = express.Router();
const Film = require("../../models/film");

router.get("/", async (req, res) => {
  try {
    const films = await Film.find();
    if (!req.query.searchBar) {
      res.send({ films: films, message: "Doesnt contain params" });
    } else if (req.query.searchBar) {
      var category = req.query.searchCategory;

      res.send({
        films: films.filter((film) => {
          const newItem = film[category].toLowerCase();
          return newItem.startsWith(req.query.searchBar.toLowerCase());
        }),
        message: "Search Bar Category is: " + category,
      });
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const data = await Film.create(req.body);

    res.status(200).send({ data: data, message: "No errors" });
  } catch (err) {
    res.send("Failed to Post Data");
  }
});
router.delete("/:title", async (req, res) => {
  try {
    Film.deleteOne({ Title: req.params.title }).then((result) =>
      res.status(200).send(result)
    );
  } catch (er) {
    console.log("There was an error!");
  }
});

router.patch("/:title", async (req, res) => {
  try {
    Film.updateOne(
      { Title: req.params.title },
      {
        Title: req.body.title,
        Year: req.body.year,
        Director: req.body.director,
        Metascore: req.body.metascore,
      }
    ).then((result) => res.status(200).send(result));
  } catch (err) {
    console.log("Error Patching in FILMS");
  }
});
module.exports = router;
