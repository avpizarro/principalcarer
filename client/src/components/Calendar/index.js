import calendar from "../../images/calendar.png";
import "./style.css";

function Calendar({ children, showCalendar }) {
  if (!showCalendar) {
    return (
      <div className="calendar">
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
              // transform: "rotate(20deg)",
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
      </div>
    );
  }
  return (
    <div className="calendar">
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
            // transform: "rotate(20deg)",
            position: "absolute",
            top: "-20px",
            left: "-10px",
          }}
        />
        <div
          className="column is-6 is-centered has-text-weight-bolds pl-0, pr-0 mt-2"
          style={{ color: "black", textAlign: "center" }}
        >
          <div>
            <div>Calendar</div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
