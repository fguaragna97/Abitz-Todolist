import React from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function NewTask() {
  let navigate = useNavigate();
  const handleNewTask = async (event) => {
    event.preventDefault();
    // with these we can capture the value of the input
    const taskName = event.target.elements.taskName.value;

    const data = {
      taskName,
    };

    try {
      const response = await fetch("http://localhost:3001/home", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify(data),
      });
      const apidata = await response.json();
      console.log(apidata);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2 className="my-4">New Task</h2>
      <Form onSubmit={handleNewTask}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control placeholder="Enter task name" name="taskName" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Task
        </Button>
      </Form>
    </>
  );
}
