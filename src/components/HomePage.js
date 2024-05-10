import { useEffect, useState } from "react";
import defaultImage from "../images/default-img.jpg";
import axios from "axios";
import { ReactComponent as ListSvg } from "../images/icons/list.svg";
import { ReactComponent as DotsSvg } from "../images/icons/dots-nine.svg";

import { useSelector } from "react-redux";

function HomePage() {
  const [users, setUsers] = useState([]);
  const [isFirstLayout, setIsFirstLayout] = useState(true);

  const toggleLayout = () => {
    setIsFirstLayout(!isFirstLayout);
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
  const searchTerm = useSelector((state) => state.search.searchTerm);
  const filteredUsers = users.filter((user) =>
    user.blog_name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <div className="d-flex justify-content-end py-2 px-3 border">
        <button onClick={toggleLayout} className="btn border-0 ">
          {isFirstLayout ? <DotsSvg /> : <ListSvg />}
        </button>
      </div>

      {isFirstLayout ? (
        <div className="d-flex flex-column align-items-center ">
          {filteredUsers.map((item) => (
            <div
              className="col-11 col-md-10 col-lg-9 col-xl-8 p-3 p-lg-5 my-3"
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
      ) : (
        <div className="d-flex flex-row flex-wrap justify-content-center ">
          {filteredUsers.map((item) => (
            <div
              className="col-md-2 p-3 my-3 mx-3"
              style={{ backgroundColor: "#fff8f5" }}
            >
              <div className="bg-white d-flex flex-column h-100 ">
                <div className=" d-flex flex-column justify-content-between h-100 w-100 order-2 ">
                  <div className="d-flex flex-column">
                    <div className=" d-flex p-sm-2 p-md-3 p-1 fw-bolder">
                      <h1 className="m-0 fs-4">{item.blog_name}</h1>
                    </div>
                    <div className=" d-flex justify-content-start p-3">
                      <p className="fs-6 m-0">{item.article}</p>
                    </div>
                  </div>
                  <div className="p-md-3 p-sm-2 p-1 ">
                    <button
                      className="btn d-flex text-white fw-bold rounded-0 justify-content-center "
                      style={{ backgroundColor: "#9B6262" }}
                    >
                      Read More
                    </button>
                  </div>
                </div>
                <img
                  src={item.image || defaultImage}
                  alt="Görüntü"
                  className="element order-1"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default HomePage;
