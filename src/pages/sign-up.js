import AuthLayout from "../components/auth/auth-layout";
import SignUpPage from "../components/auth/SignUpPage";
import NavBar from "../components/navbar";
function SignUp() {
  return (
    <>
      <div>
        <NavBar>
          <AuthLayout>
            <SignUpPage />
          </AuthLayout>
        </NavBar>
      </div>
    </>
  );
}

export default SignUp;
