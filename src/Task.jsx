import React from "react";

function Task(props) {
  return (
    <div className="task-row">
      {props.isParent ? <div className="img">V</div> : null}
      <div className={props.isParent ? "task-box parent" : "task-box child"}>
        <div className="task-tile">Task</div>
        <div className="task-date">
          <span>1-2-30</span>
          {props.isParent ? <span>add child</span> : null}
        </div>
      </div>
    </div>
  );
}

export default Task;
