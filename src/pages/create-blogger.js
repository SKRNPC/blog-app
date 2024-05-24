import CreateBloggerPage from "../components/admin/CreateBloggerPage";
import NavBar from "../components/navbar";
import AuthLayout from "../components/auth/auth-layout";

function CreateBlogger() {
  return (
    <NavBar>
      <AuthLayout>
        <CreateBloggerPage />
      </AuthLayout>
    </NavBar>
  );
}

export default CreateBlogger;
