import ActivePostsPage from "../components/ActivePostsPage";
import NavBar from "../components/navbar";

function ActivePosts() {
  return (
    <>
      <div>
        <NavBar>
          <ActivePostsPage />
        </NavBar>
      </div>
    </>
  );
}

export default ActivePosts;
