import "./style.css";

function Entretainement({ shildren,  showEntertainement }) {
  if (!showEntertainement) {

  return (
    <div className="entertainemet">
    <div
      className="columns is-12 is-container is-centered is-mobile is-multiline entertainemetTitle"
      style={{ marginTop: "0px" }}
    >
      <div
        className="column is-12 is-centered has-text-weight-bolds"
        style={{ color: "black", textAlign: "center" }}
      >
        <div>
          <div>Entertainement</div>
        </div>
      </div>
    </div>
  </div>
);
  }
  return(
    <div className="entertainemet">
    <div
      className="columns is-12 is-container is-centered is-mobile is-multiline"
      style={{ marginTop: "0px" }}
    >
      <div
        className="column is-12 is-centered has-text-weight-bolds pl-0, pr-0 mt-2"
        style={{ color: "black", textAlign: "center" }}
      >
        <div>
          <div>Entertainement</div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Entretainement;
