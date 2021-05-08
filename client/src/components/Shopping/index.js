import shopping from "../../images/shopping.png";
import "./style.css"

function Shopping({ children, showShopping }) {
  if (!showShopping) {
    return (
      <div className="shopping" style={{ minHeight: "115px" }}>
        <div
          className="columns is-12 is-container is-centered is-mobile is-multiline"
          style={{ marginTop: "3px" }}
        >
          <img
            className="ml-3"
            src={shopping}
            alt="Shopping"
            style={{ height: "100px", position: "absolute", left: "-5px", bottom: "5px", zIndex: 1000 }}
          />
          <div
            className="column is-6 is-centered has-text-weight-bolds shoppingTitle"
            style={{ color: "black", textAlign: "center" }}
          >
            <div>
              <div>Shopping</div>
            </div>
        </div>
      </div>
      </div>

    );
  }
  return (
    <div className="shopping">
      <div
        className="columns is-12 is-container is-centered is-mobile is-multiline"
        style={{ marginTop: "3px" }}
      >
      <div>
        <img
          className="ml-3"
          src={shopping}
          alt="Shopping"
          style={{ height: "100px", zIndex: 1000 }}
        />
        <div
          className="column is-6 is-centered has-text-weight-bolds pl-0, pr-0 mt-2"
          style={{ color: "black", textAlign: "center" }}
        >
          <div>
            <div>Shopping</div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Shopping;
