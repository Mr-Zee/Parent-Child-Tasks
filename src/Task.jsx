import React from "react";

function Task(props) {
  return (
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
          {!props.task.parent_task ? <span>add child</span> : null}
        </div>
      </div>
    </div>
  );
}

export default Task;
