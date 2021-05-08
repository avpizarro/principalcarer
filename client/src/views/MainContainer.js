import { useEffect, useState, useRef } from "react";
import uuid from "react-uuid";
import axios from "axios";
import Moment from "react-moment";
import "moment-timezone";
import moment from "moment-timezone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./style.css";
import API from "../utils/API";
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

  // Set the states and functions to expand the components on click
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
      setExpand(true);
    }
    if (elementToOpenId === "budget") {
      setShowBudget(true);
      setExpand(true);
    }
    if (elementToOpenId === "parent") {
      setShowCanvas(true);
      setExpand(true);
    }

  };

  const CloseComponent = (e) => {
    console.log("I am trying to close");
    const elementToCloseId = e.target.parentNode.getAttribute("id");
    setComponentId(elementToCloseId);
    console.log("This is the previous height: ", previousHeight);
    // setHeight(previousHeight);
    setHeight("210px");
    setExpand(false);
    setShowMed(false);
    setShowAddClock(false);
    setShowBudget(false);
    setShowCanvas(false);

  };

// Define Budget State
const [budget, setBudget] = useState([]);
const [showBudget, setShowBudget] = useState(false);


// Define Canvas States
const [showCanvas, setShowCanvas] = useState(false);

  // Define Medication State
  const [medication, setMedication] = useState([]);
  const [showMed, setShowMed] = useState(false);

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

  // Set states for Clock component
  const [showAddClock, setShowAddClock] = useState(false);
  const [city, setCity] = useState("");
  const [timezone, setTimezone] = useState("");
  const [clocks, setClocks] = useState([]);
  const [clockHelp, setClockHelp] = useState(false);
  
  // Get the clocks from DB and create function to display them
  function loadClocks() {
    API.getClocks()
    .then((res) => {
      const clocksList = res.data.map((item) => {
        return {
          city: item.city,
          timezone: item.timezone,
          id: item._id,
        };
      });
      setClocks(clocksList);
    })
    .catch((err) => console.log(err));
  }
  
  // Function to save a new clock
  function addClock(clock) {
    API.saveClock(clock);
  }
  
  // Function to delete a clock and update the clocks displayed
  function removeClock(e) {
    const clockToDeleteId = e.target.parentNode.getAttribute("id");
    API.deleteClock(clockToDeleteId);
    loadClocks();
  }
  
  // Get timeZones for new clock and save new clock
  const getCityTimezone = () => {
    if (city) {
      const allTimeZones = moment.tz.names();
      const chosenTimeZone = allTimeZones.filter((tz) => {
        if (tz.includes(city)) {
          return tz;
        }
        return null;
      });
      if (chosenTimeZone[0]) {
        setTimezone(chosenTimeZone[0]);
        addClock({
          city: city.replace("_", " "),
          timezone: chosenTimeZone[0],
        });
        setClockHelp(false);
        loadClocks();
      } else {
        setClockHelp(true);
      }
    } else {
      return setClockHelp(true);
    }
  };

  // Function to display message if no timezone or city found 
  const showChildrenHelp = () => {
    if (!clockHelp) {
      return null;
    } else {
      return <p class="help">Choose another city</p>;
    }
  };

  // Function to display the delete clock option or not
  const showClockChildren = () => {
    if (!showAddClock) {
      return clocks.map((clock) => {
        return (
          <OneClock
            id={clock.id}
            city={clock.city}
            children={<Moment format="hh:mm a" tz={clock.timezone} />}
          />
        );
      });
    }
    return clocks.map((clock) => {
      return (
        <OneClock
          id={clock.id}
          city={clock.city}
          children={
            <>
              <Moment format="hh:mm a" tz={clock.timezone} />
              <br></br>{" "}
              <button
                style={{ borderStyle: "none", background: "white" }}
                onClick={removeClock}
              >
                <span>
                  <FontAwesomeIcon icon="minus" />
                </span>
              </button>
            </>
          }
        />
      );
    });
  };

  // Function to get the user chosen city and make it usable to find a timezone
  const changeCity = (e) => {
    e.preventDefault();
    const chosenCity = e.target.value;
    setCity(chosenCity.replace(" ", "_"));
  };

  // Function to display the main components
  const modules = [
    { module: <Home />, id: "home", ref: homeRef },
    {
      module: (
        <Clock
          showAddClock={showAddClock}
          children={showClockChildren()}
          changeCity={changeCity}
          getCityTimezone={getCityTimezone}
          childrenHelp={showChildrenHelp()}
        />
      ),
      id: "clock",
      ref: clockRef,
    },
    { module: <Calendar />, id: "calendar", ref: calendarRef },
    {
      module: (
        <Medication
          showMed={showMed}
          children={
            <div className="table-container">
              <table className="table">
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
    { module: <Budget  showBudget={showBudget}/>, id: "budget", ref: budgetRef },
    { module: <SocialLife />, id: "socialLife", ref: socialLifeRef },
  ];

  // Call useEffect to display the user updates
  useEffect(() => {
    loadMedicine();
    loadClocks();
  }, []);

  // Render
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
          <Canvas showCanvas={showCanvas}/>
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
