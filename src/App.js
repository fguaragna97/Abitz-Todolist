import { Col, Container, Row } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

import NavbarMenu from "./components/NavbarMenu";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <NavbarMenu></NavbarMenu>
      <Container>
        <Row>
          <Col>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
