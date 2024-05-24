import axios from "axios";
import { useEffect, useState } from "react";
import { ReactComponent as PenSvg } from "../images/icons/pencil.svg";

function ProfilePage() {
  const [user, setUser] = useState({});
  const [isEditing, setIsEditing] = useState({ username: false, email: false });
  const [editedUser, setEditedUser] = useState({ username: "", email: "" });
  const bearerToken = localStorage.getItem("token");

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
      setUser(response.data);
      setEditedUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditClick = (field) => {
    setIsEditing({ ...isEditing, [field]: true });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const handleSave = async (field) => {
    try {
      await axios.patch(
        "https://last-samurai-487ac5fe23f0.herokuapp.com/profile/",
        { [field]: editedUser[field] },
        {
          headers: {
            Authorization: `Bearer ${bearerToken}`,
          },
        }
      );
      setUser({ ...user, [field]: editedUser[field] });
      setIsEditing({ ...isEditing, [field]: false });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

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
            <div className="mb-2 d-flex justify-content-between align-items-center">
              <div>Username</div>
              <PenSvg
                onClick={() => handleEditClick("username")}
                style={{ cursor: "pointer" }}
              />
            </div>
            <div className="mb-2">
              {isEditing.username ? (
                <div>
                  <input
                    type="text"
                    name="username"
                    className=""
                    value={editedUser.username}
                    onChange={handleChange}
                  />
                  <button onClick={() => handleSave("username")}>Tamam</button>
                </div>
              ) : (
                <span>{user.username}</span>
              )}
            </div>
          </div>
          <div className="lead p-4">
            <div className="mb-2 d-flex justify-content-between align-items-center">
              <div>Email</div>
              <PenSvg
                onClick={() => handleEditClick("email")}
                style={{ cursor: "pointer" }}
              />
            </div>
            <div className="mb-2">
              {isEditing.email ? (
                <div>
                  <input
                    type="email"
                    name="email"
                    value={editedUser.email}
                    onChange={handleChange}
                  />
                  <button onClick={() => handleSave("email")}>Tamam</button>
                </div>
              ) : (
                <span>{user.email}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
