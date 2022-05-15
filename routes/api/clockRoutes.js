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
router.delete("/:id", (req, res) => {
  Clock.findById(req.params.id)
    .then((clock) =>
      clock.remove().then(() => res.json({ success: true }))
    )
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
