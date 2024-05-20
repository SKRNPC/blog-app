import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function PostDetailPage() {
  const { id } = useParams();
  const [post, setPost] = useState("");
  const bearerToken = localStorage.getItem("token");
  const { isAuthenticated } = useSelector((state) => state.auth);
  function formatDate(dateString) {
    const date = new Date(dateString);
    if (isNaN(date)) {
      console.error("Invalid date format:", dateString);
      return "Invalid Date";
    }
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

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
  }, []);

  return (
    <>
      <div className="bg-secondary col-9 mx-auto d-flex justify-content-start p-4 ">
        <div className="bg-light w-75 p-5">
          <div className=" d-flex flex-column align-items-center">
            <p className="display-5 ps-2 d-flex justify-content-center text-center">
              {post.blog_name}
            </p>
            <div className="d-flex flex-row justify-content-center">
              <p className="small text-secondary p-1 ">
                {isAuthenticated?.username}
              </p>
              <p className="small text-secondary p-1">
                {formatDate(post.created_date)}
              </p>
            </div>
          </div>
          <p className="lead text-dark p-2">{post.article}</p>
        </div>
      </div>
    </>
  );
}

export default PostDetailPage;
