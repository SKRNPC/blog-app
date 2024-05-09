import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProfilePage() {
  const [user, setUser] = useState({});

  const { id } = useParams();
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`/login.json`);
        if (parseInt(id) === response.data.data.id) {
          // URL'deki ID, JSON dosyasındaki kullanıcı ID'sine eşitse
          setUser(response.data.data);
        } else {
          throw new Error("Kullanıcı bulunamadı"); // Kullanıcı bulunamazsa hata fırlat
        }
      } catch (error) {
        console.error("There was a problem fetching the user data:", error);
      }
    };

    fetchUserData();
  }, [id]);
  console.log(id);
  console.log("sea", user);
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
            <div>{user.username}</div>
          </div>
          <div className="lead p-4">
            <div className="mb-2">Email</div>
            <div>{user.email}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
