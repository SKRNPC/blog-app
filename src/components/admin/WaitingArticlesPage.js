import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as PenSvg } from "../../images/icons/pencil.svg";

function WaitingArticlesPage() {
  const bearerToken = localStorage.getItem("token");
  const [waitingArticles, setWaitingArticles] = useState([]);
  const navigation = useNavigate();
  const handleDetailClick = (id) => {
    // İstediğiniz URL'ye yönlendirin
    navigation(`/detail/${id}`);
  };
  const handleClick = (id) => {
    navigation("/update");
  };
  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + " ...";
    }
    return text;
  };
  const getWaitingArticles = async () => {
    try {
      const response = await axios.get(
        `https://last-samurai-487ac5fe23f0.herokuapp.com/administration/blogger/blogs_waiting`,
        {
          headers: {
            Authorization: `Bearer ${bearerToken}`,
          },
        }
      );
      console.log("res", response.data);
      setWaitingArticles(response.data);
      console.log("se", waitingArticles);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getWaitingArticles();
  }, []);

  return (
    <div className=" min-vh-100 bg-image-home align-items-baseline p-5">
      <div className="d-flex flex-column align-items-center ">
        {waitingArticles.map((article) => (
          <div
            className="col-11 col-md-10 col-lg-9 col-xl-8 my-3"
            style={{ backgroundColor: "#fff8f5" }}
          >
            <div className="bg-white d-flex flex-sm-row flex-column justify-content-between rounded-3">
              <div className=" d-flex flex-column justify-content-between  w-100 order-sm-1 order-2 ">
                <div className="d-flex flex-row justify-content-between">
                  <div className="col d-flex flex-row justify-content-between  align-items-center p-sm-2 p-md-2 p-1 fw-bolder ">
                    <h3 className="m-0 display-6 ">{article.blog_name}</h3>
                    <div>
                      <button
                        onClick={() => handleClick(waitingArticles.id)}
                        className="btn"
                      >
                        <PenSvg />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col d-flex align-items-center  p-md-3 p-sm-3 p-2 ">
                  <p className="font m-0">
                    {truncateText(article.article, 20)}
                  </p>
                </div>
                <div className="p-md-3 p-sm-2 p-1 ">
                  <button
                    onClick={() => handleDetailClick(article.id)}
                    className="btn d-flex text-white fw-bold rounded-0 justify-content-center "
                    style={{ backgroundColor: "#9B6262", width: "150px" }}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WaitingArticlesPage;
