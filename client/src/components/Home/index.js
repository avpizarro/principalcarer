import "./style.css";

import nina from "../../images/ninahome.png";


function Home({ children, showHome }) {
  if (!showHome) {
  return (
    <div className="home">
    <div
      className="columns is-12 is-container is-centered is-mobile is-multiline"
      style={{ marginTop: "3px" }}
    >
      <div
        className="column is-12 is-centered has-text-weight-bolds"
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

// return (
  <div className="home">
    <div
      className="columns is-12 is-container is-centered is-mobile is-multiline"
      style={{ marginTop: "3px" }}
    >
      <div
        className="column is-12 is-centered has-text-weight-bolds pl-0, pr-0 mt-2"
        style={{ color: "black", textAlign: "center" }}
      >
        <div>
          <div>Home</div>
          <img src={nina} alt="Portrait" />
          {children}
        </div>
      </div>
    </div>
  </div>

// );
}

export default Home;
