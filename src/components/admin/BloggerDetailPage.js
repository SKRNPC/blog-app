import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BloggerDetailPage() {
  const bearerToken = localStorage.getItem("token");
  const [blogger, setBlogger] = useState("");
  const { id } = useParams();

  const getBloggerDetail = async () => {
    try {
      const response = await axios.get(
        `https://last-samurai-487ac5fe23f0.herokuapp.com/administration/blogger?id=${id}`,
        {
          headers: {
            Authorization: `Bearer ${bearerToken}`,
          },
        }
      );
      console.log("res", response.data);
      setBlogger(response.data);
      console.log("se", blogger);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBloggerDetail();
  }, []);

  return (
    <>
      <div className="bg-primary col-8 mx-auto d-flex justify-content-center  ">
        <div className="bg-light w-100 p-5">
          <div className=" d-flex flex-column align-items-center">
            <p className="display-5 ps-2 d-flex justify-content-center text-center">
              {blogger.username}
            </p>
            <div className="d-flex flex-row justify-content-center"></div>
          </div>
          <p className="lead text-dark p-2">{blogger.email}</p>
          <p className="lead text-dark p-2">{blogger.role}</p>
          <p className="lead text-dark p-2">{blogger.waiting_blogs}</p>
          <p className="lead text-dark p-2">{blogger.total_blogs}</p>
          <p className="lead text-dark p-2">{blogger.comments}</p>
        </div>
      </div>
    </>
  );
}

export default BloggerDetailPage;
