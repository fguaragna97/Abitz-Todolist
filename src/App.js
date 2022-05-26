import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import React from "react";
import NavbarMenu from "./components/NavbarMenu";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NewTask from "./pages/NewTask";
import EditTask from "./pages/EditTask";

export const UserContext = React.createContext(null);

function App() {
  const [user, setUser] = useState(null);
  const [tasks, setTask] = useState([]);
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        tasks,
        setTask,
      }}
    >
      <NavbarMenu></NavbarMenu>
      <Container>
        <Row>
          <Col>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/newtask" element={<NewTask />} />
              <Route path="/task/edit/:id" element={<EditTask />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </UserContext.Provider>
  );
}

export default App;
