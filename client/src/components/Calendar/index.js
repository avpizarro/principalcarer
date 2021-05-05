import calendar from "../../images/calendar.png";

function Calendar() {
  return (
    <div>
    <img
      className="ml-3"
      src={calendar}
      alt="Book"
      style={{
        height: "80px",
        // transform: "rotate(20deg)",
        position: "absolute",
        top: "-20px",
        // left: "-10px",
      }}
    />
  </div>
  );
}

export default Calendar;
