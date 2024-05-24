import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreatePostPage() {
  const [name, setName] = useState("");
  const [article, setArticle] = useState("");
  // const [image, setImage] = useState(null);
  const navigation = useNavigate();
  // const handleImageChange = (e) => {
  //   setImage(e.target.files[0]);
  // };
  const bearerToken = localStorage.getItem("token");
  const handleSubmit = async (e) => {
    e.preventDefault();

    // const formData = new FormData();
    // formData.append("image", image);

    const payload = {
      blog_name: name,
      article: article,
    };
    try {
      await axios.post(
        "https://last-samurai-487ac5fe23f0.herokuapp.com/blogger/blog",
        payload,
        {
          headers: {
            Authorization: `Bearer ${bearerToken}`,
          },
        }
      );
      navigation("/profile");
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
          onSubmit={(e) => handleSubmit(e)}
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
            <label
              className="form-label display-6 text-secondary "
              style={{ color: "#E2D6D6" }}
            >
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
          {/* <div className="p-2 d-flex flex-column w-75">
            <label className="form-label display-6 text-secondary">
              Upload Image
            </label>
            <input
              type="file"
              onChange={handleImageChange}
              className="form-control d-flex border border-dark w-50"
              accept="image/*"
              style={{ backgroundColor: "transparent" }}
            />
          </div> */}
          <div className="p-2 d-flex justify-content-start w-75">
            <button
              type="submit"
              className=" btn  w-25 text-white"
              style={{ backgroundColor: "#9B6262" }}
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreatePostPage;
