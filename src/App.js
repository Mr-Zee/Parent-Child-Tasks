import "./App.css";
import Task from "./Task";

function App() {
  return (
    <div className="App">
      <div className="top-row">
        <h3>My Task</h3>
        <button>Add Task</button>
      </div>
      <div className="tasks">
        <Task isParent={true}></Task>
        <Task isParent={false}></Task>
        <Task isParent={true}></Task>
      </div>
    </div>
  );
}

export default App;
