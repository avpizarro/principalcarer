import { useEffect, useState, useRef } from "react";
import uuid from "react-uuid";
import axios from "axios";
import Moment from "react-moment";
import "moment-timezone";
import moment from "moment-timezone";

// import ComponentContainer from "../components/ComponentContainer";
import ExpandButton from "../components/ExpandButton";
import Canvas from "../components/Canvas";
import Budget from "../components/Budget";
import Calendar from "../components/Calendar";
import Clock from "../components/Clock";
import OneClock from "../components/OneClock";
import Entertainement from "../components/Entertainement";
import Home from "../components/Home";
import Medication from "../components/Medication";
import Shopping from "../components/Shopping";
import SocialLife from "../components/SocialLife";
import Tasks from "../components/Tasks";

function MainContainer() {
  const [previousHeight, setPreviousHeight] = useState("");
  const [height, setHeight] = useState("");

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
      console.log("Expand HEIGHT:", e.target.parentNode.clientHeight);
    }
    if (elementToOpenId === "medication") {
      setShowMed(true);
      setExpand(true);
    }
    if (elementToOpenId === "clock") {
      setShowAddClock(true);
      setShowNewClock(true);
      setExpand(true);
    }
  };

  const CloseComponent = (e) => {
    console.log("I am trying to close");
    const elementToCloseId = e.target.parentNode.getAttribute("id");
    setComponentId(elementToCloseId);
    console.log("This is the previous height: ", previousHeight);
    setHeight(previousHeight);
    setHeight("210px");
    setExpand(false);
    setShowMed(false);
    setShowAddClock(false);
  };

  // Define Medication State
  const [medication, setMedication] = useState([]);
  const [showMed, setShowMed] = useState(false);

  useEffect(() => {
    if (componentId) {
      document.getElementById(componentId).style.height = height;
    }
  }, [height]);

  useEffect(() => {
    loadMedicine();
    // console.log("Console.log medication:", medication);
  }, []);

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

  // Get the Medication List
  function loadMedicine() {
    axios
      .get("api/medication")
      .then((res) => {
        // console.log(res.data);
        const medicationList = res.data.map((item) => {
          return {
            name: item.name,
            dose: item.dose,
            dosage: item.dosage,
            purpose: item.purpose,
            quantity: item.quantity,
          };
        });
        setMedication(medicationList);
      })
      .catch((err) => console.log(err));
  }

  // Get timeZones and add new clock

  const initialCity = localStorage.getItem("city");
  const initialTimezone = localStorage.getItem("timezone");
  console.log(initialCity, initialTimezone);

  const [showAddClock, setShowAddClock] = useState(false);
  const [city, setCity] = useState(initialCity || "");
  const [timezone, setTimezone] = useState(initialTimezone || "");
  const [showNewClock, setShowNewClock] = useState(true);

  useEffect(() => {
    if (!city) {
      setShowNewClock(false);
    }
  })

  const getCityTimezone = () => {
    if (city) {
      const allTimeZones = moment.tz.names();
      console.log(allTimeZones);
      const chosenTimeZone = allTimeZones.filter((tz) => {
        if (tz.includes(city)) {
          return tz;
        }
        return null;
      });
      console.log(chosenTimeZone);
      setTimezone(chosenTimeZone[0]);
      setShowNewClock(true);
      localStorage.setItem("city", city);
      localStorage.setItem("timezone", chosenTimeZone[0]);
    } else {
      return "Choose a different City";
    }
    console.log(showNewClock);
  };

  const showClockChildren = () => {
    if (!showNewClock) {
      return null;
    }
    return (
      <OneClock
        city={city}
        children={<Moment format="hh:mm a" tz={timezone} />}
      />
    );
  };

  const changeCity = (e) => {
    e.preventDefault();
    const chosenCity = e.target.value;
    console.log(chosenCity);
    setCity(chosenCity.replace(" ", "_"));
  };

  const modules = [
    { module: <Home />, id: "home", ref: homeRef },
    {
      module: (
        <Clock
          showAddClock={showAddClock}
          children={showClockChildren()}
          changeCity={changeCity}
          getCityTimezone={getCityTimezone}
        />
      ),
      id: "clock",
      ref: clockRef,
    },
    // { module: <OneClock />, id: "clock", ref: clockRef },
    { module: <Calendar />, id: "calendar", ref: calendarRef },
    {
      module: (
        <Medication
          showMed={showMed}
          children={
            <div className="table-container">
              <table className="table">
                {/* <thead><tr>Medication List</tr></thead> */}
                <tbody>
                  {medication.map((item) => {
                    return (
                      <tr key={uuid()}>
                        <td>{item.name}</td>
                        <td>{item.dose}</td>
                        <td>
                          {item.dosage.amount}
                          <span>every</span>
                          {item.dosage.time}
                        </td>
                        <td>{item.quantity}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          }
        />
      ),
      id: "medication",
      ref: medicationRef,
    },
    {
      module: <Entertainement />,
      id: "entertainement",
      ref: entertainementRef,
    },
    { module: <Shopping />, id: "shopping", ref: shoppingRef },
    { module: <Tasks />, id: "tasks", ref: tasksRef },
    { module: <Budget />, id: "budget", ref: budgetRef },
    { module: <SocialLife />, id: "socialLife", ref: socialLifeRef },
  ];

  return (
    <div className="footerFriend">
      <div className="is-container columns is-multiline mainContainer">
        {modules.map((module) => {
          const btn = `btn${module.id}`;
          return (
            <div
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
        <div
          ref={parentRef}
          className="column is-12 componentContainer"
          id={"parent"}
        >
          <Canvas />
          <ExpandButton
            btnId={"btnparent"}
            Expand={Expand}
            ExpandComponent={ExpandComponent}
            CloseComponent={CloseComponent}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
