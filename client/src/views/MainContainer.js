import { useEffect, useState, useRef } from "react";
import uuid from "react-uuid";
import Moment from "react-moment";
import "moment-timezone";
import moment from "moment-timezone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import API from "../utils/API";
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
import "./style.css";

function MainContainer()
{
  const ExpandComponent = (e) =>
  {
    const elementToOpenId = e.target.parentNode.getAttribute("id");

    if (elementToOpenId === "home")
    {
      setShowHome(true);
      // setHeight(`${600}px`);
    }
    if (elementToOpenId === "clock")
    {
      setShowAddClock(true);
    }
    if (elementToOpenId === "calendar")
    {
      setShowCalendar(true);
    }
    if (elementToOpenId === "medication")
    {
      setShowMed(true);
    }
    if (elementToOpenId === "entertainement")
    {
      setShowEntertainment(true);
    }
    if (elementToOpenId === "shopping")
    {
      setShowShopping(true);
    }
    if (elementToOpenId === "tasks")
    {
      setShowTasks(true);
    }
    if (elementToOpenId === "budget")
    {
      setShowBudget(true);
    }
    if (elementToOpenId === "message")
    {
      setShowMessage(true);
    }
    if (elementToOpenId === "canvas")
    {
      setShowCanvas(true);
    }
  };

  const CloseComponent = (e) =>
  {
    const elementToCloseId = e.target.parentNode.getAttribute("id");

    if (elementToCloseId === "home")
    {
      setShowHome(false);
    }
    if (elementToCloseId === "clock")
    {
      setShowAddClock(false);
    }
    if (elementToCloseId === "calendar")
    {
      setShowCalendar(false);
    }
    if (elementToCloseId === "medication")
    {
      setShowMed(false);
    }
    if (elementToCloseId === "entertainement")
    {
      setShowEntertainment(false);
    }
    if (elementToCloseId === "shopping")
    {
      setShowShopping(false);
    }
    if (elementToCloseId === "tasks")
    {
      setShowTasks(false);
    }
    if (elementToCloseId === "budget")
    {
      setShowBudget(false);
    }
    if (elementToCloseId === "message")
    {
      setShowMessage(false);
    }
    if (elementToCloseId === "canvas")
    {
      setShowCanvas(false);
    }
  };

  // States to show or hide components: Entertainement & Message
  const [showEntertainement, setShowEntertainment] = useState(false)
  const [showMessage, setShowMessage] = useState(false)

  // Set Home states
  const [showHome, setShowHome] = useState(false);

  // Set Calendar states
  const [showCalendar, setShowCalendar] = useState(false);

  // Set Shopping states
  const [shopping, setShopping] = useState([]);
  const [showShopping, setShowShopping] = useState(false);
  const [shoppingName, setShoppingName] = useState("");
  const [shoppingQuantity, setShoppingQuantity] = useState("");

  // Get Shopping
  async function loadShopping()
  {
    API.getShopping()
      .then((res) =>
      {
        // console.log(res.data);
        const shoppingList = res.data.map((item) =>
        {
          return {
            name: item.name,
            quantity: item.quantity,
            id: item._id,
          };
        });
        setShopping(shoppingList);
      })
      .catch((err) => console.log(err));
  }

  const changeShoppingName = (e) =>
  {
    e.preventDefault();
    console.log(e.target.value);
    setShoppingName(e.target.value);
  };

  const changeShoppingQuantity = (e) =>
  {
    e.preventDefault();
    console.log(e.target.value);
    setShoppingQuantity(e.target.value);
  };

  const addShoppingData = async (e) =>
  {
    e.preventDefault();
    const ShoppingToAdd = {
      name: shoppingName,
      quantity: shoppingQuantity,
    };
    API.saveShopping(ShoppingToAdd);
    await loadShopping();
  };

  const removeShopping = async (e) =>
  {
    const shoppingToDeleteId = e.target.parentNode.getAttribute("id");
    await API.deleteShopping(shoppingToDeleteId);
    await loadShopping();
  };

  // Define Budget State
  const [showBudget, setShowBudget] = useState(false);
  const [chartData, setChartData] = useState({});
  const [total, setTotal] = useState(0);
  const [transaction, setTransaction] = useState("");
  const [amount, setAmount] = useState(0);

  function loadTransactions()
  {
    API.getTransactions()
      .then((res) =>
      {
        const transactionList = res.data.map(({ name }) => name);
        const amountList = res.data.map(({ amount }) => parseInt(amount));
        let sum = 0;
        const totalsArray = amountList.map((t) =>
        {
          sum += t;
          return sum;
        });
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

  const handleTransactionChange = (e) =>
  {
    e.preventDefault();
    console.log(e.target.value);
    setTransaction(e.target.value);
  };

  const handleAmountChange = (e) =>
  {
    e.preventDefault();
    console.log(e.target.value);
    setAmount(e.target.value);
  };

  // Submit the User input to save the new transaction
  const addFunds = async (e) =>
  {
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
  const substractFunds = async (e) =>
  {
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

  // Set Tasks states
  const [tasks, setTasks] = useState([]);
  const [showTasks, setShowTasks] = useState(false);
  const [taskName, setTaskName] = useState("");

  // Get Tasks
  async function loadTasks()
  {
    API.getTasks()
      .then((res) =>
      {
        // console.log(res.data);
        const tasksList = res.data.map((item) =>
        {
          return {
            name: item.name,
            id: item._id,
          };
        });
        setTasks(tasksList);
      })
      .catch((err) => console.log(err));
  }

  const changeTaskName = (e) =>
  {
    e.preventDefault();
    console.log(e.target.value);
    setTaskName(e.target.value);
  };

  const addTaskData = async (e) =>
  {
    e.preventDefault();
    const taskToAdd = {
      name: taskName,
    };
    API.saveTask(taskToAdd);
    await loadTasks();
  };

  const removeTask = async (e) =>
  {
    const taskToDeleteId = e.target.parentNode.getAttribute("id");
    await API.deleteTask(taskToDeleteId);
    await loadTasks();
  };

  // Get the Medication List
  async function loadMedicine()
  {
    API.getMedication()
      .then((res) =>
      {
        // console.log(res.data);
        const medicationList = res.data.map((item) =>
        {
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
  const handleMedNameChange = (e) =>
  {
    e.preventDefault();
    console.log(e.target.value);
    setMedName(e.target.value);
  };

  const handleMedDoseChange = (e) =>
  {
    e.preventDefault();
    console.log(e.target.value);
    setMedDose(e.target.value);
  };
  const handleMedDosageChange = (e) =>
  {
    e.preventDefault();
    console.log(e.target.value);
    setMedDosage(e.target.value);
  };
  const handleMedQuantityChange = (e) =>
  {
    e.preventDefault();
    console.log(e.target.value);
    setMedQuantity(e.target.value);
  };
  const handleMedUnit = (e) =>
  {
    e.preventDefault();
    console.log(e.target.value);
    setMedUnit(e.target.value);
  };

  // Submit the User input to save the new medication
  const submitMedData = async (e) =>
  {
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

  // Function to delete a medication and update the medication list displayed
  const removeMedication = async (e) =>
  {
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
  async function loadClocks()
  {
    API.getClocks()
      .then((res) =>
      {
        const clocksList = res.data.map((item) =>
        {
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
  function addClock(clock)
  {
    API.saveClock(clock);
  }

  // Function to delete a clock and update the clocks displayed
  async function removeClock(e)
  {
    const clockToDeleteId = e.target.parentNode.getAttribute("id");
    await API.deleteClock(clockToDeleteId);
    await loadClocks();
  }

  // Get timeZones for new clock and save new clock
  const getCityTimezone = () =>
  {
    if (city)
    {
      const allTimeZones = moment.tz.names();
      const chosenTimeZone = allTimeZones.filter((tz) =>
      {
        if (tz.includes(city))
        {
          return tz;
        }
        return null;
      });
      if (chosenTimeZone[0])
      {
        addClock({
          city: city.replace("_", " "),
          timezone: chosenTimeZone[0],
        });
        setClockHelp(false);
        loadClocks();
      } else
      {
        setClockHelp(true);
      }
    } else
    {
      return setClockHelp(true);
    }
  };

  // Function to display message if no timezone or city found
  const showChildrenHelp = () =>
  {
    if (!clockHelp)
    {
      return null;
    } else
    {
      return <p className="help">Choose another city</p>;
    }
  };

  // Function to display the delete clock option or not
  const showClockChildren = () =>
  {
    if (!showAddClock)
    {
      return clocks.map((clock) =>
      {
        return (
          <OneClock
            key={clock.city}
            id={clock.id}
            city={clock.city}
            children={<Moment format="hh:mm a" tz={clock.timezone} />}
          />
        );
      });
    }
    return clocks.map((clock) =>
    {
      return (
        <OneClock
          key={clock.city}
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
  const changeCity = (e) =>
  {
    e.preventDefault();
    const chosenCity = e.target.value;
    setCity(chosenCity.replace(" ", "_"));
  };

  const [showMedChildren, setShowMedChildren] = useState("showMed");

  const clickToShowAddMed = () =>
  {
    console.log("Clicked");
    setShowMedChildren("showAddMedication");
  };

  const clickToShowRemoveMed = () =>
  {
    setShowMedChildren("showRemoveMedication");
  };

  const MedChildrenToShow = () =>
  {
    if (showMedChildren === "showMed")
    {
      return (
        <div className="pl-0 column is-12">
          <ul style={{ margin: "auto", maxWidth: "75%" }}>
            {medication.map((item) =>
            {
              const text = `${item.name} ${item.dose}: ${item.quantity} ${item.unit} left`;
              const dosage = `${item.dosage}`;
              return (
                <div key={uuid()} id={item.id}>
                  <li
                    key={uuid()}
                    style={{
                      fontFamily: "Akzidenz-Light",
                      textAlign: "center",
                    }}
                    className="is-size-7"
                  >
                    {text}
                  </li>
                  <li
                    key={uuid()}
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
    if (showMedChildren === "showAddMedication")
    {
      return (
        <AddMedication
          changeName={handleMedNameChange}
          changeDose={handleMedDoseChange}
          changeDosage={handleMedDosageChange}
          changeQuantity={handleMedQuantityChange}
          changeUnit={handleMedUnit}
          submitMedData={submitMedData}
          back={() =>
          {
            setShowMedChildren("showMed");
          }}
        />
      );
    } else if (showMedChildren === "showRemoveMedication")
    {
      return (
        <div className="column is-12 pl-0">
          <ul style={{ margin: "auto", maxWidth: "75%" }}>
            {medication.map((item) =>
            {
              const text = `${item.name} ${item.dose}: ${item.quantity} ${item.unit} left`;
              const dosage = `${item.dosage}`;
              return (
                <>
                  <div key={uuid()} id={item.id}>
                    <li
                      key={uuid()}
                      style={{
                        fontFamily: "Akzidenz-Light",
                        textAlign: "center",
                      }}
                      className="is-size-7"
                    >
                      {text}
                    </li>
                    <li
                      key={uuid()}
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
            onClick={() =>
            {
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
    {
      module: <Home
        showHome={showHome}
        ExpandComponent={ExpandComponent}
        CloseComponent={CloseComponent}
      />,
      id: "home",
      ref: homeRef
    },
    {
      module: (
        <Clock
          showAddClock={showAddClock}
          children={showClockChildren()}
          changeCity={changeCity}
          getCityTimezone={getCityTimezone}
          childrenHelp={showChildrenHelp()}
          ExpandComponent={ExpandComponent}
          CloseComponent={CloseComponent}
        />
      ),
      id: "clock",
      ref: clockRef,
    },
    {
      module: <Calendar
        showCalendar={showCalendar}
        ExpandComponent={ExpandComponent}
        CloseComponent={CloseComponent}
      />,
      id: "calendar",
      ref: calendarRef
    },
    {
      module: <Medication
        showMed={showMed}
        children={MedChildrenToShow()}
        ExpandComponent={ExpandComponent}
        CloseComponent={CloseComponent}
      />,
      id: "medication",
      ref: medicationRef,
    },
    {
      module: <Entertainement
        ExpandComponent={ExpandComponent}
        CloseComponent={CloseComponent}
        showEntertainement={showEntertainement}
      />,
      id: "entertainement",
      ref: entertainementRef,
    },
    {
      module: (
        <Shopping
          showShopping={showShopping}
          changeName={changeShoppingName}
          changeQuantity={changeShoppingQuantity}
          submitData={addShoppingData}
          ExpandComponent={ExpandComponent}
          CloseComponent={CloseComponent}
          children={
            <div className="column is-12 mt-6" style={{ textAlign: "center" }}>
              <ul style={{ margin: "auto", maxWidth: "90%" }}>
                {shopping.map((item) =>
                {
                  const text = `${item.name}: ${item.quantity}`;
                  return (
                    <div key={uuid()} className="mb-3">
                      <li
                        key={uuid()}
                        style={{
                          fontFamily: "Akzidenz-Light",
                          textAlign: "center",
                        }}
                        className="is-size-7"
                        id={item.id}
                      >
                        {text}
                      </li>
                      <li id={item.id} key={uuid()}>
                        <button
                          style={{ borderStyle: "none", background: "white" }}
                          onClick={removeShopping}
                        >
                          <span id={item.id}>
                            <FontAwesomeIcon icon="minus" />
                          </span>
                        </button>
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
          }
        />
      ),
      id: "shopping",
      ref: shoppingRef,
    },

    {
      module: (
        <Tasks
          changeName={changeTaskName}
          addItemData={addTaskData}
          showTasks={showTasks}
          ExpandComponent={ExpandComponent}
          CloseComponent={CloseComponent}
          children={
            <div className="column is-12 mt-6">
              <ul style={{ margin: "auto", maxWidth: "90%" }}>
                {tasks.map((item) =>
                {
                  return (
                    <div key={uuid()} id={item.id} className="mb-3">
                      <li
                        key={uuid()}
                        style={{
                          fontFamily: "Akzidenz-Light",
                          textAlign: "center",
                        }}
                        className="is-size-7"
                      >
                        {item.name}
                      </li>
                      <li id={item.id} key={uuid()}>
                        <button
                          style={{ borderStyle: "none", background: "white" }}
                          onClick={removeTask}
                        >
                          <span id={item.id}>
                            <FontAwesomeIcon icon="check" />
                          </span>
                        </button>
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
          }
        />
      ),
      id: "tasks",
      ref: tasksRef,
    },
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
          ExpandComponent={ExpandComponent}
          CloseComponent={CloseComponent}
        />
      ),
      id: "budget",
      ref: budgetRef,
    },
    {
      module: <SocialLife
        ExpandComponent={ExpandComponent}
        CloseComponent={CloseComponent}
        showMessage={showMessage}
      />,
      id: "socialLife",
      ref: socialLifeRef
    },
  ];

  // Call useEffect to display the user updates
  useEffect(() =>
  {
    loadMedicine();
    loadClocks();
    loadTransactions();
    loadTasks();
    loadShopping();
  }, []);

  // Render
  return (
    <div className="footerFriend">
      <div className="is-container columns is-multiline is-centered mainContainer">
        {modules.map((module, index) =>
        {
          return (
            <div
              key={index + index}
              ref={module.ref}
              className="column componentContainer"
            >
              {module.module}
            </div>
          );
        })}
        <div
          ref={parentRef}
          className="column is-12 componentContainer"
          id={"parent"}
        >
          <Canvas
            showCanvas={showCanvas}
            ExpandComponent={ExpandComponent}
            CloseComponent={CloseComponent}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
