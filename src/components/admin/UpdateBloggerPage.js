import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UpdateBloggerPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const { id } = useParams();

  useEffect(() => {
    // Post verilerini almak için ID'yi kullan
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `https://last-samurai-487ac5fe23f0.herokuapp.com/administration/blogger?id=${id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log("blog", response);
        setUsername(response.data.username);
        setEmail(response.data.email);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPost();
  }, [id]);

  const updateBlogger = async (e) => {
    e.preventDefault();

    const payload = {
      username,
      email,
    };
    try {
      await axios.patch(
        `https://last-samurai-487ac5fe23f0.herokuapp.com/administration/blogger`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form
        onSubmit={(e) => updateBlogger(e)}
        className="d-flex form-control flex-column justify-content-center gap  gap-4"
        style={{ background: "transparent", border: "none" }}
      >
        <h3 className=" display-6 text-center text-secondary">Update User</h3>
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
        <button
          className=" btn btn-lg text-white text-center"
          style={{ backgroundColor: "#9B6262", width: "30%" }}
          type="submit"
        >
          Update
        </button>
      </form>
    </>
  );
}

export default UpdateBloggerPage;
