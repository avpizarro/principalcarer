import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";

function AddMedication({
  childrenHelp,
  changeName,
  changeDose,
  changeDosage,
  changeQuantity,
  changeUnit,
  submitMedData,
  back
})
{
  return (
    <div
      className="column is-12 has-text-weight-bolds pb-5 pt-0"
      style={{ color: "black", width: "80%", marginLeft: "8%" }}
    >
      <div className="field has-addons addMedField"
        style={{
          borderBottomColor: "black",
          borderBottom: "2px",
          borderBottomStyle: "solid",
        }}>
        <p className="control" style={{ width: "100%" }}>
          <input
            className="input mb-0 pb-0 addMedInput"
            type="text"
            placeholder="Name"
            onChange={changeName}
            style={{
              background: "transparent",
              border: "none",
              boxShadow: "none",
              borderStyle: "none",
            }}
          />
        </p>
      </div>
      <div className="field has-addons addMedField"
        style={{
          borderBottomColor: "black",
          borderBottom: "2px",
          borderBottomStyle: "solid",
        }}>
        <p className="control" style={{ width: "100%" }}>
          <input
            className="input mb-0 pb-0 addMedInput"
            type="text"
            placeholder="Dose"
            onChange={changeDose} style={{
              background: "transparent",
              border: "none",
              boxShadow: "none",
              borderStyle: "none",
            }}
          />
        </p>
      </div>
      <div className="field has-addons addMedField"
        style={{
          borderBottomColor: "black",
          borderBottom: "2px",
          borderBottomStyle: "solid",
        }}>
        <p className="control" style={{ width: "100%" }}>
          <input
            className="input mb-0 pb-0 addMedInput"
            type="text"
            placeholder="Dosage"
            onChange={changeDosage}
            style={{
              background: "transparent",
              border: "none",
              boxShadow: "none",
              borderStyle: "none",
            }}
          />
        </p>
      </div>
      <div className="field has-addons addMedField"
        style={{
          borderBottomColor: "black",
          borderBottom: "2px",
          borderBottomStyle: "solid",
        }}>
        <p className="control" style={{ width: "100%" }}>
          <input
            className="input mb-0 pb-0 addMedInput"
            type="text"
            placeholder="Quantity received"
            onChange={changeQuantity}
            style={{
              background: "transparent",
              border: "none",
              boxShadow: "none",
              borderStyle: "none",
            }}
          />
        </p>
      </div>
      <div className="field has-addons addMedField"
        style={{
          borderBottomColor: "black",
          borderBottom: "2px",
          borderBottomStyle: "solid",
        }}>
        <p className="control" style={{ width: "100%" }}>
          <input
            className="input mb-0 pb-0 addMedInput"
            type="text"
            placeholder="Unit"
            onChange={changeUnit}
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
      <button
        className="plus-button-addMedication"
        style={{ borderStyle: "none" }}
        onClick={submitMedData}
      >
        <FontAwesomeIcon icon="plus" size="1x" />
      </button>
      <div className="mt-4">
        <button
          className="arrow-back-button"
          style={{
            borderStyle: "none"
          }}
          onClick={back}
        >
          <span>
            <FontAwesomeIcon
              icon="long-arrow-alt-left"
              size="1x"
              style={{ marginBottom: "10px" }}
            />
          </span>
        </button>
      </div>
    </div>
  );
}

export default AddMedication;
