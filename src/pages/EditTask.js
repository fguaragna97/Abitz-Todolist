import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function EditTask() {
  let navigate = useNavigate();
  const params = useParams();
  const [edit, setEdit] = useState({});

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/home/tasks/${params.id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: localStorage.getItem("token"),
            },
          }
        );
        const apidata = await response.json();
        setEdit(apidata);
      } catch (error) {}
    };
    fetchdata();
  }, []);

  console.log(params.id);

  const handleEdit = async (event) => {
    event.preventDefault();
    const newdata = {
      taskName: edit.taskName,
    };

    try {
      await fetch(`http://localhost:3001/home/tasks/${params.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify(newdata),
      });
      navigate("/");
    } catch (error) {}
  };

  const handleChange = (event) => {
    setEdit({
      ...edit,
      taskName: event.target.value,
    });
  };

  return (
    <>
      <h2 className="my-4">New Task</h2>
      <Form onSubmit={handleEdit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control value={edit.taskName} onChange={handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Save Changes
        </Button>
      </Form>
    </>
  );
}
