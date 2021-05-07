const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const clockSchema = new mongoose.Schema({
  city: {
    type: String,
    default: "",
  },
  timezone: {
    type: String,
    default: "",
  },
});

const Clock = mongoose.model("Clock", clockSchema);

module.exports = Clock;
