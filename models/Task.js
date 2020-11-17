const { number } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = Schema({
    date: {type: Date, required: true},
    subject: {type: String, required: true},
    task : {type: String, required: true},
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;