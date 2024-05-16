import axios from "axios";
import { useEffect, useState } from "react";

function MyPostPage() {
  const [posts, setPosts] = useState([]);
  const bearerToken = localStorage.getItem("token");
  const getPosts = async () => {
    try {
      const response = await axios.get(
        `https://last-samurai-487ac5fe23f0.herokuapp.com/home_inactive`,
        {
          headers: {
            Authorization: `Bearer ${bearerToken}`,
          },
        }
      );
      console.log("res", response.data);
      setPosts(response.data.blogs);
      console.log("se", posts);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <>
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <h2>{post.blog_name}</h2>
            <p>{post.article}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default MyPostPage;
