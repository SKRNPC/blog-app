import axios from "axios";
import { useState } from "react";
function CreateComment({ blog_name, article, id }) {
  const [comments, setComments] = useState("");
  console.log("yorum", comments);
  const bearerToken = localStorage.getItem("token");
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      comments,
      blog_name,
      article,
    };
    try {
      const response = await axios.post(
        `https://last-samurai-487ac5fe23f0.herokuapp.com/blogger/blog/comments?blog_id=${id}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${bearerToken}`,
          },
        }
      );
      console.log("comment yanıt", response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-3">
            <textarea
              className="form-control"
              rows="3"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default CreateComment;
