const router = require("express").Router();
const jwt = require("jsonwebtoken");

// Books Model
const Medication = require("../../models/Medication");

// @route GET api/medications
// @desc Get All medications
// @access Public
router.get("/", (req, res) => {
  Medication.find()
    .sort({ title: 1 })
    .then((medications) => res.json(medications));
});

// @route POST api/medications
// @desc Add medication
// @access Public
router.post("/", (req, res) => {
  Medication.create(req.body)
    .then((medication) => res.json(medication))
    .catch((err) => res.status(404).json({ success: false }));
});

// @route DELETE api/books
// @desc Delete a book
// @access Public
router.delete("/:id", (req, res) => {
  Medication.findById(req.params.id)
    .then((medication) =>
      medication.remove().then(() => res.json({ success: true }))
    )
    .catch((err) => res.status(404).json({ success: false }));
});

// Verify Token
// const verifyToken = (req, res, next) => {
//   const bearerHeader = req.headers["authorization"];

//   // Check if bearer is undefined
//   if (typeof bearerHeader !== "undefined") {
//     res.json({ message: "You are authorized" });
//   } else {
//     // Forbidden
//     res.sendStatus(303);
//   }
// };

module.exports = router;
