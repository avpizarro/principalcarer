import { useEffect, useState } from "react";
import uuid from "react-uuid";

// import ComponentContainer from "../components/ComponentContainer";
import ExpandButton from "../components/ExpandButton";
import Canvas from "../components/Canvas";
import Budget from "../components/Budget";
import Calendar from "../components/Calendar";
import Clock from "../components/Clock";
import Entertainement from "../components/Entertainement";
import Home from "../components/Home";
import Medication from "../components/Medication";
import Shopping from "../components/Shopping";
import SocialLife from "../components/SocialLife";
import Tasks from "../components/Tasks";

function MainContainer() {
  const [height, setHeight] = useState();
  const [Expand, setExpand] = useState(false);
  const [componentId, setComponentId] = useState("");

  const ExpandComponent = (e) => {
    console.log("I am trying to expand");
    const elementToOpenId = e.target.parentNode.getAttribute("id");
    console.log(elementToOpenId);
    setComponentId(elementToOpenId);

    const component = e.target.parentNode;
    if (component.clientWidth > component.clientHeight) {
      setHeight(`${component.clientWidth}px`);
      setExpand(true);
    }
  };

  const CloseComponent = (e) => {
    console.log("I am trying to close");
    const elementToCloseId = e.target.parentNode.getAttribute("id");
    console.log(elementToCloseId);
    setComponentId(elementToCloseId);
    setHeight("60px");
    setExpand(false);
  };

  useEffect(() => {
    if (componentId) {
      document.getElementById(componentId).style.height = height;
    }
  }, [height]);

  const modules = [
    { module: <Home />, id: "Home" },
    { module: <Clock />, id: "Clock" },
    { module: <Calendar />, id: "Calendar" },
    { module: <Medication />, id: "Medication" },
    { module: <Entertainement />, id: "Entertainement" },
    { module: <Shopping />, id: "Shopping" },
    { module: <Tasks />, id: "Tasks" },
    { module: <Budget />, id: "Budget" },
    { module: <SocialLife />, id: "SocialLife" },
    { module: <Canvas />, id: "parent" },
  ];

  return (
    <div className="footerFriend">
    <div className="is-container columns is-multiline mainContainer">
      {modules.map((module) => {
        const btn = `btn${module.id}`;

        if (module.id === "parent") {
          return (
            <div
              key={uuid()}
              className="column is-12 componentContainer"
              id={module.id}
            >
              {module.module}
              <ExpandButton
                btnId={btn}
                Expand={Expand}
                ExpandComponent={ExpandComponent}
                CloseComponent={CloseComponent}
              />
            </div>
          );
        }
        return (
          <div
            key={uuid()}
            className="column componentContainer"
            id={module.id}
          >
            {module.module}
            <ExpandButton
              btnId={btn}
              Expand={Expand}
              ExpandComponent={ExpandComponent}
              CloseComponent={CloseComponent}
            />
          </div>
        );
      })}
    </div>
    </div>
  );
}

export default MainContainer;
