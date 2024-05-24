function AuthLayout({ children }) {
  return (
    <div className="vh-100  bg-image d-flex align-items-center bg-white d-flex  align-items-center p-5">
      <div className="container col-xl-4 col-lg-4 col-sm-11 p-xl-5 p-sm-5 shadow rounded-2">
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;
