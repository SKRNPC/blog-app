import { ReactComponent as UserSvg } from "../../images/icons/user.svg";
import { ReactComponent as EmailSvg } from "../../images/icons/email.svg";
import { ReactComponent as PasswordSvg } from "../../images/icons/password-duotone.svg";
import { ReactComponent as EyeClosedSvg } from "../../images/icons/eye-closed-duotone.svg";
import { ReactComponent as EyeSvg } from "../../images/icons/eye-duotone.svg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const [isVisible, setIsVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigation = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      username,
      email,
      password,
      role: "BLOGGER",
    };
    try {
      await axios.post(
        "https://last-samurai-487ac5fe23f0.herokuapp.com/register/",
        payload
      );
      navigation("/login");
    } catch (error) {
      setMessage(error.response.data);
      console.log(message);
    }
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)} className="p-xl-2 p-md-2 p-sm-0">
        <div className="d-flex flex-column text-center   justify-content-center pb-4 ">
          <h2 className="display-6">Sign Up</h2>
          <p className="mb-1 text-sm-center ">Create your account</p>
        </div>
        <div className="col">
          <div className="mb-4 mx-3 d-flex flex-row align-items-center ">
            <UserSvg />
            <input
              value={username}
              type="text"
              className="form-control form-control-lg ms-2 rounded-3 border border-dark"
              placeholder="Username"
              style={{
                backgroundColor: "transparent",
              }}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4 mx-3 d-flex flex-row align-items-center ">
            <EmailSvg />
            <input
              value={email}
              type="email"
              className="form-control form-control-lg  ms-2 rounded-3 border border-dark "
              placeholder="Email"
              style={{
                backgroundColor: "transparent",
              }}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4 mx-3 d-flex flex-row align-items-center">
            <PasswordSvg />
            <div
              className="d-flex flex-row align-items-center ms-2 border border-dark rounded-3 "
              style={{ backgroundColor: "transparent", width: "100%" }}
            >
              <input
                value={password}
                type={isVisible ? "text" : "password"}
                className="form-control form-control-lg  rounded-3 "
                placeholder="Password"
                style={{ backgroundColor: "transparent", border: "none" }}
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
          <div className="mx-3 mb-2 d-flex justify-content-end">
            <button
              type="submit"
              className="btn btn-lg  text-white "
              style={{ backgroundColor: "#9B6262", width: "100%" }}
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
    </>
  );
}

export default SignUp;
