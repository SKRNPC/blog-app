import WaitingArticlesPage from "../components/admin/WaitingArticlesPage";
import NavBar from "../components/navbar";

function WaitingArticles() {
  return (
    <>
      <div>
        <NavBar>
          <WaitingArticlesPage />
        </NavBar>
      </div>
    </>
  );
}

export default WaitingArticles;
