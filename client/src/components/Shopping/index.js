import shopping from "../../images/shopping.png";
import ExpandButton from "../ExpandButton";
import "./style.css";

import StyledInputDouble from "../StyledInputDouble";

function Shopping({
  children,
  showShopping,
  childrenHelp,
  changeName,
  changeQuantity,
  submitData,
  ExpandComponent,
  CloseComponent
})
{
  if (!showShopping)
  {
    return (
      <div className="shopping" id="shopping" style={{ minHeight: "115px" }}>
        <div
          className="columns is-12 is-container is-centered is-mobile is-multiline"
          style={{ marginTop: "3px" }}
        >
          <img
            className="ml-3"
            src={shopping}
            alt="Shopping"
            style={{
              height: "100px",
              position: "absolute",
              left: "-5px",
              bottom: "5px",
              zIndex: 2,
            }}
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
        <ExpandButton ExpandComponent={ExpandComponent} />
      </div>
    );
  }
  return (
    <div className="shopping" id="shopping">
      <div
        className="columns is-12 is-container is-centered is-mobile is-multiline "
        style={{ marginTop: "3px" }}
      >
        <div className="column">
          <img
            className="ml-3"
            src={shopping}
            alt="Shopping"
            style={{ height: "100px", zIndex: 1000, position: "absolute" }}
          />

          <div
            className="column is-6 is-centered has-text-weight-bolds pl-0 pr-0 shoppingTitle"
            style={{ color: "black", textAlign: "center" }}
          >
            <div>Shopping</div>
          </div>

          <div
            className="column is-12 is-centered has-text-weight-bolds pl-0 pr-0 mt-5"
            style={{
              bottom: "10px",
              minWidth: "100%",
            }}
          >
            {children}
            <StyledInputDouble
              childrenHelp={childrenHelp}
              changeName={changeName}
              changeQuantity={changeQuantity}
              submitData={submitData}
              namePlaceholder={"Item name"}
              quantityPlaceholder={"How many?"}
            />
          </div>
        </div>
      </div>
      <ExpandButton CloseComponent={CloseComponent} Expand={showShopping} />
    </div>
  );
}

export default Shopping;
