const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const budgetSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "",
  },
  amount: {
    type: Number,
    default: 0,
  },
});

const Budget = mongoose.model("Budget", budgetSchema);

module.exports = Budget;