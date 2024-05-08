import { useEffect, useState } from "react";
import defaultImage from "../images/default-img.jpg";
import axios from "axios";

function HomePage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("/home_active.json")
      .then((response) => {
        setUsers(response.data.blogs);
      })
      .catch((error) => {
        console.error("There was a problem with the Axios request:", error);
      });
  }, []);
  console.log(users.blogs);
  return (
    <>
      <div className="d-flex flex-column align-items-center mt-2 ">
        {users.map((item) => (
          <div
            className="col-11 col-md-10 col-lg-9 col-xl-8 p-3 p-lg-5 "
            style={{ backgroundColor: "#fff8f5" }}
          >
            <div className="bg-white d-flex flex-row justify-content-between">
              <div className=" d-flex flex-column justify-content-between  w-100 ">
                <div className="">
                  <div className="col d-flex align-items-center p-sm-2 p-md-3 p-1 fw-bold ">
                    <h3 className="m-0">{item.blog_name}</h3>
                  </div>
                  <div className="col d-flex align-items-center  p-md-4 p-sm-3 p-2 ">
                    <p className=" fs-6 lead m-0">{item.article}</p>
                  </div>
                </div>
                <div className="p-md-3 p-sm-2 p-1 ">
                  <button
                    className="btn d-flex w-lg-25  text-white fw-bold rounded-0 "
                    style={{ backgroundColor: "#9B6262", width: "110px" }}
                  >
                    Read More
                  </button>
                </div>
              </div>
              <img
                src={item.image || defaultImage}
                alt="Görüntü"
                style={{ width: "40%", height: "40%" }}
                className="ms-1"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default HomePage;
