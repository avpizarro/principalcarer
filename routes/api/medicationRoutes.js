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
router.delete("/:id", async (req, res) => {
  try {
    const deletedMedication = await Medication.findByIdAndDelete(req.params.id);

    if (!deletedMedication) {
      return res.status(404).json({
        success: false,
        message: "Medication not found",
      });
    }

    return res.json({
      success: true,
      message: "Medication deleted",
      deletedMedication,
    });
  } catch (err) {
    console.error("DELETE /api/medication/:id error:", err);

    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

module.exports = router;
