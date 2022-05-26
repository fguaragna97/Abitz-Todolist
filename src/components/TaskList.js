import React from "react";
import { Button } from "react-bootstrap";
import Task from "./Task";
import { useNavigate } from "react-router-dom";

// here we do a map function to show all the list.
function TaskList({ data }) {
  const handlenavigate = () => {
    navigate("/newtask");
  };
  let navigate = useNavigate();
  return (
    <>
      <h1 className="my-2">To do list</h1>
      {data.map((item) => (
        <Task
          key={item._id}
          id={item._id}
          taskName={item.taskName}
          completed={item.completed}
        />
      ))}
      {<Button onClick={handlenavigate}>New Task</Button>}
    </>
  );
}

export default TaskList;
