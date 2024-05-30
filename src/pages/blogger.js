import BloggerPage from "../components/admin/BloggerPage";
import NavBar from "../components/navbar";

function Blogger() {
  return (
    <>
      <div>
        <NavBar>
          <BloggerPage />
        </NavBar>
      </div>
    </>
  );
}

export default Blogger;
