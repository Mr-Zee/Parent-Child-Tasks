import React from "react";
import { useState, useEffect } from "react";
import AddTask from "./AddTask";

function Task(props) {
  const [showAddTask, setShowAddTask] = useState(false);
  const [myChildData, setMyChildData] = useState([]);

  useEffect(() => {
    let myChildData = props.childData.filter(
      (item) => item.parent_task == props.task.id
    );
    setMyChildData(myChildData);
  }, []);

  const toggleModal = (status) => {
    setShowAddTask(status);
    setTimeout(() => {
      props.getData();
    }, 3000);
  };
  return (
    <>
      <div className="task-row">
        {!props.task.parent_task ? <div className="img">V</div> : null}
        <div
          className={
            !props.task.parent_task ? "task-box parent" : "task-box child"
          }
        >
          <div className="task-tile">{props.task.title}</div>
          <div className="task-date">
            <span>{props.task.due}</span>
            {!props.task.parent_task ? (
              <span
                onClick={() => {
                  setShowAddTask(true);
                }}
              >
                add child Task
              </span>
            ) : null}
          </div>
        </div>
        {showAddTask ? (
          <AddTask toggleModal={toggleModal} task={props.task} />
        ) : null}
      </div>

      {myChildData?.length > 0 &&
        myChildData.map((item) => {
          return <Task task={item} getData={props.getData} childData={[]} />;
        })}
    </>
  );
}

export default Task;
