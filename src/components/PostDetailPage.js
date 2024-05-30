import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CreateComment from "./CreateComment";
import defaultImage from "../images/default-img.jpg";
import bg from "../images/blog-img.png";

function PostDetailPage() {
  const { id } = useParams();
  const [post, setPost] = useState("");
  const bearerToken = localStorage.getItem("token");
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [comment, setComment] = useState("");
  function formatDate(dateString) {
    const date = new Date(dateString);
    if (isNaN(date)) {
      return null;
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
  const getComment = async () => {
    try {
      const response = await axios.get(
        `https://last-samurai-487ac5fe23f0.herokuapp.com/blogger/blog/comments?blog_id=${id}`,
        {
          headers: {
            Authorization: `Bearer ${bearerToken}`,
          },
        }
      );

      setComment(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPostDetail();
    getComment();
    console.log("b", comment);
  }, []);

  return (
    <>
      <div className="bg-primary col-8 mx-auto d-flex justify-content-center  ">
        <div className="bg-light w-100 p-5">
          <img
            src={post.blog_name === "Pikaçu" ? defaultImage : post.image || bg}
            alt="Görüntü"
            className="ms-sm-1 element order-sm-2 order-1"
            style={{ width: "100%" }}
          />

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
          <p className="lead text-dark p-2">{comment.comments}</p>
          <CreateComment
            blog_name={post.blog_name}
            article={post.article}
            id={id}
          />
        </div>
      </div>
    </>
  );
}

export default PostDetailPage;
