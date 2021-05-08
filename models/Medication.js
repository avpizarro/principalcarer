const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const medicationSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "",
  },
  dose: {
    type: String,
    default: "",
  },
  dosage: {
   type: String,
   default: "",
  },
  purpose: {
    type: String,
    default: "",
  },
  quantity: {
    type: Number,
    default: 0,
  },
  unit: {
    type: String,
    default: "",
  },
});

const Medication = mongoose.model("Medication", medicationSchema);

module.exports = Medication;
