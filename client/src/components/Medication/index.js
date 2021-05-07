// import Pill from "../../images/pill.gif";
import "./style.css";

function Medication({ children, showMed }) {
  if (!showMed) {
    return (
      <div className="medication">
        <div
          className="columns is-12 is-container is-centered is-mobile is-multiline"
          style={{ marginTop: "0px" }}
        >
          <div
            className="column is-6 is-centered has-text-weight-bolds pl-0, pr-0 mt-2"
            style={{ color: "black", textAlign: "center" }}
          >
            <div>
              <div>Medication List</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="medication">
      {/* <img
        className="ml-3"
        src={Pill}
        alt="Pill"
        style={{ height: "50px", width: "50px" }}
      /> */}
      <div
        className="columns is-12 is-container is-centered is-mobile is-multiline"
        style={{ marginTop: "0px" }}
      >
        <div
          className="column is-6 is-centered has-text-weight-bolds pl-0, pr-0 mt-4"
          style={{ color: "black", textAlign: "center" }}
        >
          <div>
            <div className="mb-4">Medication List</div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Medication;
