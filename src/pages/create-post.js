import CreatePostPage from "../components/CreatePostPage";

import NavBar from "../components/navbar";
function CreatePost() {
  return (
    <>
      <div>
        <NavBar>
          <CreatePostPage />
        </NavBar>
      </div>
    </>
  );
}

export default CreatePost;
