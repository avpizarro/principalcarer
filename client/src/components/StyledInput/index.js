import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function StyledInput( {inputHelp, changeName, addItemData, placeholder} ) {
    return (
        <div
        className="column is-12 has-text-weight-bolds pb-5 pt-0 is-mobile"
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
              placeholder={placeholder}
              onChange={changeName}
              style={{
                border: "none",
                boxShadow: "none",
                borderStyle: "none",
              }}
            />
          </p>
          <button
            style={{ borderStyle: "none", padding: "5px" }}
            onClick={addItemData}
            className="plus-button"
          >
            <FontAwesomeIcon icon="plus" size="1x" />
          </button>
        </div>
        <p className="help"> {inputHelp}</p>
      
      </div>

    );
}

export default StyledInput;