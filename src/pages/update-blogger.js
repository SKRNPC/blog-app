import UpdateBloggerPage from "../components/admin/UpdateBloggerPage";
import AuthLayout from "../components/auth/auth-layout";
import NavBar from "../components/navbar";

function UpdateBlogger() {
  return (
    <NavBar>
      <AuthLayout>
        <UpdateBloggerPage />
      </AuthLayout>
    </NavBar>
  );
}

export default UpdateBlogger;
