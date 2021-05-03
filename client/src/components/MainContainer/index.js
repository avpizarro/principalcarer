import { useEffect, useState, useRef } from "react";
import Moment from "react-moment";
import "moment-timezone";
import Canvas from "../Canvas";
import CanvasContainer from "../CanvasContainer";
import ExpandButton from "../ExpandButton";
import Pill from "../../images/pill.gif";
import home from "../../images/house.gif";
import Compu from "../../images/compu.gif";
import Book from "../../images/book.gif";
import Bank from "../../images/pigBank.png";
import Calendar from "../../images/calendar.png";
import Shopping from "../../images/shopping.png";
import Social from "../../images/social3.png";

import "./style.css";
// import uuid from "react-uuid";

function MainContainer() {
  const homeRef = useRef();
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
      homeRef.current.style.height = height;
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
    // if (componentId === "home") {
    //   homeRef.current.style.height = height;
    // }
    if (componentId) {
      document.getElementById(componentId).style.height = height;
    }
    // if (componentId === "pill") {
    //   pillRef.current.style.height = height;
    // }

  }, [height]);

  return (
    <div className="is-container columns is-multiline mainContainer">
      <div ref={homeRef} className="column componentContainer" id="home">
        <img
          className="ml-3"
          src={home}
          alt="home"
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

          <div ref={pillRef} className="column componentContainer" id="clock">
            <div className="columns is-container is-centered">
              <div className="column is-5 has-text-centered mt-5 has-text-weight-bold" style={{padding: "0px"}}>
              <div className="is-title">Melbourne</div>
              <Moment format="hh:mm a" />
              </div>
              <div className="column is-5 has-text-centered mt-5 has-text-weight-bold" style={{padding: "0px"}}>
              <div className="is-title">Bogota</div>
              <Moment format="hh:mm a" tz="America/Bogota" />
              </div>
            </div>
            <ExpandButton
              Expand={Expand}
              ExpandComponent={ExpandComponent}
              CloseComponent={CloseComponent}
            />
          </div>

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

      <div ref={pillRef} className="column componentContainer" id="calendar">
        <img
          className="ml-3"
          src={Calendar}
          alt="Book"
          style={{
            height: "80px",
            // transform: "rotate(20deg)",
            position: "absolute",
            top: "-20px",
            // left: "-10px",
          }}
        />
        <ExpandButton
          Expand={Expand}
          ExpandComponent={ExpandComponent}
          CloseComponent={CloseComponent}
        />
      </div>

      <div ref={pillRef} className="column componentContainer" id="video">
        <img
          className="ml-3"
          src={Compu}
          alt="Computer"
          style={{ height: "50px", width: "50px" }}
        />
        <ExpandButton
          Expand={Expand}
          ExpandComponent={ExpandComponent}
          CloseComponent={CloseComponent}
        />
      </div>
      <div ref={pillRef} className="column componentContainer" id="shopping">
        <img
          className="ml-3"
          src={Shopping}
          alt="Shopping"
          style={{ height: "100px" }}
        />
        <ExpandButton
          Expand={Expand}
          ExpandComponent={ExpandComponent}
          CloseComponent={CloseComponent}
        />
      </div>
      <div ref={pillRef} className="column componentContainer" id="tasks">
        <img
          className="ml-3"
          src={Book}
          alt="Photos"
          style={{ height: "50px", width: "50px" }}
        />
        <ExpandButton
          Expand={Expand}
          ExpandComponent={ExpandComponent}
          CloseComponent={CloseComponent}
        />
      </div>
      <div ref={pillRef} className="column componentContainer" id="bank">
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
        <ExpandButton
          Expand={Expand}
          ExpandComponent={ExpandComponent}
          CloseComponent={CloseComponent}
        />
      </div>
      <div ref={pillRef} className="column componentContainer" id="social">
        <img
          className="ml-3"
          src={Social}
          alt="Social"
          style={{
            height: "80px",
            borderRadius: "10px",
            position: "absolute",
            top: "-10px",
            left: "-5px",
          }}
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
