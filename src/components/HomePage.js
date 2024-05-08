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
      <div className="d-flex flex-column align-items-center ">
        {users.map((item) => (
          <div className="bg-light  col-7 p-5 ">
            <div className="bg-white d-flex flex-row justify-content-between">
              <div className="p-3 d-flex flex-column justify-content-between w-100 ">
                <div className="">
                  <div className="col p-3 fw-bold ">
                    <h1>{item.blog_name}</h1>
                  </div>
                  <div className="col p-3">
                    <p className="lead">{item.article}</p>
                  </div>
                </div>
                <button
                  className="btn p-3 w-25 text-white fw-bold rounded-0 "
                  style={{ backgroundColor: "#9B6262" }}
                >
                  Read More
                </button>
              </div>
              <img
                src={item.image || defaultImage}
                alt="Görüntü"
                style={{ width: "40%" }}
                className="ms-2"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default HomePage;
