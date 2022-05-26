import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function EditTask() {
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

  const handleEdit = () => {
    try {
      const response = await fetch(`http://localhost:3001/home/tasks/${params.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const apidata = await response.json();
      if (apidata.error) {
        console.log("User doesnt exist");
      } else {
        localStorage.setItem("token", apidata.token);
        setUser(apidata.user);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h2 className="my-4">New Task</h2>
      <Form onSubmit={handleEdit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control name="taskName" value={edit.taskName} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Save Changes
        </Button>
      </Form>
    </>
  );
}
