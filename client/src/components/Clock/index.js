import Moment from "react-moment";
import "moment-timezone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clock from "../../images/clock.png";
import OneClock from "../OneClock";
import "./style.css";

function Clock({ showAddClock, children, changeCity, getCityTimezone }) {
  if (!showAddClock) {
    return (
      <div>
        <div
          className="columns is-12 is-container is-centered is-mobile is-multiline clock"
          style={{ marginTop: "3px" }}
        >
          <OneClock city="Melbourne" children={<Moment format="hh:mm a" />} />
          <div
            className="column is-6 is-centered has-text-weight-bolds p-0"
            style={{ color: "black", textAlign: "center" }}
          >
            <div>
              <span className="m-2">
                <img
                  className="mb-0 mr-2 clockImage"
                  src={clock}
                  alt="clock"
                  height="20px"
                  width="20px"
                />
                <br></br>
                Bogota
                <br></br>
                <Moment format="hh:mm a" tz="America/Bogota" />
              </span>
            </div>
          </div>
          <OneClock
            city="Nassau"
            children={<Moment format="hh:mm a" tz="America/Nassau" />}
          />
          {children}
        </div>
      </div>
    );
  }
  return (
    <div>
      <div
        className="columns is-12 is-container is-centered is-mobile is-multiline clock"
        style={{ marginTop: "3px" }}
      >
        <OneClock city="Melbourne" children={<Moment format="hh:mm a" />} />
        <div
          className="column is-6 is-centered has-text-weight-bolds p-0"
          style={{ color: "black", textAlign: "center" }}
        >
          <div>
            <span className="m-2">
              <img
                className="mb-0 mr-2 clockImage"
                src={clock}
                alt="clock"
                height="20px"
                width="20px"
              />
              <br></br>
              Bogota
              <br></br>
              <Moment format="hh:mm a" tz="America/Bogota" />
            </span>
          </div>
        </div>
        <OneClock
          city="Nassau"
          children={<Moment format="hh:mm a" tz="America/Nassau" />}
        />
        {children}
        <div
          className="column is-12 has-text-weight-bolds pb-5 pt-0"
          style={{ color: "black", width: "90%", margin: "auto" }}
        >
          <div
            className="field has-addons"
            style={{
              borderBottomColor: "black",
              borderBottom: "2px",
              borderBottomStyle: "solid",
            }}
          >
            <p className="control has-icons-right  " style={{ width: "100%" }}>
              <input
                className="input mb-0 pb-0"
                type="text"
                placeholder="Add a City"
                onChange={changeCity}
                style={{
                  border: "none",
                  boxShadow: "none",
                  borderRadius: "0px",
                  borderStyle: "none",
                }}
              />
            </p>
            <button
              style={{ borderStyle: "none", background: "white" }}
              onClick={getCityTimezone}
            >
              <FontAwesomeIcon icon="plus" size="1x" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clock;
