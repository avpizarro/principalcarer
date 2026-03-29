const router = require("express").Router();

// Clock Model
const Clock = require("../../models/ClockModel");

// @route GET api/clock
// @desc Get All clocks
// @access Public
router.get("/", (req, res) => {
  Clock.find()
    .sort({ title: 1 })
    .then((clocks) => res.json(clocks));
});

// @route POST api/clock
// @desc Add clock
// @access Public
router.post("/post", (req, res) => {
  Clock.create(req.body)
    .then((clock) => res.json(clock))
    .catch((err) => res.status(404).json({ success: false }));
});

// @route DELETE api/clock
// @desc Delete a clock
// @access Public
router.delete("/:id", async (req, res) => {
  try {
    const deletedClock = await Clock.findByIdAndDelete(req.params.id);

    if (!deletedClock) {
      return res.status(404).json({
        success: false,
        message: "Clock not found",
      });
    }

    return res.json({
      success: true,
      message: "Clock deleted",
      deletedClock,
    });
  } catch (err) {
    console.error("DELETE /api/clock/:id error:", err);

    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

module.exports = router;
