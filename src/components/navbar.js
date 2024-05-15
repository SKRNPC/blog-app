import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import SearchBar from "./search-bar";
import { useDispatch } from "react-redux";
import { logout } from "../redux/features/authSlice";
function NavBar({ children }) {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());

    localStorage.removeItem("token");
  };
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
          <div className="p-2">
            <SearchBar />
          </div>

          <Nav className="ms-auto p-3 ">
            <Nav.Link href="/login" className="text-dark ">
              Login
            </Nav.Link>
            <Nav.Link eventKey={2} href="/signup" className="text-dark ">
              Sign up
            </Nav.Link>
            <Nav.Link
              eventKey={3}
              href="/"
              onClick={handleLogout}
              className="text-dark "
            >
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div>{children}</div>
    </>
  );
}

export default NavBar;
