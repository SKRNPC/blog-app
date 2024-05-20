import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PostDetailPage() {
  const { id } = useParams();
  const [post, setPost] = useState("");
  const bearerToken = localStorage.getItem("token");
  const getPostDetail = async () => {
    try {
      const response = await axios.get(
        `https://last-samurai-487ac5fe23f0.herokuapp.com/blogger/blog?id=${id}`,
        {
          headers: {
            Authorization: `Bearer ${bearerToken}`,
          },
        }
      );
      console.log("res", response.data);
      setPost(response.data);
      console.log("se", post);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPostDetail();
  }, [id]);

  return (
    <>
      <div>{post.blog_name}</div>
    </>
  );
}

export default PostDetailPage;
