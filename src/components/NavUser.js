import React, { useContext } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";

export default function NavUser() {
  let navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    setUser(null);
    navigate("/login");
  };
  return user?.email ? (
    <Nav>
      <Link to="/profile" className="nav-link">
        {user.email}
      </Link>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </Nav>
  ) : (
    <Nav>
      <Link to="/login" className="nav-link">
        Login
      </Link>
      <Link to="/register" className="nav-link">
        Register
      </Link>
    </Nav>
  );
}
