const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const homeSchema = new mongoose.Schema({
    fileName: {
      type: String,
      default: "",
    },
    filePath: {
      type: String,
      default: "",
    },
});

const Home = mongoose.model("Home", homeSchema);

module.exports = Home;