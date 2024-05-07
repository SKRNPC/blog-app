function AuthLayout({ children }) {
  return (
    <div
      className=" d-flex align-items-center p-3"
      style={{ minHeight: "100vh", backgroundColor: "#F8F9FA" }}
    >
      <div className="container col-xl-6 col-lg-8 col-sm-11 align-items-center p-xl-5 p-sm-4 bg-white shadow rounded-5 border ">
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;
