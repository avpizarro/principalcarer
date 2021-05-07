import Bank from "../../images/pigBank.png";
import "./style.css";

function Budget({ children, showBudget }) {
  if (!showBudget) {
    return (
      <div className="budget">
        <div
          className="columns is-12 is-container is-centered is-mobile is-multiline"
          style={{ marginTop: "0px" }}
        >
          <img
            className="ml-3"
            src={Bank}
            alt="Bank"
            style={{
              height: "100px",
              position: "absolute",
              bottom: "-10px",
              left: "-5px",
              zIndex: 1000,
            }}/>
          <div
            className="column is-6 is-centered has-text-weight-bolds pl-0, pr-0 mt-2"
            style={{ color: "black", textAlign: "center" }}
          >
            <div>
              <div>Budget</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="budget">
    <div
      className="columns is-12 is-container is-centered is-mobile is-multiline"
      style={{ marginTop: "0px" }}
    >
      <img
        className="ml-3"
        src={Bank}
        alt="Bank"
        style={{
          height: "100px",
          position: "absolute",
          bottom: "-10px",
          left: "-5px",
          zIndex: 1000,
        }}/>
      <div
        className="column is-6 is-centered has-text-weight-bolds pl-0, pr-0 mt-2"
        style={{ color: "black", textAlign: "center" }}
      >
        <div>
          <div>Budget</div>
          {children}
        </div>
      </div>
    </div>
  </div>
  );
}

export default Budget;
