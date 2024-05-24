import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import defaultImage from "../images/default-img.jpg";
import { ReactComponent as PenSvg } from "../images/icons/pencil.svg";
import { ReactComponent as DeleteSvg } from "../images/icons/trash-simple.svg";

function MyPostPage() {
  const [posts, setPosts] = useState([]);
  const bearerToken = localStorage.getItem("token");
  const navigation = useNavigate();
  const handleDetailClick = (id) => {
    // İstediğiniz URL'ye yönlendirin
    navigation(`/detail/${id}`);
  };

  const handleClick = (id) => {
    localStorage.setItem("postId", id);
    navigation("/update");
  };
  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + " ...";
    }
    return text;
  };
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
    <div className=" min-vh-100 bg-image-home align-items-baseline p-5">
      <div className="d-flex flex-column align-items-center ">
        {posts.map((post) => (
          <div
            className="col-11 col-md-10 col-lg-9 col-xl-8 my-3"
            style={{ backgroundColor: "#fff8f5" }}
          >
            <div className="bg-white d-flex flex-sm-row flex-column justify-content-between rounded-3">
              <div className=" d-flex flex-column justify-content-between  w-100 order-sm-1 order-2 ">
                <div className="d-flex flex-row justify-content-between">
                  <div className="col d-flex flex-row justify-content-between  align-items-center p-sm-2 p-md-2 p-1 fw-bolder ">
                    <h3 className="m-0 display-6 ">{post.blog_name}</h3>
                    <div>
                      <button
                        onClick={() => handleClick(post.id)}
                        className="btn"
                      >
                        <PenSvg />
                      </button>
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="btn"
                      >
                        <DeleteSvg />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col d-flex align-items-center  p-md-3 p-sm-3 p-2 ">
                  <p className="font m-0">{truncateText(post.article, 20)}</p>
                </div>
                <div className="p-md-3 p-sm-2 p-1 ">
                  <button
                    onClick={() => handleDetailClick(post.id)}
                    className="btn d-flex text-white fw-bold rounded-0 justify-content-center "
                    style={{ backgroundColor: "#9B6262", width: "150px" }}
                  >
                    Read More
                  </button>
                </div>
              </div>
              <img
                src={posts.image || defaultImage}
                alt="Görüntü"
                className="ms-sm-1 element order-sm-2 order-1"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyPostPage;
