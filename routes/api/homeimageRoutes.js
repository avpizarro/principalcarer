const router = require("express").Router();

// Home Model
const Home = require("../../models/HomeModel");

// @route GET api/home
// @desc Get All home images
// @access Public
router.get("/", (req, res) => {
  Home.find()
    .then((homeImages) => res.json(homeImages));
});

// @route GET api/homeimage/newest
// @desc Get newest home image
// @access Public
router.get("/newest", (req, res) => {
  Home.findOne()
    // .sort({ title: 1 })
    .then((homeImg) => res.json(homeImg));
});

// @route GET api/homeimage/active
// @desc Get the currently selected/active image
// @access Public
router.get("/active", (req, res) => {
  Home.findOne()
    .then((homeImg) => {
      if (homeImg && homeImg.activePublicId) {
        res.json({ activePublicId: homeImg.activePublicId });
      } else {
        res.json({ activePublicId: null });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ activePublicId: null });
    });
});

// @route POST api/homeimage/post
// @desc Add Image
// @access Public
router.post("/post", (req, res) => {
  Home.create(req.body)
    .then((homeImg) => res.json(homeImg))
    .catch((err) => res.status(404).json({ success: false }));
});

// @route POST api/homeimage/active
// @desc Set the currently selected/active image
// @access Public
router.post("/active", (req, res) => {
  const { activePublicId } = req.body;
  
  Home.findOneAndUpdate(
    {},
    { activePublicId: activePublicId },
    { upsert: true, new: true }
  )
    .then((homeImg) => {
      res.json({ success: true, activePublicId: homeImg.activePublicId });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ success: false, error: err.message });
    });
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
