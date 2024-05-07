import UserSvg from "../../images/icons/user-duotone.svg";
import { ReactComponent as EyeClosedSvg } from "../../images/icons/eye-closed-duotone.svg";
import { ReactComponent as EyeSvg } from "../../images/icons/eye-duotone.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      email,
      password,
    };
    try {
      handleClear();
    } catch (error) {}
  };

  const handleClear = () => {
    setEmail("");
    setPassword("");
  };

  console.log(email, password);
  return (
    <form onSubmit={(e) => handleSubmit(e)} className=" p-xl-5 p-md-2 p-sm-0  ">
      <img src={UserSvg} alt="icon" className="d-flex mx-auto mb-4 mt-4 " />
      <div className=" mb-3 mx-md-5 mx-sm-auto mx-auto">
        <input
          value={email}
          type="email"
          className="form-control form-control-lg custom-input"
          placeholder="Email"
          style={{ backgroundColor: "#E2D6D6" }}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div
        className="mb-3 mx-md-5 mx-sm-auto mx-auto d-flex flex-row align-items-center rounded-3 "
        style={{ backgroundColor: "#E2D6D6" }}
      >
        <input
          value={password}
          type={isVisible ? "text" : "password"}
          className="form-control form-control-lg custom-input"
          placeholder="Password"
          style={{ backgroundColor: "#E2D6D6", border: "none" }}
          onChange={(e) => setPassword(e.target.value)}
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
            Sign up now
          </Link>
        </p>
      </div>
    </form>
  );
}

export default LoginPage;
