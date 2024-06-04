import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import defaultImage from "../images/default-img.jpg";
import { ReactComponent as ListSvg } from "../images/icons/list.svg";
import { ReactComponent as DotsSvg } from "../images/icons/dots-nine.svg";
import bg from "../images/blog-img.png";

function ActivePostsPage() {
  const [posts, setPosts] = useState([]);
  const bearerToken = localStorage.getItem("token");
  const navigation = useNavigate();
  const [isFirstLayout, setIsFirstLayout] = useState(true);

  const toggleLayout = () => {
    setIsFirstLayout(!isFirstLayout);
  };
  const handleDetailClick = (id) => {
    // İstediğiniz URL'ye yönlendirin
    navigation(`/detail/${id}`);
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
        `https://last-samurai-487ac5fe23f0.herokuapp.com/home/`,
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
      <div
        className="d-flex justify-content-end py-2 px-3 border bg-light"
        style={{ backgroundColor: "#d7f1fa" }}
      >
        <button onClick={toggleLayout} className="btn border-0 ">
          {isFirstLayout ? <DotsSvg /> : <ListSvg />}
        </button>
      </div>
      {isFirstLayout ? (
        <div className="bg-image-home d-flex flex-column align-items-center ">
          {posts.map((item) => (
            <div
              className="col-11 col-md-10 col-lg-8 col-xl-8 my-3"
              style={{ backgroundColor: "#d7f1fa" }}
            >
              <div className="bg-white d-flex flex-sm-row flex-column justify-content-between">
                <div className=" d-flex flex-column justify-content-between  w-100 order-sm-1 order-2 ">
                  <div className=" d-flex flex-column w-auto">
                    <div className="col d-flex align-items-center p-sm-2 p-md-3 p-1 fw-bolder ">
                      <h1 className="m-0 display-3 ">{item.blog_name}</h1>
                    </div>
                    <div className="col d-flex align-items-center  p-md-3 p-sm-3 p-2 ">
                      <p className="font m-0">
                        {truncateText(item.article, 20)}
                      </p>
                    </div>
                  </div>
                  <div className="p-md-3 p-sm-2 p-1 ">
                    <button
                      onClick={() => handleDetailClick(item.id)}
                      className="btn d-flex text-white fw-bold rounded-0 justify-content-center "
                      style={{ backgroundColor: "#9B6262", width: "150px" }}
                    >
                      Read More
                    </button>
                  </div>
                </div>
                <img
                  src={
                    item.blog_name === "Pikaçu"
                      ? defaultImage
                      : item.image || bg
                  }
                  alt="Görüntü"
                  className="ms-sm-1 element order-sm-2 order-1"
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="d-flex flex-row flex-wrap justify-content-center col-9 mx-auto ">
          {posts.map((item) => (
            <div className="col-md-4 p-2  masonry-item ">
              <div className="bg-white d-flex flex-column h-100 w-100">
                <div className=" d-flex flex-column h-100 w-100 order-2 ">
                  <div className="d-flex flex-column">
                    <div className=" d-flex p-sm-2 p-md-3 p-1 fw-bolder">
                      <h1 className="m-0 fs-4">{item.blog_name}</h1>
                    </div>
                    <div className="col d-flex align-items-center  p-md-3 p-sm-3 p-2 ">
                      <p className="font m-0">
                        {truncateText(item.article, 20)}
                      </p>
                    </div>
                  </div>
                  <div className="p-md-3 p-sm-2 p-1 ">
                    <button
                      onClick={() => handleDetailClick(item.id)}
                      className="btn d-flex text-white fw-bold rounded-0 justify-content-center "
                      style={{ backgroundColor: "#9B6262", width: "150px" }}
                    >
                      Read More
                    </button>
                  </div>
                </div>
                <img
                  src={
                    item.blog_name === "Pikaçu"
                      ? defaultImage
                      : item.image || bg
                  }
                  alt="Görüntü"
                  className="element order-1"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default ActivePostsPage;
