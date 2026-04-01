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
router.delete("/:id", async (req, res) => {
  try {
    const deletedItem = await Shopping.findByIdAndDelete(req.params.id);

    if (!deletedItem) {
      return res.status(404).json({
        success: false,
        message: "Shopping item not found",
      });
    }

    return res.json({
      success: true,
      message: "Shopping item deleted",
      deletedItem,
    });
  } catch (err) {
    console.error("DELETE /api/shopping/:id error:", err);

    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

module.exports = router;
