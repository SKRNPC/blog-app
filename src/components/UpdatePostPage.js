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
    <>
      <div>
        <form onSubmit={(e) => updatePost(e)} className="p-5">
          <div className=" p-2">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control d-flex w-25"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your post name"
            />
          </div>
          <div className="p-2">
            <label className="form-label">Article</label>
            <textarea
              type="text"
              value={article}
              onChange={(e) => setArticle(e.target.value)}
              className="form-control d-flex w-75"
            />
          </div>
          <div className="p-2 d-flex">
            <button type="submit" className=" btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default UpdatePostPage;
