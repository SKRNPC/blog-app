function AuthLayout({ children }) {
  return (
    <div className=" d-flex align-items-center p-3 bg-white d-flex  align-items-center p-5 ">
      <div
        className="container col-xl-6 col-lg-8 col-sm-11 p-xl-5 p-sm-4 shadow rounded-2"
        style={{ backgroundColor: "#fff8f5" }}
      >
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;
