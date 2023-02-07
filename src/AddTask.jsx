import React, { useState } from "react";

function AddTask(props) {
  const [title, setTitle] = useState("");
  const [due, setDue] = useState("");

  async function postData() {
    const response = await fetch("http://44.202.40.172/api/tasks/", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        due: due,
        parent_task: props.task?.id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();

    props.toggleModal(false);
  }

  return (
    <>
      <div className="addTaskModal">
        <form>
          <span>Title</span>
          <input
            type="text"
            name="title"
            id=""
            placeholder="title name"
            onChange={(event) => {
              console.log(event.target.value);
              setTitle(event.target.value);
            }}
          />
          <span>Due</span>
          <input
            type="date"
            name="due"
            id=""
            onChange={(event) => {
              console.log(event.target.value);
              setDue(event.target.value);
            }}
          />
          <span>Parent Task</span>
          <select name="parent-id" id="">
            <option value="parent-task-id">parent {props.parent_task}</option>
          </select>
          <input
            type="button"
            value="Post"
            onClick={(e) => {
              e.preventDefault();
              postData();
            }}
          />
        </form>
      </div>
    </>
  );
}

export default AddTask;
