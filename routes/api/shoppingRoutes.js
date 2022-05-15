const router = require("express").Router();

// Shopping Model
const Shopping = require("../../models/ShoppingModel");

// @route GET api/Shoppings
// @desc Get All Shoppings
// @access Public
router.get("/", (req, res) => {
  Shopping.find()
    .sort({ title: 1 })
    .then((item) => res.json(item));
});

// @route POST api/Shoppings/post
// @desc Add Shopping
// @access Public
router.post("/post", (req, res) => {
  Shopping.create(req.body)
    .then((item) => res.json(item))
    .catch((err) => res.status(404).json({ success: false }));
});

// @route DELETE api/Shoppings
// @desc Delete a Shoppings
// @access Public
router.delete("/:id", (req, res) => {
  Shopping.findById(req.params.id)
    .then(item =>
      item.remove().then(() => res.json({ success: true }))
    )
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
