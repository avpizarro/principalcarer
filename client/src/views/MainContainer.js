import { useEffect, useState, useRef } from "react";
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
  const [previousHeight, setPreviousHeight] = useState();
  const [height, setHeight] = useState();
  const [Expand, setExpand] = useState(false);
  const [componentId, setComponentId] = useState("");

  const ExpandComponent = (e) => {
    console.log("I am trying to expand");
    const elementToOpenId = e.target.parentNode.getAttribute("id");
    setComponentId(elementToOpenId);
    setPreviousHeight(e.target.parentNode.clientHeight);
    const component = e.target.parentNode;
    if (component.clientWidth > component.clientHeight) {
      setHeight(`${component.clientWidth}px`);
      setExpand(true);
      console.log(
        "Expand HEIGHT:",
        e.target.parentNode.clientHeight
      );
    }
  };

  const CloseComponent = (e) => {
    console.log("I am trying to close");
    const elementToCloseId = e.target.parentNode.getAttribute("id");
    console.log(elementToCloseId);

    setComponentId(elementToCloseId);

    const elementRef = elementToCloseId + "Ref";

    for (let i = 0; i < refs.length; i++) {
      if (elementRef === refs[i]) {
        console.log(refs[i].current.clientHeight);
        setHeight(refs[i].current.clientHeight);
      }
      setHeight("60px");
      setHeight(previousHeight);
    }
    console.log(elementRef);
    console.log(
      "CLOSE HEIGHT: ",
      e.target.parentNode.clientHeight
    );
    setExpand(false);
  };

  useEffect(() => {
    if (componentId) {
      document.getElementById(componentId).style.height = height;
    }
  }, [height]);

  const homeRef = useRef();
  const clockRef = useRef();
  const calendarRef = useRef();
  const medicationRef = useRef();
  const entertainementRef = useRef();
  const shoppingRef = useRef();
  const tasksRef = useRef();
  const budgetRef = useRef();
  const socialLifeRef = useRef();
  const parentRef = useRef();

  const refs = [
    homeRef,
    clockRef,
    calendarRef,
    medicationRef,
    entertainementRef,
    shoppingRef,
    tasksRef,
    budgetRef,
    socialLifeRef,
    parentRef,
  ];

  const modules = [
    { module: <Home />, id: "home", ref: homeRef },
    { module: <Clock />, id: "clock", ref: clockRef },
    { module: <Calendar />, id: "calendar", ref: calendarRef },
    { module: <Medication />, id: "medication", ref: medicationRef },
    {
      module: <Entertainement />,
      id: "entertainement",
      ref: entertainementRef,
    },
    { module: <Shopping />, id: "shopping", ref: shoppingRef },
    { module: <Tasks />, id: "tasks", ref: tasksRef },
    { module: <Budget />, id: "budget", ref: budgetRef },
    { module: <SocialLife />, id: "socialLife", ref: socialLifeRef },
    { module: <Canvas />, id: "parent", ref: parentRef },
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
                ref={module.ref}
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
              ref={module.ref}
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
