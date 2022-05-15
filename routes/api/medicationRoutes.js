const router = require("express").Router();

// Medication Model
const Medication = require("../../models/MedicationModel");

// @route GET api/medication
// @desc Get All medication
// @access Public
router.get("/", (req, res) => {
  Medication.find()
    .sort({ title: 1 })
    .then((medications) => res.json(medications));
});

// @route POST api/medication
// @desc Add medication
// @access Public
router.post("/post", (req, res) => {
  Medication.create(req.body)
    .then((medication) => res.json(medication))
    .catch((err) => res.status(404).json({ success: false }));
});

// @route DELETE api/medication
// @desc Delete a medication
// @access Public
router.delete("/:id", (req, res) => {
  Medication.findById(req.params.id)
    .then((medication) =>
      medication.remove().then(() => res.json({ success: true }))
    )
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
