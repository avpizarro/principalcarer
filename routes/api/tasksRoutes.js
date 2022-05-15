const router = require("express").Router();

// Shopping Model
const Task = require("../../models/TaskModel");

// @route GET api/tasks
// @desc Get All tasks
// @access Public
router.get("/", (req, res) => {
  Task.find()
    .sort({ title: 1 })
    .then((tasks) => res.json(tasks));
});

// @route POST api/tasks/post
// @desc Add Task
// @access Public
router.post("/post", (req, res) => {
  Task.create(req.body)
    .then((tasks) => res.json(tasks))
    .catch((err) => res.status(404).json({ success: false }));
});

// @route DELETE api/tasks
// @desc Delete a Tasks
// @access Public
router.delete("/:id", (req, res) => {
  Task.findById(req.params.id)
    .then(task =>
      task.remove().then(() => res.json({ success: true }))
    )
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
