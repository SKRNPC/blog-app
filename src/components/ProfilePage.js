import { useSelector } from "react-redux";

function ProfilePage() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  console.log(isAuthenticated);
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
            <div className="mb-2">{isAuthenticated.username}</div>
          </div>
          <div className="lead p-4">
            <div className="mb-2">Email</div>
            <div className="mb-2">{isAuthenticated.email}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
