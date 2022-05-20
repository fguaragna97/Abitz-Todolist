import React from "react";
import { Button, Form } from "react-bootstrap";

export default function Login() {
  const handleLogin = async (event) => {
    event.preventDefault();
    // with these we can capture the value of the input
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    console.log(email, password);
    // // here we send the config of the response type
    // const bodyresponse = {};

    // // we send the request in a try catch in case it fails
    // try {
    //   setError("");
    //   setLoading(true);
    //   const response = await fetch(
    //     "https://api.openai.com/v1/engines/text-curie-001/completions",
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(bodyresponse),
    //     }
    //   );
    //   const apidata = await response.json();

    //   const data = apidata.choices[0].text;
    //   const id = apidata.id;

    //   const info = { prompt, response, id };

    //   // we set data with the old information and with the new one also save in the local storage.
    //   setData([info, ...data]);
    //   localStorage.setItem("alldata", JSON.stringify([info, ...data]));
    //   setLoading(false);
    // } catch (error) {
    //   setError(error);
    //   setLoading(false);
    // }

    // // we reset the input
    // event.target.elements.prompt.value = "";
  };

  return (
    <>
      <h2 className="my-4">Login</h2>
      <Form onSubmit={handleLogin}>
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
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Log in
        </Button>
      </Form>
    </>
  );
}
