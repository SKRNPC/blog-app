import ArticlesDetailPage from "../components/admin/ArticlesDetailPage";
import NavBar from "../components/navbar";

function ArticlesDetail() {
  return (
    <>
      <div>
        <NavBar>
          <ArticlesDetailPage />
        </NavBar>
      </div>
    </>
  );
}

export default ArticlesDetail;
