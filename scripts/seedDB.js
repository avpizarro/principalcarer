const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Medications collection and inserts the medications below
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/principalcarer"
);

const medicationSeed = [
  {
    name: "Quetiapina",
    dose: "100mg",
    dosage: {
      amount: 1,
      time: "8am",
    },
    purpose: "",
    quantity: 30,
  },
  {
    name: "Quetiapina",
    dose: "200mg",
    dosage: {
      amount: 1,
      time: "8am",
    },
    purpose: "",
    quantity: 60,
  },
];

const appointmentSeed = [
  {
    especialty: "neurology",
    practicioner: "TBC",
    location: "TBC",
    date: "",
    reminder: true,
    reminderTime: "",
    time: new Date("2021-05-25T09-30-00Z"),
  },
  {
    especialty: "odontology",
    practicioner: "TBC",
    location: "TBC",
    date: "",
    reminder: true,
    reminderTime: "",
    time: new Date("2021-05-25T09-30-00Z"),
  },
];

db.Medication.remove({})
  .then(() => db.Medication.collection.insertMany(medicationSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

db.Appointment.remove({})
  .then(() => db.Appointment.collection.insertMany(appointmentSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
