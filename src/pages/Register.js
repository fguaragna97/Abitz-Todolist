import React from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Register() {
  let navigate = useNavigate();
  const handleRegister = async (event) => {
    event.preventDefault();
    // with these we can capture the value of the input
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    const confirmpassword = event.target.elements.confirmpassword.value;

    const data = {
      email,
      password,
    };

    if (password === confirmpassword) {
      try {
        const response = await fetch("http://localhost:3001/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const apidata = await response.json();
        console.log(apidata);
        navigate("/login");
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("passwords doesnt match");
    }
  };
  return (
    <>
      <h2 className="my-4">Register</h2>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="confirmpassword"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </>
  );
}
