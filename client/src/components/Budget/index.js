import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Bank from "../../images/pigBank.png";
import ExpandButton from "../ExpandButton";
import "./style.css";

import Chart from "../Chart";

function Budget({
  showBudget,
  addFunds,
  substractFunds,
  childrenHelp,
  changeName,
  changeAmount,
  chartData,
  total,
  ExpandComponent,
  CloseComponent
})
{
  if (!showBudget)
  {
    return (
      <div className="budget closedBudget" id="budget">
        <div
          className="columns is-12 is-container is-centered is-mobile is-multiline"
          style={{ marginTop: "3px" }}
        >
          <img
            className="ml-3"
            src={Bank}
            alt="Bank"
            style={{
              height: "100px",
              position: "absolute",
              bottom: "-10px",
              left: "-5px",
              zIndex: 1000,
            }}
          />
          <div
            className="column is-6 is-centered has-text-weight-bolds"
            style={{ color: "black", textAlign: "center" }}
          >
            <div>
              <div>Budget</div>
            </div>
          </div>
        </div>
        <ExpandButton ExpandComponent={ExpandComponent} />
      </div>
    );
  }
  return (
    <div className="budget" id="budget">
      <div
        className="columns is-12 is-container is-centered is-mobile is-multiline"
        style={{ marginTop: "3px" }}
      >
        <img
          className="ml-3"
          src={Bank}
          alt="Bank"
          style={{
            height: "100px",
            position: "absolute",
            bottom: "-10px",
            left: "-5px",
            zIndex: 1000,
          }}
        />
        <div
          className="column is-12 is-centered has-text-weight-bolds pl-0 pr-0 mt-2"
          style={{ color: "black", textAlign: "center" }}
        >
          <div>
            <div>Budget</div>

            {/* -------------Copy from homework ------------------------------ */}
            <div className="wrapper" style={{ gridTemplateColumns: "'1fr '300px'" }}>
              <div className="total">
                <div className="total">
                  Your total is: $<span id="total">{total}</span>
                </div>
              </div>

              <div style={{ maxWidth: "80%", margin: "auto", marginTop: "20px" }}>
                <div
                  className="field"
                  style={{
                    borderBottomColor: "black",
                    borderBottom: "2px",
                    borderBottomStyle: "solid",
                  }}
                >
                  <p className="control" style={{ width: "100%" }}>
                    <input
                      className="input mb-0 pb-0 addMedInput"
                      type="text"
                      placeholder="Transaction name"
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
                <p className="help">{childrenHelp}</p>

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
                      className="input mb-0 pb-0 addMedInput"
                      type="text"
                      placeholder="Transaction Amount"
                      onChange={changeAmount}
                      style={{
                        background: "transparent",
                        border: "none",
                        boxShadow: "none",
                        borderStyle: "none",
                      }}
                    />
                  </p>
                </div>
                <p className="help">{childrenHelp}</p>
                <button
                  className="plus-button"
                  style={{ borderStyle: "none", padding: "5px" }}
                  onClick={addFunds}
                >
                  <span>
                    <FontAwesomeIcon icon="plus" size="1x" />
                  </span>
                </button>
                <button
                  className="minus-button"
                  style={{ borderStyle: "none" }}
                  onClick={substractFunds}
                >
                  <span>
                    <FontAwesomeIcon icon="minus" size="1x" />
                  </span>
                </button>
              </div>
              <Chart chartData={chartData} />
              <canvas id="myChart"></canvas>
            </div>
            {/* -----END------ */}
          </div>
        </div>
      </div>
      <ExpandButton CloseComponent={CloseComponent} Expand={showBudget} />
    </div>
  );
}

export default Budget;
