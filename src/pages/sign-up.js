import AuthLayout from "../components/auth/auth-layout";
import SignUpPage from "../components/auth/SignUpPage";
function SignUp() {
  return (
    <>
      <div>
        <AuthLayout>
          <SignUpPage />
        </AuthLayout>
      </div>
    </>
  );
}

export default SignUp;
