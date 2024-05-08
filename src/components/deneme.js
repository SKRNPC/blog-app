import { useEffect, useState } from "react";
import defaultImage from "../images/default-img.jpg";
import axios from "axios";

function HomePage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Axios kullanarak JSON dosyasından veriyi çekmek
    axios
      .get("/home_active.json")
      .then((response) => {
        setUsers(response.data.blogs); // Çekilen veriyi state'e kaydet
      })
      .catch((error) => {
        console.error("There was a problem with the Axios request:", error);
      });
  }, []);
  console.log(users.blogs);
  return (
    <>
      <div className="col d-flex justify-content-center ">
        <div className="bg-secondary d-flex flex-row justify-content-between col-7 p-3 ">
          {users.map((item) => (
            <div className="p-3 d-flex flex-column ">
              <div className="p-3 fw-bold ">
                <h1>{item.blog_name}</h1>
              </div>
              <div>
                <p className="lead">{item.article}</p>
              </div>
              <img
                src={item.image || defaultImage}
                alt="Görüntü"
                style={{ width: "40%" }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;
