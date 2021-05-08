import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function StyledInput( {children, changeName, addItemData}) {
    return (
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
              placeholder="Add a transaction"
              onChange={changeName}
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
            onClick={addItemData}
          >
            <FontAwesomeIcon icon="plus" size="1x" />
          </button>
        </div>
        <p class="help"> {children}</p>
      
      </div>

    );
}

export default StyledInput;