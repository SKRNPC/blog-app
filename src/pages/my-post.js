import MyPostPage from "../components/MyPostPage";
import NavBar from "../components/navbar";

function MyPost() {
  return (
    <>
      <div>
        <NavBar>
          <MyPostPage />
        </NavBar>
      </div>
    </>
  );
}

export default MyPost;
