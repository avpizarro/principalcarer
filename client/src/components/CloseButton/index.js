import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";

function CloseButton(props) {
  return (
    <button className="button is-small closeExpandButton" onClick={props.CloseComponent}>
      <span className="icon is-large closeExpandButtonIcon">
        <FontAwesomeIcon icon="times" size="2x" />
      </span>
    </button>
  );
}

export default CloseButton;
