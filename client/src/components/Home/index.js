import home from "../../images/house.gif";

function Home() {
  return (
    <div>
      <img
        className="ml-3"
        src={home}
        alt="home"
        style={{ height: "50px", width: "50px" }}
      />
    </div>
  );
}

export default Home;
