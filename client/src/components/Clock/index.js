import React from 'react';
import "moment-timezone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ExpandButton from "../ExpandButton";
import "./style.css";

function Clock({ showAddClock, children, changeCity, getCityTimezone, childrenHelp, ExpandComponent, CloseComponent })
{
  if (!showAddClock)
  {
    return (
      <div id="clock">
        <div
          className="columns is-12 is-container is-centered is-mobile is-multiline clock"
          style={{ marginTop: "3px" }}
        >
          {children}
        </div>
        <ExpandButton ExpandComponent={ExpandComponent} />
      </div>
    );
  }
  return (
    <div id="clock">
      <div
        className="columns is-12 is-container is-centered is-mobile is-multiline clock"
        style={{ marginTop: "3px" }}
      >
        {children}
        <div
          className="column is-12 has-text-weight-bolds pb-5 pt-0"
          style={{ color: "black", width: "90%", margin: "auto" }}
        >
          <div
            className="field has-addons"
            style={{
              borderBottomColor: "black",
              borderBottom: "2px",
              borderBottomStyle: "solid",
            }}
          >
            <p className="control has-icons-right  " style={{ width: "100%" }}>
              <input
                className="input mb-0 pb-0"
                type="text"
                placeholder="Add a City"
                onChange={changeCity}
                style={{
                  border: "none",
                  boxShadow: "none",
                  borderRadius: "4px",
                  borderStyle: "none",
                }}
              />
            </p>
            <button
              className="plus-button"
              style={{ borderStyle: "none"}}
              onClick={getCityTimezone}
              title="Add clock"
            >
              <FontAwesomeIcon icon="plus" size="1x" />
            </button>
          </div>
          {childrenHelp}
        </div>
      </div>
      <ExpandButton CloseComponent={CloseComponent} Expand={showAddClock} />
    </div>
  );
}

export default Clock;
