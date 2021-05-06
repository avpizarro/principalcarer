import Moment from "react-moment";
import "moment-timezone";
import clock from "../../images/clock.png";
import "./style.css";


function Clock() {
  return (
    <div>
      <div className="columns is-12 is-container is-centered is-mobile is-multiline clock" style={{marginTop: "3px"}}>
        <div
          className="column is-6 is-centered has-text-weight-bolds pl-0, pr-0"
          style={{ color: "black", textAlign: "center" }}
        >
          <div>
            <span  className="m-2">
              <img
                className="mb-0 mr-2"
                src={clock}
                alt="clock"
                style={{ height: "20px", width: "20px", position: "relative", top: "5px" }}
              />
              <br></br>
              Melbourne
              <br></br>
              <Moment format="hh:mm a" className="ml-5"/>
            </span>
          </div>
        </div>
        <div
          className="column is-6 is-centered has-text-weight-bolds p-0"
          style={{ color: "black", textAlign: "center" }}
        >
          <div >
            <span  className="m-2">
              <img
                className="mb-0 mr-2"
                src={clock}
                alt="clock"
                style={{ height: "20px", width: "20px", position: "relative", top: "5px" }}
              />
              <br></br>
              Bogota
              <br></br>
              <Moment format="hh:mm a" tz="America/Bogota" />
            </span>
          </div>
        </div>
        <div
          className="column is-6 is-centered has-text-weight-bolds pb-4 pt-0"
          style={{ color: "black", textAlign: "center" }}
        >
          <div >
            <span  className="m-2">
              <img
                className="mb-0 mr-2"
                src={clock}
                alt="clock"
                style={{ height: "20px", width: "20px", position: "relative", top: "5px" }}
              />
              <br></br>
              Nassau
              <br></br>
              <Moment format="hh:mm a" tz="America/Nassau" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clock;
