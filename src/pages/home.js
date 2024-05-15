import HomePage from "../components/HomePage";

import NavBar from "../components/navbar";
function Home() {
  return (
    <>
      <div>
        <NavBar>
          <HomePage />
        </NavBar>
      </div>
    </>
  );
}

export default Home;
