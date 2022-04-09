const router = require("express").Router();

// Home Model
const Home = require("../../models/Home");

// @route GET api/home
// @desc Get All home images
// @access Public
router.get("/", (req, res) => {
  Home.find()
    .then((homeImages) => res.json(homeImages));
});

// @route GET api/home
// @desc Get newest home image
// @access Public
router.get("/newest", (req, res) => {
  Home.findOne()
    // .sort({ title: 1 })
    .then((homeImg) => res.json(homeImg));
});

// @route POST api/home/post
// @desc Add Image
// @access Public
router.post("/post", (req, res) => {
  Home.create(req.body)
    .then((homeImg) => res.json(homeImg))
    .catch((err) => res.status(404).json({ success: false }));
});

// @route DELETE api/home
// @desc Delete a home image
// @access Public
router.delete("/:id", (req, res) => {
  Home.findById(req.params.id)
    .then((homeImg) => homeImg.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
