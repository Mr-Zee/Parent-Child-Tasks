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
          title
          <input
            type="text"
            name="title"
            id=""
            onChange={(event) => {
              console.log(event.target.value);
              setTitle(event.target.value);
            }}
          />
          date
          <input
            type="date"
            name="due"
            id=""
            onChange={(event) => {
              console.log(event.target.value);
              setDue(event.target.value);
            }}
          />
          parent task
          <select name="parent-id" id="">
            <option value="volvo">Volvo</option>
          </select>
          <button
            onClick={(e) => {
              e.preventDefault();
              postData();
            }}
          >
            POST
          </button>
        </form>
      </div>
    </>
  );
}

export default AddTask;
