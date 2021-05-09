import "./style.css";
import "../StyledInput";
import StyledInput from "../StyledInput";

function Tasks({ children, showTask, changeName, addItemData }) {
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
        className="columns is-12 is-container is-centered is-mobile is-multiline"
        style={{ marginTop: "3px" }}
      >
        <div
          className="column is-12 is-centered has-text-weight-bolds"
          style={{ color: "black", textAlign: "center" }}
        >
          <div>
            <div>Tasks</div>
            {children}
            <div style={{ position: "absolute", bottom: "20px", minWidth: "100%" }}>
              <StyledInput
                changeName={changeName}
                addItemData={addItemData}
                placeholder={"Add Task"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Tasks;
