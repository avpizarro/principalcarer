const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const CalendarSchema = new Schema({
    date: {
        type: Date,
    },
    description: {
        type: String,
        default: "",
    },
    time: {
        type: String,
        default: "",
    }
}, {
    timestamps: true
});

const Calendar = mongoose.model("Calendar", CalendarSchema);

module.exports = Calendar;