const { response } = require("express");
const e = require("express");
// const {replaceOne} = require("../models/Book");
const Task = require("../models/Task");
const parseRequestBody = require("../utils/parseRequestBody");

const getTasks = async (request, response) => {
    try {
        const tasks = await Task.find();
        if (!tasks) {
            return response.status(400).json({
                error: "Error in getting task!",
            });
        }
        response.render("index.ejs",{data:tasks})
    } catch (e) {
        return response.status(400).json({
            error: e,
        });
    }
};

const getTaskById = async (request, response) => {
    try {
        const task = await Task.find({ _id: request.params.id });
        if (!task || task.length === 0) {
            return response.status(400).json({
                error: "Task not found!",
            });
        }
        response.render("update.ejs",{data:task})
    } catch (e) {
        return response.status(400).json({
            error: e,
        });
    }
};

const addTask = async (request, response) => {
    try {
        const task = {
            date: request.body.date,
            subject: request.body.subject,
            task: request.body.task,
        };

        const newTask = new Task(task);
        const result = await newTask.save();

        if (!result) {
            return response.status(400).json({
                error: "Error in adding new task!",
            });
        }

      response.redirect('./')
    } catch (e) {
        return response.status(400).json({
            error: e,
        });
    }
};

const updateTasksForm = async (request,response) => {
    try {
        const tasks = await Task.find({_id:request.params.id});
        console.log(tasks.task)
        if(!tasks) return response.status(400).send("Error in updating task by id");
        response.render('update',{ 
            tasks: tasks
        });
    } catch (error) {
        response.status(500).send(error);
    }
}

const updateTask = async (request, response) => {
    const updates = parseRequestBody(request.body);
    try {
        const result = await Task.findOneAndUpdate(
            { _id: request.params.id },
            { $set: updates }
        );

        if (!result) {
            return response.status(400).json({
                error: "Error in updating task!",
            });
        }
        response.redirect('../')
    } catch (e) {
        return response.status(400).json({
            error: e,
        });
    }
};

const deleteTask = async (request, response) => {
    try {
        await Task.deleteOne({ _id: request.params.id }, (error, result) => {
            if (error) {
                return response.status(400).json({
                    error: error,
                });
            }

            response.redirect('../')
        });
    } catch (e) {
        return response.status(400).json({
            error: e,
        });
    }
};

module.exports = {
    getTasks,
    addTask,
    getTaskById,
    updateTask,
    deleteTask,
    updateTasksForm
};
