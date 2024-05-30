import axios from "axios";
import { useEffect, useState } from "react";
import { ReactComponent as PenSvg } from "../images/icons/pencil.svg";
import { ReactComponent as DeleteSvg } from "../images/icons/trash-simple.svg";
import { useNavigate } from "react-router-dom";

function BloggerPage() {
  const [bloggers, setBloggers] = useState([]);
  const bearerToken = localStorage.getItem("token");
  const navigation = useNavigate();
  const handleClick = (id) => {
    navigation(`/update/blogger/${id}`);
  };
  const getBlogger = async () => {
    try {
      const response = await axios.get(
        `https://last-samurai-487ac5fe23f0.herokuapp.com/administration/blogger`,
        {
          headers: {
            Authorization: `Bearer ${bearerToken}`,
          },
        }
      );

      setBloggers(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://last-samurai-487ac5fe23f0.herokuapp.com/administration/blogger?id=${id}`,
        {
          headers: {
            Authorization: `Bearer ${bearerToken}`,
          },
        }
      );
      setBloggers(bloggers.filter((blogger) => blogger.id !== id));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBlogger();
  }, []);

  return (
    <div className=" min-vh-100 bg-image-home align-items-baseline p-5">
      <div className="d-flex flex-column align-items-center ">
        {bloggers.map((blogger) => (
          <div
            className="col-11 col-md-10 col-lg-9 col-xl-8 my-3"
            style={{ backgroundColor: "#fff8f5" }}
          >
            <div className="bg-white d-flex flex-sm-row flex-column justify-content-between rounded-3">
              <div className=" d-flex flex-column justify-content-between  w-100 order-sm-1 order-2 ">
                <div className="d-flex flex-row justify-content-between">
                  <div className="col d-flex flex-row justify-content-between  align-items-center p-sm-2 p-md-2 p-1 fw-bolder ">
                    <h3 className="m-0 display-6 ">{blogger.username}</h3>
                    <div>
                      <button
                        className="btn"
                        onClick={() => handleClick(blogger.id)}
                      >
                        <PenSvg />
                      </button>
                      <button
                        className="btn"
                        onClick={() => handleDelete(blogger.id)}
                      >
                        <DeleteSvg />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col d-flex align-items-center  p-md-3 p-sm-3 p-2 ">
                  <p className="font m-0">{blogger.waiting_blogs}</p>
                </div>
                <div className="p-md-3 p-sm-2 p-1 ">
                  <button
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

export default BloggerPage;
