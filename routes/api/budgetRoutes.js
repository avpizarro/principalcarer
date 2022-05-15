const router = require("express").Router();

// Budget Model
const Budget = require("../../models/BudgetModel");

// @route GET api/budget
// @desc Get All transactions
// @access Public
router.get("/", (req, res) => {
  Budget.find()
    .sort({ title: -1 }).limit(10)
    .then((transactions) => res.json(transactions));
});

// @route POST api/budget/post
// @desc Add transaction
// @access Public
router.post("/post", (req, res) => {
  Budget.create(req.body)
    .then((transaction) => res.json(transaction))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
