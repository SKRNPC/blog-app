function AuthLayout({ children }) {
  return (
    <div
      className=" d-flex align-items-center p-3 "
      style={{ minHeight: "100vh", backgroundColor: "#E2D6D6" }}
    >
      <div className="container col-xl-6 col-lg-8 col-sm-11 align-items-center p-xl-5 p-sm-4 bg-light rounded-3">
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;
