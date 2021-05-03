import { useEffect, useState, useRef } from "react";
import Canvas from "../Canvas";
import CanvasContainer from "../CanvasContainer";
import ComponentContainer from "../ComponentContainer";
import ExpandButton from "../ExpandButton";
import Pill from "../../images/pill.gif";
import House from "../../images/house.gif";
import "./style.css";
import uuid from "react-uuid";

function MainContainer() {
  const houseRef = useRef();
  const pillRef = useRef();

  const [height, setHeight] = useState();
  const [Expand, setExpand] = useState(false);
  const [componentId, setComponentId] = useState("");

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
      houseRef.current.style.height = height;
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
    if(componentId === "house") {
    houseRef.current.style.height = height;
  }
  if(componentId === "parent") {
      document.getElementById(componentId).style.height = height;
    }
    if(componentId === "pill") {
      pillRef.current.style.height = height;
    }
    
  }, [height]);

  return (
    <div className="is-container columns is-multiline mainContainer">
      <div ref={houseRef} className="column componentContainer" id="house">
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
      </div>

      <CanvasContainer>
        <Canvas />
        <ExpandButton
          Expand={Expand}
          ExpandComponent={ExpandComponent}
          CloseComponent={CloseComponent}
        />
      </CanvasContainer>

      <div ref={pillRef} className="column componentContainer" id="pill">
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
      </div>
    </div>
  );
}

export default MainContainer;
