import BloggerDetailPage from "../components/admin/BloggerDetailPage";
import NavBar from "../components/navbar";

function BloggerDetail() {
  return (
    <>
      <div>
        <NavBar>
          <BloggerDetailPage />
        </NavBar>
      </div>
    </>
  );
}

export default BloggerDetail;
