import React, { useState } from "react";

function AddTask(props) {
  const [title, setTitle] = useState("");
  const [due, setDue] = useState("");
  const [parentId, setParentId] = useState(null);

  async function postData() {
    console.log("post ", props.task);
    const response = await fetch("http://44.202.40.172/api/tasks/", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        due: due,
        parent_task: parentId ? parentId : props?.task?.id,
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
              setTitle(event.target.value);
            }}
          />
          <span>Due</span>
          <input
            type="date"
            name="due"
            id=""
            onChange={(event) => {
              setDue(event.target.value);
            }}
          />
          {props.parentData.length > 0 ? (
            <>
              <span>Parent Task</span>
              <select
                name="parent-id"
                id=""
                onChange={(event) => {
                  setParentId(event.target.value);
                }}
              >
                <option value={null}>null</option>
                {props.parentData.map((item, index) => {
                  return (
                    <option value={item.id} key={index}>
                      {item.title}
                    </option>
                  );
                })}
              </select>
            </>
          ) : null}
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
