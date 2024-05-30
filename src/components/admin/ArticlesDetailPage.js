import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ArticlesDetailPage() {
  const { id } = useParams();

  const bearerToken = localStorage.getItem("token");
  const [post, setPost] = useState("");
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

  const getActive = async () => {
    try {
      axios.get(
        `https://last-samurai-487ac5fe23f0.herokuapp.com/administration/blogger/blog_approve?id=${id}`,
        {
          headers: {
            Authorization: `Bearer ${bearerToken}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPostDetail();
  }, []);

  return (
    <>
      <div className="bg-primary col-8 mx-auto d-flex justify-content-center  ">
        <div className="bg-light w-100 p-5">
          <div className=" d-flex flex-column align-items-center">
            <p className="display-5 ps-2 d-flex justify-content-center text-center">
              {post.blog_name}
            </p>
          </div>
          <p className="lead text-dark p-2">{post.article}</p>

          <button onClick={getActive}>Active now</button>
        </div>
      </div>
    </>
  );
}

export default ArticlesDetailPage;
