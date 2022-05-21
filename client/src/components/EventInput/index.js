import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './style.css';

function EventInput({
  childrenHelp,
  submitData,
  onDescChange,
  onTimeChange,
  descriptionValue,
  timeValue
})
{
  return (
    <div
      className="column is-12 has-text-weight-bolds pb-0 pt-0"
      style={{ color: "black", margin: "auto", marginTop: "20px" }}
    ><div className="styledInputDouble" style={{ width: "90%", margin: "auto" }}>
        <div
          className="field has-addons addMedField"
          style={{
            borderBottomColor: "black",
            borderBottom: "2px",
            borderBottomStyle: "solid",
          }}
        >
          <p className="control" style={{ width: "100%" }}>
            <input
              value={descriptionValue}
              name="description"
              className="input mb-0 pb-0 addMedInput"
              type="text"
              placeholder="Description"
              onChange={onDescChange}
              style={{
                background: "transparent",
                border: "none",
                boxShadow: "none",
                borderStyle: "none",
              }}
            />
          </p>
        </div>
        <div
          className="field has-addons addMedField"
          style={{
            borderBottomColor: "black",
            borderBottom: "2px",
            borderBottomStyle: "solid",
          }}
        >
          <p className="control" style={{ width: "100%" }}>
            <input
              value={timeValue}
              name="time"
              className="input mb-0 pb-0 addMedInput"
              type="time"
              placeholder="What time?"
              onChange={onTimeChange}
              style={{
                background: "transparent",
                border: "none",
                boxShadow: "none",
                borderStyle: "none",
              }}
            />
          </p>
        </div>
        {childrenHelp}
        <div style={{ margin: "auto", textAlign: "center" }}>
          <button
            className="plus-button"
            style={{ borderStyle: "none", padding: "5px" }}
            onClick={submitData}
          >
            <FontAwesomeIcon icon="plus" size="1x" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventInput;
