import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = category === "All" ? tasks : tasks.filter((task) => task.category === category);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={category} onSelectCategory={setCategory} />
      <NewTaskForm onAddTask={(newTask) => setTasks([...tasks, newTask])} />
      <TaskList tasks={filteredTasks} onDeleteTask={deleteTask} />
    </div>
  );
}

export default App;