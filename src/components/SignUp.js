import { ReactComponent as UserSvg } from "../images/icons/user.svg";
import { ReactComponent as EmailSvg } from "../images/icons/email.svg";
import { ReactComponent as PasswordSvg } from "../images/icons/password-duotone.svg";

function SignUp() {
  return (
    <div
      className=" d-flex align-items-center "
      style={{ minHeight: "100vh", backgroundColor: "#E2D6D6" }}
    >
      <div className="container w-50 align-items-center p-5  bg-light rounded-3">
        <form className="p-5">
          <div className="mb-4 mx-5 text-center ">
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
              />
            </div>
            <div className="mb-4 mx-3 d-flex flex-row align-items-center ">
              <EmailSvg />
              <input
                type="email"
                className="form-control form-control-lg custom-input ms-2 "
                placeholder="Email"
                style={{ backgroundColor: "#E2D6D6" }}
              />
            </div>
            <div className="mb-4 mx-3 d-flex flex-row align-items-center">
              <PasswordSvg />
              <input
                type="password"
                className="form-control form-control-lg custom-input ms-2"
                placeholder="Password"
                style={{ backgroundColor: "#E2D6D6" }}
              />
            </div>
            <div className="mb-4 mx-3 d-flex flex-row align-items-center">
              <PasswordSvg />
              <input
                type="password"
                className="form-control form-control-lg custom-input ms-2"
                placeholder="Confirm Password"
                style={{ backgroundColor: "#E2D6D6" }}
              />
            </div>
            <div className="mb-2 d-flex justify-content-center">
              <button
                type="submit"
                className="btn btn-lg  text-white "
                style={{ backgroundColor: "#9B6262", width: "50%" }}
              >
                Sign Up
              </button>
            </div>
            <div className="row mx-auto ">
              <p className="d-flex justify-content-center text-sm-center  ">
                Already have an account?&nbsp;
                <a href="/login" className="signup-link">
                  Login
                </a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
