const express = require("express");

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());

// Temporary task data
let tasks = [
  { id: 1, title: "Study Deep Learning" },
  { id: 2, title: "Complete CIE-2" }
];

// GET all tasks
app.get("/api/tasks", (req, res) => {
  res.json(tasks);
});

// GET one task
app.get("/api/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  const task = tasks.find((task) => task.id === id);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.json(task);
});

// POST create a task
app.post("/api/tasks", (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    title: req.body.title
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
});

// PUT update a task
app.put("/api/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  const task = tasks.find((task) => task.id === id);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  task.title = req.body.title;

  res.json(task);
});

// DELETE a task
app.delete("/api/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  const taskExists = tasks.some((task) => task.id === id);

  if (!taskExists) {
    return res.status(404).json({ message: "Task not found" });
  }

  tasks = tasks.filter((task) => task.id !== id);

  res.json({ message: "Task deleted successfully" });
});

// Home route
app.get("/", (req, res) => {
  res.json({
    message: "LifeOS API is running"
  });
});

app.listen(PORT, () => {
  console.log(`LifeOS server running on http://localhost:${PORT}`);
});