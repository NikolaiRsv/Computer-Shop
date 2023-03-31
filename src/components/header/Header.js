import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const styles = {
  navItem: {
    color: "orange",
    fontSize: "20px",
  },
};

export const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand
            style={{ color: "orange", marginRight: "70%", fontSize: "25px" }}
            
          >
             <Link
                to="/"
                style={{ textDecoration: "none", ...styles.navItem }}
              >
                Computer Store
              </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className="navItem" style={styles.navItem} >
            <Link
                to="/"
                style={{ textDecoration: "none", ...styles.navItem }}
              >
                Home
              </Link>
            </Nav.Link>
            <Nav.Link className="navItem" style={styles.navItem}>
              <Link
                to="/catalog"
                style={{ textDecoration: "none", ...styles.navItem }}
              >
                Catalog
              </Link>
            </Nav.Link>
            <Nav.Link className="navItem" style={styles.navItem}>
              <Link
                to="/login"
                style={{ textDecoration: "none", ...styles.navItem }}
              >
                Login
              </Link>
            </Nav.Link>
            <Nav.Link className="navItem" style={styles.navItem}>
              <Link
                to="/register"
                style={{ textDecoration: "none", ...styles.navItem }}
              >
                Register
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
