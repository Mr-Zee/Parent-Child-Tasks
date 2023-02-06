import "./App.css";
import Task from "./Task";
import AddTask from "./AddTask";
import { useState, useEffect } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [parentData, setParentData] = useState([]);
  const [childData, setChildData] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);
  const toggleModal = (status) => {
    setShowAddTask(status);
    getData();
  };
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const response = await fetch("http://44.202.40.172/api/tasks/", {
      method: "GET",
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
        <h3>My Task</h3>
        <button
          onClick={() => {
            setShowAddTask(true);
          }}
        >
          Add Task
        </button>
      </div>
      <div className="tasks">
        {parentData.map((item) => {
          return <Task task={item} getData={getData} childData={childData} />;
        })}
      </div>
      {showAddTask ? <AddTask toggleModal={toggleModal} /> : null}
    </div>
  );
};

export default App;
