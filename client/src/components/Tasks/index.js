import "./style.css";

function Tasks({ children, showTask }) {
  if (!showTask) {
    return (
      <div className="task">
        <div
          className="columns is-12 is-container is-centered is-mobile is-multiline medicationTitle"
          style={{ marginTop: "3px" }}
        >
          <div
            className="column is-12 is-centered has-text-weight-bolds"
            style={{ color: "black", textAlign: "center" }}
          >
            <div>
              <div>Tasks</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="task">
      <div
        className="columns is-12 is-container is-centered is-mobile is-multiline medicationTitle"
        style={{ marginTop: "3px" }}
      >
        <div
          className="column is-12 is-centered has-text-weight-bolds"
          style={{ color: "black", textAlign: "center" }}
        >
          <div>
            <div>Tasks</div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Tasks;
