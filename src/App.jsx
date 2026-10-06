import { useState } from "react";

function App() {
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
    <div className="lifeos">

      <header className="header">
        <h1>LifeOS</h1>
        <p>Personal Command Center</p>
      </header>

      <nav className="navigation">
        <a href="#home">Home</a>
        <a href="#tasks">Tasks</a>
        <a href="#goals">Goals</a>
        <a href="#about">About</a>
      </nav>

      <main className="main-content" id="home">

        <section className="hero-section">
          <h2>Welcome to LifeOS</h2>
          <p>
            Organize your tasks and goals in one simple place.
          </p>
        </section>

        <section className="content-grid">

          <article className="card" id="tasks">
            <h2>Tasks</h2>

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

          <article className="card" id="goals">
            <h2>Goals</h2>

            <p>
              Set goals and keep yourself focused.
            </p>

            <button>
              View Goals
            </button>
          </article>

        </section>

      </main>

      <footer className="footer" id="about">
        <p>© 2026 LifeOS</p>
      </footer>

    </div>
  );
}

export default App;