const router = require("express").Router();

// Get the Calendar Model
const Calendar = require("../../models/CalendarModel");

// @route GET api/calendar
// @desc Get all events
// @access Public
router.get("/", (req, res) =>
{
    Calendar.find()
        .then((events) => res.json(events))
});

// @route GET api/calendar
// @desc Get all events
// @access Public
router.get("/event/:id", (req, res) =>
{
    Calendar.findById(req.params.id)
        .then((events) => res.json(events))
});

// @route GET api/calendar/:date
// @desc Get all events for a particular date
// @access Public
router.get("/:date", (req, res) =>
{
  const startDate = new Date(req.params.date);
  const endDate = new Date(startDate)
  endDate.setDate(endDate.getDate() + 1);

  Calendar.find({ date: { $gte: startDate, $lt: endDate } })
        .then((events) => res.json(events))
});

// @route POST api/calendar/post
// @desc Add an event
// @access Public
router.post("/post", (req, res) =>
{
    Calendar.create(req.body)
        .then((event) => res.json(event))
        .catch((err) => res.status(404).json({ success: false, error: err }))
});

// @route PUT api/calendar/:id
// @desc Edit an event
// @access Public
router.put("/:id", (req, res) => 
{
    Calendar.findByIdAndUpdate(req.params.id, req.body)
        .then(() => res.json({ success: true }))
        .catch((err) => res.status(404).json({ success: false, error: err }))
})

// @route DELETE api/calendar/:id
// @desc Remove an event
// @access Public
router.delete("/:id", async (req, res) => 
{
  try {
    const deletedEvent = await Calendar.findByIdAndDelete(req.params.id);

    if (!deletedEvent) {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }

    return res.json({
      success: true,
      message: "Event deleted",
      deletedEvent,
    });
  } catch (err) {
    console.error("DELETE /api/calendar/:id error:", err);

    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
})
module.exports = router;