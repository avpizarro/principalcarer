import { useEffect, useState } from "react";
import uuid from "react-uuid";

import ComponentContainer from "../components/ComponentContainer";
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
    // { module: <Canvas />, id: "parent" },
    { module: <Clock />, id: "Clock" },
    { module: <Medication />, id: "Medication" },
    { module: <Calendar />, id: "Calendar" },
    { module: <Entertainement />, id: "Entertainement" },
    { module: <Shopping />, id: "Shopping" },
    { module: <Tasks />, id: "Tasks" },
    { module: <Budget />, id: "Budget" },
    { module: <SocialLife />, id: "SocialLife" },
  ];

  return (
    <div className="is-container columns is-multiline mainContainer">

      {modules.map((module) => {
        const btn = `btn${module.id}`;
        return (
          <ComponentContainer
            key={uuid()}
            id={module.id}
            btnId={btn}
            Expand={Expand}
            ExpandComponent={ExpandComponent}
            CloseComponent={CloseComponent}
          >
            {module.module}
          </ComponentContainer>
        );
      })}

    </div>
  );
}

export default MainContainer;
