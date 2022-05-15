const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "",
}
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;