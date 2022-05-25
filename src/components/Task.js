import React from "react";
import { Row, Col } from "react-bootstrap";

function Task({ taskName, completed }) {
  return (
    <div className="bg-light p-3 mb-3 my-4">
      <Row>
        <Col xs={2}>
          <p className="fw-bold">Task:</p>
        </Col>
        <Col>
          <p>{taskName}</p>
        </Col>
      </Row>
      <Row className="divider"></Row>
    </div>
  );
}

export default Task;
