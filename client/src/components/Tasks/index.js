import ExpandButton from "../ExpandButton";
import "./style.css";
import "../StyledInput";
import StyledInput from "../StyledInput";

function Tasks({ children, showTasks, changeName, addItemData, ExpandComponent, CloseComponent })
{
  if (!showTasks)
  {
    return (
      <div className="task" id="tasks">
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
        <ExpandButton ExpandComponent={ExpandComponent} />
      </div>
    );
  }
  return (
    <div className="task" id="tasks">
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
      <ExpandButton CloseComponent={CloseComponent} Expand={showTasks} />
    </div>
  );
}
export default Tasks;
