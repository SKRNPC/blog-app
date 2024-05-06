import UserSvg from "../images/icons/user-duotone.svg";
import { ReactComponent as EyeClosedSvg } from "../images/icons/eye-closed-duotone.svg";
import { ReactComponent as EyeSvg } from "../images/icons/eye-duotone.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(email, password);
  return (
    <div
      className=" d-flex align-items-center p-3  "
      style={{ minHeight: "100vh", backgroundColor: "#E2D6D6" }}
    >
      <div className="container col-xl-6 col-lg-8 col-sm-11 align-items-center p-xl-5 p-sm-4 bg-light rounded-3">
        <img src={UserSvg} alt="icon" className="d-flex mx-auto mb-4 mt-4 " />
        <form className=" p-xl-5 p-md-2 p-sm-0  ">
          <div className=" mb-3 mx-md-5 mx-sm-auto mx-auto">
            <input
              type="email"
              className="form-control form-control-lg custom-input"
              placeholder="Email"
              style={{ backgroundColor: "#E2D6D6" }}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div
            className="mb-3 mx-md-5 mx-sm-auto mx-auto d-flex flex-row align-items-center rounded-3 "
            style={{ backgroundColor: "#E2D6D6" }}
          >
            <input
              type={isVisible ? "text" : "password"}
              className="form-control form-control-lg custom-input"
              placeholder="Password"
              style={{ backgroundColor: "#E2D6D6", border: "none" }}
              onChange={(event) => setPassword(event.target.value)}
            />
            <div
              onClick={() => setIsVisible(!isVisible)}
              className="mx-2"
              style={{ cursor: "pointer" }}
            >
              {isVisible ? <EyeSvg /> : <EyeClosedSvg />}
            </div>
          </div>
          <div className="mb-3 mx-md-5 mx-sm-auto mx-auto form-check">
            <input
              type="checkbox"
              className="form-check-input custom-input"
              id="checkbox-login"
            />
            <label className="form-check-label" htmlFor="checkbox-login">
              Remember me
            </label>
          </div>
          <div className="row mb-3 mx-md-5 mx-sm-auto mx-auto">
            <button
              type="submit"
              className="btn btn-lg btn-block  text-white"
              style={{ backgroundColor: "#9B6262" }}
            >
              Login
            </button>
          </div>
          <div className="row mx-md-5 mx-sm-auto mx-0 ">
            <p className="d-flex justify-content-center text-sm-center  ">
              Don't have an account?&nbsp;
              <Link to="/signup" className="signup-link">
                <p>Sign up now</p>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
