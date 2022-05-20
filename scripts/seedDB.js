const mongoose = require("mongoose");
const db = require("../models");
const path = require("path");

// This file empties the Medications collection and inserts the medications below
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/principalcarer"
);

const medicationSeed = [
  {
    name: "Quetiapina",
    dose: "100mg",
    dosage: "2 tablets every 24 hours",
    purpose:
      "Quetiapine rebalances dopamine and serotonin to improve thinking, mood, and behavior.",
    quantity: 30,
    unit: "tablets",
  },
  {
    name: "Quetiapina XR",
    dose: "200mg",
    dosage: "1 daily tablet at 7pm",
    purpose:
      "Quetiapine rebalances dopamine and serotonin to improve thinking, mood, and behavior.",
    quantity: 60,
    unit: "tablets",
  },
  {
    name: "Sertralina",
    dose: "50mg",
    dosage: "2 tables every 24 hours",
    purpose:
      "Quetiapine rebalances dopamine and serotonin to improve thinking, mood, and behavior.",
    quantity: 180,
    unit: "tablets",
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

const budgetSeed = [
  {
    name: "Dividend",
    amount: 500,
  },
  {
    name: "Medication",
    amount: -200,
  },
  {
    name: "Health",
    amount: -100,
  },
  {
    name: "Gift",
    amount: 500,
  },
];

const taskSeed = [
  {
    name: "Book neurology appointment",
  },
  {
    name: "Confirm eye exam date",
  },
  {
    name: "Schedule Andres visit",
  },
];


const shoppingSeed = [
  {
    name: "Sweat pants",
    quantity: 2,
  },
];

const homeSeed = [
  {
    fileName: "portrait.png",
    filePath: `${__dirname}/client/public/uploads/portrait`,
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

db.Budget.remove({})
  .then(() => db.Budget.collection.insertMany(budgetSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

db.Task.remove({})
  .then(() => db.Task.collection.insertMany(taskSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

db.Shopping.remove({})
  .then(() => db.Shopping.collection.insertMany(shoppingSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

  db.Home.remove({})
  .then(() => db.Home.collection.insertMany(homeSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
