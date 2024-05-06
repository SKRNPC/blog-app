import UserSvg from "../images/icons/user-duotone.svg";

function LoginPage() {
  return (
    <div
      className=" d-flex align-items-center "
      style={{ minHeight: "100vh", backgroundColor: "#E2D6D6" }}
    >
      <div className="container w-50 align-items-center p-5  bg-light rounded-3">
        <img src={UserSvg} alt="icon" className="d-flex mx-auto" />
        <form className=" p-5 ">
          <div className="mb-3 mx-5">
            <input
              type="email"
              className="form-control form-control-lg custom-input"
              placeholder="Email"
              style={{ backgroundColor: "#E2D6D6" }}
            />
          </div>
          <div className="mb-3 mx-5">
            <input
              type="password"
              className="form-control form-control-lg custom-input"
              placeholder="Password"
              style={{ backgroundColor: "#E2D6D6" }}
            />
          </div>
          <div className="mb-3 form-check mx-5">
            <input
              type="checkbox"
              className="form-check-input custom-input"
              id="checkbox-login"
            />
            <label className="form-check-label" htmlFor="checkbox-login">
              Remember me
            </label>
          </div>
          <div className="row mx-5 mb-3">
            <button
              type="submit"
              className="btn btn-lg btn-block  text-white"
              style={{ backgroundColor: "#9B6262" }}
            >
              Login
            </button>
          </div>
          <div className="row mx-5 ">
            <p className="d-flex justify-content-center text-sm-center  ">
              Don't have an account?&nbsp;
              <a href="/signup" className="signup-link">
                Sign up now
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
