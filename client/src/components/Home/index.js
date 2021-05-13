import "./style.css";
import FileUpload from "../FileUpload";
import profile from "../../images/homephoto.png";


function Home({ children, showHome }) {
  if (!showHome) {
  return (
    <div className="home">
    <div
      className="columns is-container is-centered is-mobile is-multiline"
      style={{ margin: "auto", marginTop: "3px", width: "90%" }}
    >
      <div
        className="column is-12 has-text-weight-bolds"
        style={{ color: "black", textAlign: "center" }}
      >
        <div>
          <div>Home</div>
        </div>
      </div>
    </div>
  </div>
);
}

return (
  <div className="home">
    <div
      className="columns is-container is-centered is-mobile is-multiline"
      style={{margin: "auto", marginTop: "3px" }}
    >
      <div
        className="column is-12 has-text-weight-bolds"
        style={{ color: "black", textAlign: "center" }}
      >
        <div>
          <div>Home</div>
          <img src={profile} alt="Portrait" className="mt-6"/>
          <FileUpload />
          {children}
        </div>
      </div>
    </div>
  </div>

);
}

export default Home;
