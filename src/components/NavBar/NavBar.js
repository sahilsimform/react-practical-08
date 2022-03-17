import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import { logoutUser } from "../Redux/Actions/Actions";
import "./NavBar.css";

const NavBar = () => {
  const { user } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const history = useHistory();
  const logout = () => {
    dispatch(logoutUser());
    history.push("/signup");
  };

  return (
    <>
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>Sahil Management</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link></Nav.Link>
                <Nav.Link></Nav.Link>
              </Nav>
              <Nav>
                {user ? (
                  <Nav.Link
                    onClick={() => {
                      logout();
                    }}
                  >
                    Logout
                  </Nav.Link>
                ) : (
                  <Nav.Link as={Link} to={"/signup"}>
                    Sign Up
                  </Nav.Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default NavBar;
