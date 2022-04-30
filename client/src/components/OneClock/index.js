import React from 'react';
import "moment-timezone";
import clock from "../../images/clock.png";

function OneClock( {children, id, city} ) {
  return (
    <div
      className="column is-6 is-centered has-text-weight-bolds p-4 m-0 pt-3 is-mobile"
      style={{ color: "black", textAlign: "center" }} 
    >
      <div>
        <span className="m-2" id={id}>
          <img
            className="mb-0 mr-2 clockImage"
            src={clock}
            alt="clock"
            height="20px"
            width="20px"
          />
          <br></br>
          {city}
          <br></br>
          {children}
        </span>
      </div>
    </div>
  );
}

export default OneClock;
