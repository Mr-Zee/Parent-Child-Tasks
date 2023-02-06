import "./App.css";
import Task from "./Task";
import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 118,
      title: "nissy1223",
      due: "2023-02-17",
      parent_task: null,
    },
    {
      id: 1,
      title: "nissy13",
      due: "23-02-17",
      parent_task: 118,
    },
  ]);
  return (
    <div className="App">
      <div className="top-row">
        <h3>My Task</h3>
        <button>Add Task</button>
      </div>
      <div className="tasks">
        {tasks.map((item) => {
          return <Task task={item} />;
        })}
      </div>
    </div>
  );
};

export default App;
