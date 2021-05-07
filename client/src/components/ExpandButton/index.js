import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";

function ExpandButton(props) {
  if (!props.Expand) {
    return (
      <button
        className="button is-small closeExpandButton"
        id={props.btnId}
        onClick={props.ExpandComponent}
      >
        <span className="icon is-large closeExpandButtonIcon is-static">
          <FontAwesomeIcon icon="plus" size="2x" />
        </span>
      </button>
    );
  }

  return (
    <button
      className="button is-small closeExpandButton"
      id={props.btnId}
      onClick={props.CloseComponent}
    >
      <span className="icon is-large closeExpandButtonIcon">
        <FontAwesomeIcon icon="times" size="2x" />
      </span>
    </button>
  );
}
export default ExpandButton;
