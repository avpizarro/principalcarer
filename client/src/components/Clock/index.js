import Moment from "react-moment";
import "moment-timezone";

function Clock() {
  return (
    <div>
    <div className="columns is-container is-centered is-mobile">
      <div
        className="column is-5 has-text-centered mt-4 has-text-weight-bolds"
        style={{ padding: "0px" }}
      >
        <div className="is-title">Melbourne</div>
        <Moment format="hh:mm a" />
      </div>
      <div
        className="column is-5 has-text-centered mt-4 has-text-weight-bolds"
        style={{ padding: "0px" }}
      >
        <div className="is-title">Bogota</div>
        <Moment format="hh:mm a" tz="America/Bogota" />
      </div>
    </div>
    </div>
  );
}

export default Clock;
