import { Navbar, Nav } from "react-bootstrap";

function NavBar({ children }) {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ backgroundColor: "#6cd9a6" }}
        variant="dark"
        className=" p-2"
      >
        <Navbar.Brand href="/" className="text-dark p-4">
          Home
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto p-4 ">
            <Nav.Link href="/login" className="text-dark ">
              Login
            </Nav.Link>
            <Nav.Link eventKey={2} href="/signup" className="text-dark ">
              Sign up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div>{children}</div>
    </>
  );
}

export default NavBar;
