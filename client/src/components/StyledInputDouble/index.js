import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function StyledInputDouble({
  childrenHelp,
  changeName,
  changeQuantity,
  submitData,
  namePlaceholder,
  quantityPlaceholder,
}) {
  return (
    <div
      className="column is-12 has-text-weight-bolds pb-5 pt-0"
      style={{ color: "black", width: "80%", marginLeft: "8%" }}
    >
      <div
        className="field has-addons addMedField"
        style={{
          borderBottomColor: "black",
          borderBottom: "2px",
          borderBottomStyle: "solid",
        }}
      >
        <p className="control" style={{ width: "100%" }}>
          <input
            className="input mb-0 pb-0 addMedInput"
            type="text"
            placeholder={namePlaceholder}
            onChange={changeName}
            style={{
              background: "transparent",
              border: "none",
              boxShadow: "none",
              borderRadius: "0px",
              borderStyle: "none",
            }}
          />
        </p>
      </div>
      <div
        className="field has-addons addMedField"
        style={{
          borderBottomColor: "black",
          borderBottom: "2px",
          borderBottomStyle: "solid",
        }}
      >
        <p className="control" style={{ width: "100%" }}>
          <input
            className="input mb-0 pb-0 addMedInput"
            type="text"
            placeholder={quantityPlaceholder}
            onChange={changeQuantity}
            style={{
              background: "transparent",
              border: "none",
              boxShadow: "none",
              borderRadius: "0px",
              borderStyle: "none",
            }}
          />
        </p>
      </div>
      {childrenHelp}
      <button
        style={{ borderStyle: "none", background: "transparent" }}
        onClick={submitData}
      >
        <FontAwesomeIcon icon="plus" size="1x" />
      </button>
    </div>
  );
}

export default StyledInputDouble;
