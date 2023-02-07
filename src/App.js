import "./App.css";
import Task from "./Task";
import AddTask from "./AddTask";
import { useState, useEffect } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [parentData, setParentData] = useState([]);
  const [childData, setChildData] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);
  const toggleModal = async (status) => {
    setShowAddTask(status);
    await getData();
  };
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const response = await fetch("http://44.202.40.172/api/tasks/", {
      method: "GET",
      crossDomain: true,
    });
    const result = await response.json();
    let parentData = result.filter((item) => !item.parent_task);
    setParentData(parentData);

    let childData = result.filter((item) => item.parent_task);
    setChildData(childData);

    setTasks(result);
  }
  return (
    <div className="App">
      <div className="top-row">
        <h2>My Task</h2>
        <button
          onClick={() => {
            setShowAddTask(true);
          }}
          className="todo-button"
        >
          Add Task
        </button>
      </div>
      <div className="tasks">
        <div className="title-bar">
          <p className="tile-name">Task Title</p>
          <p className="tile-due">Due</p>
        </div>

        {parentData.map((item, index) => {
          return (
            <Task
              task={item}
              getData={getData}
              childData={childData}
              key={index}
            />
          );
        })}
      </div>
      {showAddTask ? <AddTask toggleModal={toggleModal} /> : null}
    </div>
  );
};

export default App;
