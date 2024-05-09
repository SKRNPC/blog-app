import { useEffect, useState } from "react";
import defaultImage from "../images/default-img.jpg";
import axios from "axios";

function HomePage() {
  const [users, setUsers] = useState([]);
  const [isGrid, setIsGrid] = useState(false); // Düzen durumu

  const handleLayoutChange = () => {
    setIsGrid(!isGrid); // Durumu tersine çevir
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/home_active.json");
        setUsers(response.data.blogs);
      } catch (error) {
        console.error("There was a problem with the Axios request:", error);
      }
    };

    fetchData();
  }, []);
  console.log(users.blogs);
  return (
    <>
      <div className="d-flex flex-column align-items-center ">
        {users.map((item) => (
          <div
            className="col-11 col-md-10 col-lg-9 col-xl-8 p-3 p-lg-5 mb-4"
            style={{ backgroundColor: "#fff8f5" }}
          >
            <div className="bg-white d-flex flex-sm-row flex-column justify-content-between">
              <div className=" d-flex flex-column justify-content-between  w-100 order-sm-1 order-2 ">
                <div className="">
                  <div className="col d-flex align-items-center p-sm-2 p-md-3 p-1 fw-bolder ">
                    <h1 className="m-0 display-3 ">{item.blog_name}</h1>
                  </div>
                  <div className="col d-flex align-items-center  p-md-4 p-sm-3 p-2 ">
                    <p className="font m-0">{item.article}</p>
                  </div>
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
              <img
                src={item.image || defaultImage}
                alt="Görüntü"
                className="ms-sm-1 element order-sm-2 order-1"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default HomePage;
