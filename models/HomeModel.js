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
    activePublicId: {
      type: String,
      default: null,
    },
});

const Home = mongoose.model("Home", homeSchema);

module.exports = Home;