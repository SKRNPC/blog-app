import { ReactComponent as UserSvg } from "../images/icons/user.svg";
import { ReactComponent as EmailSvg } from "../images/icons/email.svg";
import { ReactComponent as PasswordSvg } from "../images/icons/password-duotone.svg";
import { ReactComponent as EyeClosedSvg } from "../images/icons/eye-closed-duotone.svg";
import { ReactComponent as EyeSvg } from "../images/icons/eye-duotone.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleConfirmPassword, setIsVisibleConfirmPassword] =
    useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [passwordRepeat, setPasswordRepeat] = useState("");

  const handleSubmit = () => {};
  return (
    <div
      className=" d-flex align-items-center p-3 "
      style={{ minHeight: "100vh", backgroundColor: "#E2D6D6" }}
    >
      <div className="container col-xl-6 col-lg-8 col-sm-11 align-items-center p-xl-5 p-sm-4 bg-light rounded-3">
        <form className="p-xl-5 p-md-2 p-sm-2">
          <div className="mb-4 mx-5 text-center mt-4 ">
            <h2>Sign Up</h2>
            <p className="mb-4 text-sm-center ">Create your account</p>
          </div>
          <div className="col">
            <div className="mb-4 mx-3 d-flex flex-row align-items-center ">
              <UserSvg />
              <input
                type="text"
                className="form-control form-control-lg custom-input ms-2 "
                placeholder="Username"
                style={{ backgroundColor: "#E2D6D6" }}
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
            <div className="mb-4 mx-3 d-flex flex-row align-items-center ">
              <EmailSvg />
              <input
                type="email"
                className="form-control form-control-lg custom-input ms-2 "
                placeholder="Email"
                style={{ backgroundColor: "#E2D6D6" }}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="mb-4 mx-3 d-flex flex-row align-items-center">
              <PasswordSvg />
              <div
                className="d-flex flex-row align-items-center ms-2 rounded-3 "
                style={{ backgroundColor: "#E2D6D6", width: "100%" }}
              >
                <input
                  type={isVisible ? "text" : "password"}
                  className="form-control form-control-lg custom-input "
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
            </div>
            {/* <div className="mb-4 mx-3 d-flex flex-row align-items-center">
              <PasswordSvg />
              <div
                className="d-flex flex-row align-items-center ms-2 rounded-3"
                style={{ backgroundColor: "#E2D6D6", width: "100%" }}
              >
                <input
                  type={isVisibleConfirmPassword ? "text" : "password"}
                  className="form-control form-control-lg custom-input "
                  placeholder="Confirm Password"
                  style={{ backgroundColor: "#E2D6D6", border: "none" }}
                  onChange={(event) => setPasswordRepeat(event.target.value)}
                />
                <div
                  onClick={() =>
                    setIsVisibleConfirmPassword(!isVisibleConfirmPassword)
                  }
                  className="mx-2"
                  style={{ cursor: "pointer" }}
                >
                  {isVisibleConfirmPassword ? <EyeSvg /> : <EyeClosedSvg />}
                </div>
              </div>
            </div> */}
            <div className="mx-3 mb-2 d-flex justify-content-end">
              <button
                type="submit"
                className="btn btn-lg  text-white "
                style={{ backgroundColor: "#9B6262", width: "100%" }}
                onClick={handleSubmit}
              >
                Sign Up
              </button>
            </div>
            <div className="row mx-auto ">
              <p className="d-flex justify-content-center text-sm-center  ">
                Already have an account?&nbsp;
                <Link to="/login" className="signup-link">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
