import React from "react";
import Task from "./Task";

// here we do a map function to show all the list.
function TaskList({ data }) {
  return (
    <>
      <h1 className="my-2">To do list</h1>
      {data.map((item) => (
        <Task
          key={item.id}
          taskName={item.taskName}
          completed={item.completed}
        />
      ))}
    </>
  );
}

export default TaskList;
