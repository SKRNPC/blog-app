import LoginPage from "../components/auth/LoginPage";
import AuthLayout from "../components/auth/auth-layout";

function Login() {
  return (
    <>
      <div>
        <AuthLayout>
          <LoginPage />
        </AuthLayout>
      </div>
    </>
  );
}

export default Login;
