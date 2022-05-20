import React, { useEffect, useState } from "react"
import calendar from "../../images/calendar.png";
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./style.css";
import ExpandButton from "../ExpandButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EventInput from "../EventInput";

// import Dob from "../Dob"

function Calendar({ children, showCalendar, ExpandComponent, CloseComponent })
{
  // const [value, onChange] = useState(new Date());
  const [chosenDate, setChosenDate] = useState(new Date());
  const [showAddEvent, setShowAddEvent] = useState(false);
  const [newEvent, setNewEvent] = useState({
    date: "",
    description: "",
    time: "",
  })

  const Events = [];

  const { date, description, time } = newEvent;

  const onClick = () =>
  {
    setShowAddEvent(prevState => !prevState);
  }

  const onInputChange = (e) =>
  {
    {
      setNewEvent(() => ({
        date: chosenDate,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const onSubmit = (e) =>
  {
    e.preventDefault();
    Events.push(newEvent);
    console.log(newEvent);
    console.log(Events);
  };

  useEffect(() =>
  {
    setNewEvent((prevState) => ({
      ...prevState,
      date: chosenDate,
    }));
  }, [chosenDate])

  if (!showCalendar)
  {
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
            <div className="mt-6 mb-3">
              <ReactCalendar
                onChange={setChosenDate}
                value={chosenDate}
              />
            </div>
            {Events.map(event =>
            {
              console.log("event", event);
              <ul>
                <li>{event.date}</li>
                <li>{event.description}</li>
                <li>{event.time}</li>
              </ul>
            })}
            {children}
            {!showAddEvent ?
              <div style={{ margin: "auto", textAlign: "center" }}>
                <button
                  className="plus-button"
                  style={{ borderStyle: "none", padding: "5px" }}
                  onClick={onClick}
                >
                  <FontAwesomeIcon icon="plus" size="1x" />
                </button>
              </div> :
              <EventInput
                onChange={onInputChange}
                submitData={onSubmit}
              />}
          </div>
        </div>
      </div>
      <ExpandButton CloseComponent={CloseComponent} Expand={showCalendar} />
    </div>
  );
}

export default Calendar;
