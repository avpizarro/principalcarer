import { useEffect, useState, useRef } from "react";
import uuid from "react-uuid";
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
import AddMedication from "../components/AddMedication";

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
    // const component = e.target.parentNode;
    // if (component.clientWidth > component.clientHeight) {
    // setHeight(`${component.clientWidth}px`);
    setHeight(`${600}px`);
    setExpand(true);
    // }
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
    if (elementToCloseId === "shopping") {
      setHeight("120px");
      setExpand(false);
    } else if (elementToCloseId === "clock") {
      setHeight("230px");
      setExpand(false);
      setShowAddClock(false);
    } else {
      setHeight("60px");
      setExpand(false);
      setShowMed(false);
      setShowBudget(false);
      setShowCanvas(false);
    }
  };

  // Define Budget State
  const [showBudget, setShowBudget] = useState(false);
  const [chartData, setChartData] = useState({});
  const [total, setTotal] = useState(0);
  const [transaction, setTransaction] = useState("");
  const [amount, setAmount] = useState(0);

  function loadTransactions() {
    API.getTransactions()
      .then((res) => {
        console.log("Bugdet get route", res.data);
        const transactionList = res.data.map(({ name }) => name);
        const amountList = res.data.map(({ amount }) => parseInt(amount));
        let sum=0;
        const totalsArray = amountList.map((t) => {
          sum += t
          return sum;
        });
        console.log("This is the totals Array: ", totalsArray);
        const transactionsChartData = {
          labels: transactionList,
          datasets: [
            {
              label: "Transactions",
              data: totalsArray,
              fill: false,
              backgroundColor: "rgb(250,67,195)",
              borderColor: "rgb(250,67,195)",
              tension: 0.1,
            },
          ],
        };
        const amountListSum = amountList.reduce((a, b) => a + b);
        setTotal(amountListSum);
        setChartData(transactionsChartData);
      })
      .catch((err) => console.log(err));
  }

  const handleTransactionChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setTransaction(e.target.value);
  };

  const handleAmountChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setAmount(e.target.value);
  };

  // Submit the User input to save the new transaction
  const addFunds = async (e) => {
    e.preventDefault();
    const transactionData = {
      name: transaction,
      amount: parseInt(amount),
    };
    setTotal(total + parseInt(amount));
    API.saveTransaction(transactionData);
    loadTransactions();
  };

  // Submit the User input to save the new transaction
  const substractFunds = async (e) => {
    e.preventDefault();
    const transactionData = {
      name: transaction,
      amount: -parseInt(amount),
    };
    setTotal(total - parseInt(amount));
    API.saveTransaction(transactionData);
    loadTransactions();
  };

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
    API.getMedication()
      .then((res) => {
        // console.log(res.data);
        const medicationList = res.data.map((item) => {
          return {
            name: item.name,
            dose: item.dose,
            dosage: item.dosage,
            purpose: item.purpose,
            quantity: item.quantity,
            unit: item.unit,
            id: item._id,
          };
        });
        setMedication(medicationList);
      })
      .catch((err) => console.log(err));
  }

  const [medName, setMedName] = useState("");
  const [medDose, setMedDose] = useState("");
  const [medDosage, setMedDosage] = useState("");
  const [medQuantity, setMedQuantity] = useState("");
  const [medUnit, setMedUnit] = useState("");

  // Set functions to get the User inputs
  const handleMedNameChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setMedName(e.target.value);
  };

  const handleMedDoseChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setMedDose(e.target.value);
  };
  const handleMedDosageChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setMedDosage(e.target.value);
  };
  const handleMedQuantityChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setMedQuantity(e.target.value);
  };
  const handleMedUnit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setMedUnit(e.target.value);
  };

  // Submit the User input to save the new medication
  const submitMedData = async (e) => {
    e.preventDefault();
    const medToAdd = {
      name: medName,
      dose: medDose,
      dosage: medDosage,
      quantity: medQuantity,
      unit: medUnit,
    };
    API.saveMedication(medToAdd);
    await loadMedicine();
    setShowMedChildren("showMed");
  };

  // Function to delete a clock and update the clocks displayed
  const removeMedication = async (e) => {
    const medToDeleteId = e.target.parentNode.getAttribute("id");
    console.log(e.target.parentNode);
    console.log(
      "Cliked and will remove: ",
      e.target.parentNode.getAttribute("id")
    );
    await API.deleteMedication(medToDeleteId);
    await loadMedicine();
    // setShowMedChildren("showMed");
  };

  // Set states for Clock component
  const [showAddClock, setShowAddClock] = useState(false);
  const [city, setCity] = useState("");
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
  async function removeClock(e) {
    const clockToDeleteId = e.target.parentNode.getAttribute("id");
    await API.deleteClock(clockToDeleteId);
    await loadClocks();
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
      return <p className="help">Choose another city</p>;
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

  const [showMedChildren, setShowMedChildren] = useState("showMed");

  const clickToShowAddMed = () => {
    console.log("Clicked");
    setShowMedChildren("showAddMedication");
  };

  const clickToShowRemoveMed = () => {
    setShowMedChildren("showRemoveMedication");
  };

  const MedChildrenToShow = () => {
    if (showMedChildren === "showMed") {
      return (
        <div className="pl-0 column is-12">
          <ul style={{ margin: "auto", maxWidth: "75%" }}>
            {medication.map((item) => {
              const text = `${item.name} ${item.dose}: ${item.quantity} ${item.unit} left`;
              const dosage = `${item.dosage}`;
              return (
                <div key={uuid()} id={item.id}>
                  <li
                    style={{
                      fontFamily: "Akzidenz-Light",
                      textAlign: "center",
                    }}
                    className="is-size-7"
                  >
                    {text}
                  </li>
                  <li
                    style={{
                      fontFamily: "Akzidenz-Light",
                      textAlign: "center",
                    }}
                    className="is-size-7 mb-4"
                  >
                    {dosage}
                  </li>
                </div>
              );
            })}
          </ul>
          <button
            style={{
              borderStyle: "none",
              background: "#F9F9F9",
              margin: "5px",
            }}
            onClick={clickToShowAddMed}
          >
            <span>
              <FontAwesomeIcon icon="plus" size="1x" />
            </span>
          </button>
          <button
            style={{
              borderStyle: "none",
              background: "#F9F9F9",
              margin: "5px",
            }}
            onClick={clickToShowRemoveMed}
          >
            <span>
              <FontAwesomeIcon icon="minus" size="1x" />
            </span>
          </button>
        </div>
      );
    }
    if (showMedChildren === "showAddMedication") {
      return (
        <AddMedication
          changeName={handleMedNameChange}
          changeDose={handleMedDoseChange}
          changeDosage={handleMedDosageChange}
          changeQuantity={handleMedQuantityChange}
          changeUnit={handleMedUnit}
          submitMedData={submitMedData}
        />
      );
    } else if (showMedChildren === "showRemoveMedication") {
      return (
        <div className="column is-12 pl-0">
          <ul style={{ margin: "auto", maxWidth: "75%" }}>
            {medication.map((item) => {
              const text = `${item.name} ${item.dose}: ${item.quantity} ${item.unit} left`;
              const dosage = `${item.dosage}`;
              return (
                <>
                  <div key={uuid()} id={item.id}>
                    <li
                      style={{
                        fontFamily: "Akzidenz-Light",
                        textAlign: "center",
                      }}
                      className="is-size-7"
                    >
                      {text}
                    </li>
                    <li
                      style={{
                        fontFamily: "Akzidenz-Light",
                        textAlign: "center",
                      }}
                      className="is-size-7"
                    >
                      {dosage}
                    </li>
                    <button
                      style={{
                        borderStyle: "none",
                        background: "#F9F9F9",
                        margin: "5px",
                        width: "20px",
                        height: "20px",
                      }}
                      id={item.id}
                      onClick={removeMedication}
                    >
                      <span>
                        <FontAwesomeIcon
                          icon="minus"
                          size="1x"
                          style={{ marginBottom: "10px" }}
                        />
                      </span>
                    </button>
                  </div>
                </>
              );
            })}
          </ul>
          <button
            style={{
              borderStyle: "none",
              background: "transparent",
              margin: "0px",
              width: "20px",
              height: "20px",
            }}
            onClick={() => {
              setShowMedChildren("showMed");
            }}
          >
            <span>
              <FontAwesomeIcon
                icon="long-arrow-alt-left"
                size="1x"
                style={{ marginBottom: "10px" }}
              />
            </span>
          </button>
        </div>
      );
    }
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
      module: <Medication showMed={showMed} children={MedChildrenToShow()} />,
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
    {
      module: (
        <Budget
          showBudget={showBudget}
          chartData={chartData}
          total={total}
          addFunds={addFunds}
          substractFunds={substractFunds}
          changeName={handleTransactionChange}
          changeAmount={handleAmountChange}
        />
      ),
      id: "budget",
      ref: budgetRef,
    },
    { module: <SocialLife />, id: "socialLife", ref: socialLifeRef },
  ];

  // Call useEffect to display the user updates
  useEffect(() => {
    loadMedicine();
    loadClocks();
    loadTransactions();
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
          <Canvas showCanvas={showCanvas} />
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
