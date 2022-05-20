const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const CalendarSchema = new Schema({
    date: {
        type: String,
        default: "",
    },
    description: {
        type: String,
        default: "",
    },
    time: {
        type: String,
        default: "",
    }
});

const Calendar = mongoose.model("Calendar", CalendarSchema);

module.exports = Calendar;