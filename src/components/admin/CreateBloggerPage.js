import axios from "axios";
import { useEffect, useState } from "react";

function CreateBloggerPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const bearerToken = localStorage.getItem("token");
  console.log(bearerToken);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      email,
      username,
      password,
      role: "BLOGGER",
    };
    try {
      const response = await axios.post(
        "https://last-samurai-487ac5fe23f0.herokuapp.com/administration/blogger",
        payload,
        {
          headers: {
            Authorization: `Bearer ${bearerToken}`,
          },
        }
      );
      console.log("res", response);
    } catch (error) {
      console.log(error);
    }
  };
  const getPostDetail = async () => {
    try {
      const response = await axios.get(
        `https://last-samurai-487ac5fe23f0.herokuapp.com/administration/blogger/blogs_waiting`,
        {
          headers: {
            Authorization: `Bearer ${bearerToken}`,
          },
        }
      );
      console.log("res", response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPostDetail();
  }, []);

  return (
    <>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="d-flex form-control flex-column justify-content-center gap gap-4"
        style={{ background: "transparent", border: "none" }}
      >
        <h3 className=" display-6 text-center text-secondary">Create User</h3>
        <input
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          className="form-control form-control-lg border border-black"
          style={{ background: "transparent" }}
        />
        <input
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          className="form-control form-control-lg border border-black"
          value={email}
          style={{ background: "transparent" }}
        />
        <input
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          className="form-control form-control-lg border border-black"
          value={password}
          style={{ background: "transparent" }}
        />
        <button
          className=" btn text-white text-center"
          style={{ backgroundColor: "#9B6262", width: "30%" }}
        >
          Create
        </button>
      </form>
    </>
  );
}

export default CreateBloggerPage;
