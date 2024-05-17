import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function MyPostPage() {
  const [posts, setPosts] = useState([]);
  const bearerToken = localStorage.getItem("token");
  const navigation = useNavigate();
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
  const handleClick = (id) => {
    localStorage.setItem("postId", id);
    navigation("/update");
  };
  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://last-samurai-487ac5fe23f0.herokuapp.com/blogger/blog?id=${id}`,
        {
          headers: {
            Authorization: `Bearer ${bearerToken}`,
          },
        }
      );
      setPosts(posts.filter((post) => post.id !== id));
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
            <button onClick={() => handleDelete(post.id)}>delete</button>
            <button onClick={() => handleClick(post.id)}>update</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default MyPostPage;
