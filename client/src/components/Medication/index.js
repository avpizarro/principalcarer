import React from "react";
import page from "../../images/portrait.png";
import ExpandButton from "../ExpandButton";
import "./style.css";

function Medication({ children, showMed, ExpandComponent, CloseComponent })
{
  if (!showMed)
  {
    return (
      <div className="medication" id="medication">
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
        <ExpandButton ExpandComponent={ExpandComponent} />
      </div>
    );
  }
  return (
    <div className="medication medicationExpanded" id="medication">
      <div className="columns is-12 is-container is-centered is-mobile is-multiline">
        <img
          className="mt-4 ml-2"
          src={page}
          alt="Shopping"
          style={{ width: "100%", zIndex: -1, position: "absolute", height: "100%" }}
        />
        <div
          className="column is-12 is-centered has-text-weight-bolds pl-0 pr-0"
          style={{
            color: "black",
            textAlign: "center",
            zIndex: 1000,
            marginTop: "80px",
          }}
        >
          <div>
            <div className="mb-4">Medication List</div>
            {children}
          </div>
        </div>
      </div>
      <ExpandButton CloseComponent={CloseComponent} Expand={showMed} />
    </div>
  );
}

export default Medication;
