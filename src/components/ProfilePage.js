import axios from "axios";
import { useEffect, useState } from "react";

function ProfilePage() {
  const [user, setUser] = useState([]);
  const bearerToken = localStorage.getItem("token");

  useEffect(() => {
    const getProfile = async () => {
      try {
        const response = await axios.get(
          "https://last-samurai-487ac5fe23f0.herokuapp.com/profile",
          {
            headers: {
              Authorization: `Bearer ${bearerToken}`,
            },
          }
        );
        console.log("res", response);
        setUser(response.data);
        console.log("se", user);
      } catch (error) {
        console.log(error);
      }
    };
    getProfile();
  }, [bearerToken, user]);

  return (
    <>
      <div className="d-flex flex-row">
        <div
          className="col-2 d-flex flex-column p-5 "
          style={{ backgroundColor: "#fff8f5" }}
        >
          <button
            className="btn d-flex text-white fw-bold rounded-0 justify-content-center mb-3 "
            style={{ backgroundColor: "#9B6262" }}
          >
            Accounts
          </button>
          <button
            className="btn d-flex text-white fw-bold rounded-0 justify-content-center  "
            style={{ backgroundColor: "#9B6262" }}
          >
            My Posts
          </button>
        </div>

        <div className="bg-light p-5 col-8 d-flex flex-column ">
          <div className=" d-flex display-1 p-4 ">My Profile</div>
          <div className="display-5 p-4">About</div>
          <div className="lead p-4">
            <div className="mb-2">Username</div>
            <div className="mb-2">{user.username}</div>
          </div>
          <div className="lead p-4">
            <div className="mb-2">Email</div>
            <div className="mb-2">{user.email}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
