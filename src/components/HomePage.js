import defaultImage from "../images/default-img.jpg";

function HomePage() {
  return (
    <>
      <div className="d-flex flex-column align-items-center ">
        <div className="bg-secondary d-flex flex-row justify-content-between col-7 p-3 ">
          <div className="p-3 d-flex flex-column ">
            <div className="p-3 fw-bold ">
              <h1>BlogName</h1>
            </div>
            <div>
              <p className="lead">Article</p>
            </div>
          </div>
          <img src={defaultImage} alt="" style={{ width: "40%" }}></img>
        </div>
      </div>
    </>
  );
}

export default HomePage;
