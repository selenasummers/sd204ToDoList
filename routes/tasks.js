const express = require("express");
const router = express.Router();

const {
  getTasks,
  addTask,
  getTaskById,
  updateTask,
  deleteTask,
  updateTasksForm
} = require("../controllers/taskController");

router.get("/tasks", getTasks);
router.get("/tasks/:id", getTaskById);
router.post("/tasks", addTask);
router.post("/tasks/update/:id", updateTask);
router.get("/tasks/delete/:id", deleteTask);
router.get("/tasks/:id", updateTasksForm),

module.exports = router;