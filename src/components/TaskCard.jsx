import { useState } from "react";

function TaskCard({ title }) {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    if (task.trim() === "") return;

    setTasks([...tasks, task]);
    setTask("");
  }

  function removeTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  return (
    <article className="card" id="tasks">
      <h2>{title}</h2>

      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>
        Add Task
      </button>

      <ul className="task-list">
        {tasks.map((item, index) => (
          <li key={index}>
            <span>{item}</span>

            <button onClick={() => removeTask(index)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default TaskCard;