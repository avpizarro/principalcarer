import Pill from "../../images/pill.gif";

function Medication() {
  return (
    <div>
      <img
        className="ml-3"
        src={Pill}
        alt="Pill"
        style={{ height: "50px", width: "50px" }}
      />
    </div>
  );
}

export default Medication;
