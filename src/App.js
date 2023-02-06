import "./App.css";
import Task from "./Task";
import { useState, useEffect } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const response = await fetch("http://44.202.40.172/api/tasks/", {
      method: "GET",
    });
    const result = await response.json();
    console.log(result);
    setTasks(result);
  }
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
