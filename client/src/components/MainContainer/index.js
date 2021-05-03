import { useEffect, useState } from "react";
import Canvas from "../Canvas";
import CanvasContainer from "../CanvasContainer";
import ComponentContainer from "../ComponentContainer";
import ExpandButton from "../ExpandButton";
import Pill from "../../images/pill.gif";
import House from "../../images/house.gif";
import "./style.css";

function MainContainer() {
  const [height, setHeight] = useState();
  const [Expand, setExpand] = useState(false);
  const [ComponentId, setComponentId] = useState("");

  let elementId = "";
  const ExpandComponent = (e) => {
    console.log("I am trying to expand");
    elementId = e.target.parentNode.getAttribute("id");
    console.log(elementId);
    setComponentId(elementId);

    const component = e.target.parentNode;
    if (component.clientWidth > component.clientHeight) {
      setHeight(`${component.clientWidth}px`);
      setExpand(true);
    }
  };

  const CloseComponent = (e) => {
    console.log("I am trying to close");
    elementId = e.target.parentNode.getAttribute("id");
    console.log(elementId);
    setComponentId(elementId);
    setHeight("60px");
    setExpand(false);
  };

  useEffect(() => {
    console.log(ComponentId);
    if (height && ComponentId) {
      console.log(document.getElementById(ComponentId.toString()));
      document.getElementById(ComponentId).style.height = height;
      console.log(height);
    }
  }, [height]);

  return (
    <div className="is-container columns is-multiline mainContainer">
      <ComponentContainer>
        <img
          className="ml-3"
          src={House}
          alt="House"
          style={{ height: "50px", width: "50px" }}
        />
        <ExpandButton
          Expand={Expand}
          ExpandComponent={ExpandComponent}
          CloseComponent={CloseComponent}
        />
      </ComponentContainer>

      <CanvasContainer>
        <Canvas />
        <ExpandButton
          Expand={Expand}
          ExpandComponent={ExpandComponent}
          CloseComponent={CloseComponent}
        />
      </CanvasContainer>

      <ComponentContainer>
        <img
          className="ml-3"
          src={Pill}
          alt="Pill"
          style={{ height: "50px", width: "50px" }}
        />
        <ExpandButton
          Expand={Expand}
          ExpandComponent={ExpandComponent}
          CloseComponent={CloseComponent}
        />
      </ComponentContainer>
    </div>
  );
}

export default MainContainer;
