import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./HeaderStyles.css";

export const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="nav-bar">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="nav-name">
              Computer Store
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className="navItem">
              <Link to="/" className="link-item">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link className="navItem">
              <Link to="/catalog" className="link-item">
                Catalog
              </Link>
            </Nav.Link>
            <Nav.Link className="navItem">
              <Link to="/login" className="link-item">
                Login
              </Link>
            </Nav.Link>
            <Nav.Link className="navItem">
              <Link to="/register" className="link-item">
                Register
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
