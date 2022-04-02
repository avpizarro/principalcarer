import Social from "../../images/social.png";

import ExpandButton
 from "../ExpandButton";
import "./style.css";

function SocialLife({ children, showMessage, ExpandComponent, CloseComponent }) {
  if (!showMessage) {
    return (
      <div className="budget closedMessage" id="message">
        <div
          className="columns is-12 is-container is-centered is-mobile is-multiline"
          style={{ marginTop: "3px" }}
        >
          <img
            className="ml-3"
            src={Social}
            alt="Social"
            style={{
              height: "80px",
              borderRadius: "10px",
              position: "absolute",
              top: "-10px",
              left: "-5px",
              zIndex: 1000,
            }}
          />
          <div
            className="column is-6 is-centered has-text-weight-bolds"
            style={{ color: "black", textAlign: "center" }}
          >
            <div>
              <div>Message</div>
            </div>
          </div>
        </div>
        <ExpandButton ExpandComponent={ExpandComponent} />
      </div>
    );
  }
  return (
    <div className="budget closedMessage" id="message">
      <div
        className="columns is-12 is-container is-centered is-mobile is-multiline"
        style={{ marginTop: "3px" }}
      >
        <img
          className="ml-3"
          src={Social}
          alt="Social"
          style={{
            height: "80px",
            borderRadius: "10px",
            position: "absolute",
            top: "-10px",
            left: "-5px",
            zIndex: 1000,
          }}
        />
        <div
          className="column is-6 is-centered has-text-weight-bolds"
          style={{ color: "black", textAlign: "center" }}
        >
          <div>
            <div>Message</div>
            {children}
          </div>
        </div>
      </div>
      <ExpandButton CloseComponent={CloseComponent} Expand={showMessage}/>
    </div>
  );
}

export default SocialLife;
