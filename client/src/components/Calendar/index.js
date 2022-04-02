import { useState } from "react"
import calendar from "../../images/calendar.png";
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./style.css";
import ExpandButton from "../ExpandButton";

import StyledInputDouble from "../StyledInputDouble"

// import Dob from "../Dob"

function Calendar({ children, showCalendar, ExpandComponent, CloseComponent }) {
const [value, onChange] = useState(new Date());

  if (!showCalendar) {
    return (
      <div className="calendar" id="calendar">
        <div
          className="columns is-12 is-container is-vcentered is-centered is-mobile is-multiline"
          style={{ marginTop: "3px" }}
        >
          <img
            className="ml-3"
            src={calendar}
            alt="Book"
            style={{
              height: "80px",
              position: "absolute",
              top: "-20px",
              left: "-10px",
            }}
          />
          <div
            className="column is-6 is-centered is-vcentered has-text-weight-bolds"
            style={{ color: "black", textAlign: "center" }}
          >
            <div>
              <div>Calendar</div>
            </div>
          </div>
        </div>
        <ExpandButton ExpandComponent={ExpandComponent} />
      </div>
    );
  }
  return (
    <div className="calendar" id="calendar">
      <div
        className="columns is-12 is-container is-centered is-mobile is-multiline"
        style={{ marginTop: "3px" }}
      >
        <img
          className="ml-3"
          src={calendar}
          alt="Book"
          style={{
            height: "80px",
            position: "absolute",
            top: "-20px",
            left: "-10px",
          }}
        />
        <div
          className="column is-12 is-centered has-text-weight-bolds pl-0 pr-0 mt-2"
          style={{ color: "black", textAlign: "center", maxWidth: "90%" }}
        >
          <div>
            <div>Calendar</div>
            <div className="mt-6 mb-6">
            <ReactCalendar 
            onChange={onChange}
            value={value}
             />
             <p>{console.log(value.toString())}</p>
            </div>
            {children}
            <StyledInputDouble namePlaceholder={"Add Event"}  quantityPlaceholder={"What time?"}/>
            {/* childrenHelp,
  changeName,
  changeQuantity,
  submitData,
  namePlaceholder,
  quantityPlaceholder, */}
          </div>
        </div>
      </div>
      <ExpandButton CloseComponent={CloseComponent} Expand={showCalendar} />
    </div>
  );
}

export default Calendar;
