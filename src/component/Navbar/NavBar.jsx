import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
function NavBar() {
  return (
    <Navbar bg="dark" variant={"dark"} expand="lg">
      <Navbar.Brand as={Link} to="/">
        Student Portal
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav defaultActiveKey="/home">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>

          <Nav.Link as={Link} to="/form " state={{ task: "create" }}>
            Form
          </Nav.Link>
          <Nav.Link as={Link} to="/products">
            Products
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default NavBar;
