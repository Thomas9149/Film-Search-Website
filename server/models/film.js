const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  _id: String,
  Title: String,
  Year: String,
  Director: String,
  Images: Array,
  Metascore: String,
});
const Category = mongoose.model("Film", productSchema);

module.exports = Category;
