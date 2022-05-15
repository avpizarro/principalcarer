const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const appointmentSchema = new mongoose.Schema({
  especialty: {
    type: String,
    default: "",
  },
  practitioner: {
    type: String,
    default: "",
  },
  location: {
    type: String,
    default: "",
  },
  date: {
    type: Date,
    default: "",
  },
  reminder: {
    type: Boolean,
  },
  reminderTime: {
    type: Date,
  },
  time: {
    type: Date,
    default: "",
  },
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;
