import { useState } from "react";
import LoginPage from "../components/auth/LoginPage";
import AuthLayout from "../components/auth/auth-layout";
import NavBar from "../components/navbar";

function Login() {
  // const [authState, setAuthState] = useState({ id: 0 });
  // const onLoginSuccess = (data) => {
  //   setAuthState(data);
  // };
  return (
    <>
      <div>
        <NavBar>
          <AuthLayout>
            <LoginPage />
          </AuthLayout>
        </NavBar>
      </div>
    </>
  );
}

export default Login;
