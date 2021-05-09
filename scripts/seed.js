const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Medications collection and inserts the medications below
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/principalcarer"
);
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
