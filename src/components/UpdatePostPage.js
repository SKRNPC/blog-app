import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function UpdatePostPage() {
  const [name, setName] = useState("");
  const [article, setArticle] = useState("");

  const navigation = useNavigate();
  const id = localStorage.getItem("postId");

  useEffect(() => {
    // Post verilerini almak için ID'yi kullan
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `https://last-samurai-487ac5fe23f0.herokuapp.com/blogger/blog?id=${id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setName(response.data.blog_name);
        setArticle(response.data.article);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPost();
  }, [id]);

  const updatePost = async (e) => {
    e.preventDefault();
    const bearerToken = localStorage.getItem("token");
    const payload = {
      blog_name: name,
      article: article,
    };
    try {
      await axios.patch(
        `https://last-samurai-487ac5fe23f0.herokuapp.com/blogger/blog?id=${id}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${bearerToken}`,
          },
        }
      );
      localStorage.removeItem("postId");
      navigation("/login/post");
    } catch (error) {
      console.log(error);
    }
  };
  console.log(name);
  console.log(article);
  return (
    <div className=" vh-100 bg-image align-items-baseline p-5">
      <div className="col-8 d-flex mx-auto justify-content-center">
        <form
          onSubmit={(e) => updatePost(e)}
          className="d-flex align-items-center flex-column w-100 p-3"
        >
          <div className=" p-2 d-flex flex-column w-75">
            <label className="form-label display-6 text-secondary">Title</label>
            <input
              type="text"
              className="form-control d-flex w-100 border border-dark"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ backgroundColor: "transparent" }}
            />
          </div>
          <div className="p-2 d-flex flex-column w-75">
            <label className="form-label display-6 text-secondary ">
              Article
            </label>
            <textarea
              type="text"
              value={article}
              onChange={(e) => setArticle(e.target.value)}
              className="form-control d-flex w-100 border border-dark"
              rows="10"
              style={{ backgroundColor: "transparent" }}
            />
          </div>
          <div className="p-2 d-flex justify-content-start w-75">
            <button type="submit" className=" btn btn-primary w-50">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdatePostPage;
