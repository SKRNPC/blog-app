import ProfilePage from "../components/ProfilePage";
import NavBar from "../components/navbar";
function Profile() {
  return (
    <>
      <div>
        <NavBar>
          <ProfilePage />
        </NavBar>
      </div>
    </>
  );
}

export default Profile;
