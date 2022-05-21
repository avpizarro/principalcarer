import React, { useEffect, useState } from "react";
import calendar from "../../images/calendar.png";
import ReactCalendar from 'react-calendar';
import API from "../../utils/API";
import 'react-calendar/dist/Calendar.css';
import "./style.css";
import ExpandButton from "../ExpandButton";
import { FaArrowLeft, FaEdit, FaCalendarTimes } from 'react-icons/fa';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EventInput from "../EventInput";
import uuid from "react-uuid";

// import Dob from "../Dob"

function Calendar({ showCalendar, ExpandComponent, CloseComponent })
{
  // const [value, onChange] = useState(new Date());
  const [chosenDate, setChosenDate] = useState(new Date());
  const [showAddEvent, setShowAddEvent] = useState(false);
  const [eventDesc, setEventDesc] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [newEvent, setNewEvent] = useState({
    date: "",
    description: "",
    time: "",
  });
  const [idToUpdate, setIdToUpdate] = useState("");
  const [eventsList, setEventsList] = useState([]);

  const loadDateEvents = (date) =>
  {
    const formattedDate = date.toISOString();
    API.getEventsByDate(formattedDate)
      .then(res =>
      {
        setEventsList(res.data);
      });
  };

  const onClick = () =>
  {
    setShowAddEvent(prevState => !prevState);
    setEventDesc("");
    setEventTime("");
    setIdToUpdate("");
  }

  const onClickEdit = (e) =>
  {
    setShowAddEvent((prevState) =>
    {
      if (prevState === false)
      {
        return prevState = true;
      } else
      {
        return prevState = true;
      }
    });
    setIdToUpdate(e.target.id);
    API.getEventById(e.target.id)
      .then(res =>
      {
        console.log(res.data);
        setEventDesc(res.data.description);
        setEventTime(res.data.time);
      });
  }

  const onClickDelete = (e) =>
  {
    API.removeEvent(e.target.id).then(() =>
    {
      setIdToUpdate("");
      setEventDesc("");
      setEventTime("");
      setShowAddEvent(false);
    });
  }

  const onDescChange = (e) =>
  {
    setEventDesc(e.target.value);
  }

  const onTimeChange = (e) =>
  {
    setEventTime(e.target.value);
  }

  const onSubmit = (e) =>
  {
    e.preventDefault();
    if (idToUpdate)
    {
      API.updateEvent(idToUpdate, newEvent);
      setEventDesc("");
      setEventTime("");
      setIdToUpdate("");
      setShowAddEvent(false);
    } else
    {
      API.addEvent(newEvent);
      setEventDesc("");
      setEventTime("");
      setShowAddEvent(false);
    }
  };

  useEffect(() =>
  {
    setNewEvent(() => ({
      date: chosenDate,
      description: eventDesc,
      time: eventTime
    }));
  }, [chosenDate, eventDesc, eventTime])

  useEffect(() =>
  {
    loadDateEvents(chosenDate);
  }, [chosenDate, idToUpdate, showAddEvent])

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
              <ul className="events-list columns is-container is-multiline">
                {eventsList.map((item) =>
                {
                  return <li
                    key={uuid()}
                    id={item.id}
                    className="column is-12"
                    style={{ padding: "0.25rem", margin: "auto" }}
                  ><div className="columns is-container is-mobile event-li">
                      <span
                        className="column is-3"
                      >
                        {item.time}
                      </span>
                      <span
                        className="column is-8 has-text-left">
                        {item.description}
                      </span>

                      <button
                        id={item._id}
                        className="column is-1 has-text-left event-button"
                        style={{ borderStyle: "none", height: "20px", width: "20px" }}
                        onClick={onClickEdit}>
                        <span>
                          <FaEdit />
                        </span>
                      </button>
                    </div>
                  </li>
                })}
              </ul>
            </div>
            {!showAddEvent ?
              <div style={{ margin: "auto", textAlign: "center" }}>
                <button
                  className="plus-button"
                  style={{ borderStyle: "none", padding: "5px" }}
                  onClick={onClick}
                >
                  <FontAwesomeIcon icon="plus" size="1x" />
                </button>
              </div>
              :
              <>
                <EventInput
                  onTimeChange={onTimeChange}
                  onDescChange={onDescChange}
                  submitData={onSubmit}
                  descriptionValue={eventDesc}
                  timeValue={eventTime}
                />
                {idToUpdate ?
                  <button
                    className="plus-button delete-event-button"
                    id={idToUpdate}
                    onClick={onClickDelete}
                    style={{ padding: "5px" }}
                  >
                    <span>
                      <FaCalendarTimes size={20} />
                    </span>
                  </button>
                  :
                  null
                }
                <div style={{ margin: "auto", marginTop: "5px", textAlign: "center" }}>
                  <button
                    className="plus-button"
                    style={{ borderStyle: "none", padding: "5px" }}
                    onClick={onClick}
                  >
                    <FaArrowLeft />
                  </button>
                </div>
              </>
            }
          </div>
        </div>
      </div>
      <ExpandButton CloseComponent={CloseComponent} Expand={showCalendar} />
    </div>
  );
}

export default Calendar;
