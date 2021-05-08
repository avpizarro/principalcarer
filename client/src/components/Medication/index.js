import "./style.css";

function Medication({ children, showMed }) {
  if (!showMed) {
    return (
      <div className="medication">
        <div
          className="columns is-12 is-container is-centered is-mobile is-multiline medicationTitle"
          style={{ marginTop: "3px" }}
        >
          <div
            className="column is-12 is-centered has-text-weight-bolds"
            style={{ color: "black", textAlign: "center" }}
          >
            <div>
              <div>Medication</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="medication">
      <div
        className="columns is-12 is-container is-centered is-mobile is-multiline medicationTitle"
        style={{ marginTop: "3px" }}
      >
        <div
          className="column is-12 is-centered has-text-weight-bolds pl-0, pr-0 mt-4"
          style={{ color: "black", textAlign: "center" }}
        >
          <div>
            <div className="mb-4">Medication</div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Medication;
