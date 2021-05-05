import Bank from "../../images/pigBank.png";

function Budget() {
  return (
    <div>
      <img
        className="ml-3"
        src={Bank}
        alt="Bank"
        style={{
          height: "100px",
          position: "absolute",
          bottom: "-10px",
          left: "-5px",
        }}
      />
    </div>
  );
}

export default Budget;
