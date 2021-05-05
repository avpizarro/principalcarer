import { useEffect, useState } from "react";
import uuid from "react-uuid";
import Canvas from "../Canvas";
import Budget from "../Budget";
import Calendar from "../Calendar";
import Clock from "../Clock";
import Entertainement from "../Entertainement";
import Home from "../Home";
import Medication from "../Medication";
import Shopping from "../Shopping";
import SocialLife from "../SocialLife";
import Tasks from "../Tasks";
import "./style.css";

import ComponentContainer from "../ComponentContainer";

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
    { module: <Home />,
      id: "Home",
    },
    { module: <Canvas />,
      id: "parent",
    },
    { module: <Clock />,
      id: "Clock",
    },
    { module: <Medication />,
      id: "Medication",
    },
    { module:     <Calendar />,
      id: "Calendar",
    },
    { module: <Entertainement />,
      id: "Entertainement",
    },
    { module: <Shopping />,
      id: "Shopping",
    },
    { module:  <Tasks />,
      id: "Tasks",
    },
    { module:   <Budget />,
      id: "Budget",
    },
    { module: <SocialLife />,
      id: "SocialLife",
    },
  ];

  return (
    <div className="is-container columns is-multiline mainContainer">
      {modules.map((module) => { 
        const btn = `btn${module.id}`
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
      )})}

    </div>
  );
}

export default MainContainer;
