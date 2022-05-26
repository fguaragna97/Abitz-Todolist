import React, { useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Task({ taskName, completed, id }) {
  let navigate = useNavigate();
  const onEdit = (event) => {
    event.preventDefault();
    navigate(`/task/edit/${id}`);
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
      </Row>
      <Row className="divider"></Row>
    </div>
  );
}

export default Task;
