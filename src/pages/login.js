import LoginPage from "../components/auth/LoginPage";
import AuthLayout from "../components/auth/auth-layout";
import NavBar from "../components/navbar";

function Login() {
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
