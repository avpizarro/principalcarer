const router = require("express").Router();

// Clock Model
const Budget = require("../../models/Budget");

// @route GET api/budget
// @desc Get All clocks
// @access Public
router.get("/", (req, res) => {
  Budget.find()
    .sort({ title: -1 }).limit(10)
    .then((transactions) => res.json(transactions));
});

// @route POST api/budget/post
// @desc Add clock
// @access Public
router.post("/post", (req, res) => {
  Budget.create(req.body)
    .then((clock) => res.json(clock))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
