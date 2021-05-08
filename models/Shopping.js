const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const shoppingSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "",
  },
  quantity: {
    type: Number,
    default: 0,
  },
});

const Shopping = mongoose.model("Shopping", shoppingSchema);

module.exports = Shopping;