import { useDispatch } from "react-redux";
import { logout } from "../redux/features/authSlice";
import { useSelector } from "react-redux";
import SearchBar from "./search-bar";
function NavBar({ children }) {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());

    localStorage.removeItem("token");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand p-2" href="/" style={{ color: "#9b6262" }}>
            Home
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <div className="d-flex flex-grow-1 justify-content-center">
              <SearchBar />
            </div>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {isAuthenticated ? (
                <>
                  <li className="nav-item">
                    <a className="nav-link active" href="/create">
                      Blog yaz
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/home" onClick={handleLogout}>
                      Logout
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/profile">
                      Profile
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="/create">
                      Blog yaz
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/login">
                      Login
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/signup">
                      Sign up
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <div>{children}</div>
    </>
  );
}

export default NavBar;
