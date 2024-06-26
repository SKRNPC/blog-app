import { ReactComponent as EyeClosedSvg } from "../../images/icons/eye-closed-duotone.svg";
import { ReactComponent as EmailSvg } from "../../images/icons/email.svg";
import { ReactComponent as PasswordSvg } from "../../images/icons/password-duotone.svg";
import { ReactComponent as EyeSvg } from "../../images/icons/eye-duotone.svg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../../redux/features/authSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoginPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      email,
      password,
    };
    try {
      const response = await axios.post(
        "https://last-samurai-487ac5fe23f0.herokuapp.com/login/",
        payload
      );

      localStorage.setItem("token", response?.data?.access);
      dispatch(login(response.data.data));
      navigation("/profile");
    } catch (error) {
      setMessage(error.response.data);
      toast.error(message.error);
    }
  };

  return (
    <>
      <ToastContainer />
      <form
        onSubmit={(e) => handleSubmit(e)}
        className=" p-xl-2 p-md-2 p-sm-0 "
      >
        <div className="d-flex justify-content-center pb-4 ">
          <h2 className="display-6">Welcome</h2>
        </div>
        <div className="col">
          <div className=" mb-3 mx-3 d-flex flex-row align-items-center">
            <EmailSvg />
            <input
              value={email}
              type="email"
              className="form-control form-control-lg ms-2 rounded-3 border border-dark"
              placeholder="Email"
              style={{
                backgroundColor: "transparent",
              }}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3 mx-3 d-flex flex-row align-items-center">
            <PasswordSvg />
            <div
              className="d-flex flex-row align-items-center ms-2 rounded-3 border border-dark"
              style={{
                backgroundColor: "transparent",
                width: "100%",
              }}
            >
              <input
                value={password}
                type={isVisible ? "text" : "password"}
                className="form-control form-control-lg rounded-3 "
                placeholder="Password"
                style={{ backgroundColor: "transparent", border: "none" }}
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
          </div>
          <div className="mb-3 mx-5 w-50 ">
            <input
              type="checkbox"
              className="form-check-input custom-input ms-2 rounded-0 "
              id="checkbox-login"
            />
            <label className="form-check-label ms-2 " htmlFor="checkbox-login">
              Remember me
            </label>
          </div>
          <div className="mx-3 mb-2 d-flex justify-content-end">
            <button
              type="submit"
              className="btn-lg btn  text-white rounded-3"
              style={{ backgroundColor: "#9B6262", width: "100%" }}
            >
              Login
            </button>
          </div>
          <div className="row mx-auto ">
            <p className="d-flex justify-content-center text-sm-center  ">
              Don't have an account?&nbsp;
              <Link to="/signup" className="signup-link fw-bold ">
                Sign up now
              </Link>
            </p>
          </div>
        </div>
      </form>
    </>
  );
}

export default LoginPage;
