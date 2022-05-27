import React, { useContext } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";

function Task({ taskName, completed, id }) {
  const { user, tasks, setTask } = useContext(UserContext);
  let navigate = useNavigate();

  const onEdit = (event) => {
    event.preventDefault();
    navigate(`/task/edit/${id}`);
  };

  const onDelete = async (event) => {
    event.preventDefault();
    try {
      await fetch(`http://localhost:3001/home/tasks/delete/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify(),
      });
      const fetchdata = async () => {
        try {
          const response = await fetch("http://localhost:3001/home/alltask", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: localStorage.getItem("token"),
            },
          });
          const apidata = await response.json();
          setTask(apidata);
        } catch (error) {}
      };
      fetchdata();
    } catch (error) {}
  };

  return (
    <div className="bg-light p-3 mb-3 my-4">
      <Row>
        <Col xs={2}>
          <p className="fw-bold">Task:</p>
        </Col>
        <Col>
          <p>{taskName}</p>
        </Col>
        <Col>
          <Button onClick={onEdit}>Edit</Button>
        </Col>
        <Col>
          <Button onClick={onDelete} variant="danger">
            Delete
          </Button>
        </Col>
      </Row>
      <Row className="divider"></Row>
    </div>
  );
}

export default Task;
