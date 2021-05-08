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
    dosage: "2 tablets every 24 hours",
    purpose: "Quetiapine rebalances dopamine and serotonin to improve thinking, mood, and behavior.",
    quantity: 30,
    unit: "tablet(s)"
  },
  {
    name: "Quetiapina XR",
    dose: "200mg",
    dosage: "1 daily tablet at 7pm",
    purpose: "Quetiapine rebalances dopamine and serotonin to improve thinking, mood, and behavior.",
    quantity: 60,
    unit: "tablet(s)"
  },
  {
    name: "Sertralina",
    dose: "50mg",
    dosage: "2 tables every 24 hours",
    purpose: "Quetiapine rebalances dopamine and serotonin to improve thinking, mood, and behavior.",
    quantity: 180,
    unit: "tablet(s)"
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

const clockSeed = [
  {
    city: "Melbourne",
    timezone: "",
  },
  {
    city: "Bogota",
    timezone: "America/Bogota",
  },
  {
    city: "Nasssau",
    timezone: "America/Nassau",
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

  db.Clock.remove({})
  .then(() => db.Clock.collection.insertMany(clockSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });