// Import hooks from react
import { useState } from "react";
// Import fontawesome and individual icons
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPalette,
  faTimes,
  faExpandAlt,
  faExpandArrowsAlt,
  faPlus,
  faEnvelope,
  faLock,
  faCheck,
  faUser,
  faClock,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
// Import css framework
import "bulma/css/bulma.css";

// Import own stylesheet
import "./App.css";

// Import components
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import MainContainer from "./views/MainContainer";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import Footer from "./components/Footer";

// Add the Fontawesome icons to the library so they can be used by components
library.add(
  faPalette,
  faTimes,
  faExpandAlt,
  faExpandArrowsAlt,
  faPlus,
  faEnvelope,
  faLock,
  faCheck,
  faUser,
  faClock,
  faMinus
);

function App() {
  // Handle Mobile NavbarDisplay
  const [mobileNavigation, setMobileNavigation] = useState(false);

  const showMobileNavigation = (e) => {
    e.preventDefault();
    console.log("Hamburger clicked");
    setMobileNavigation(true);
    console.log(mobileNavigation);
  };

  const closeMobileNavigation = (e) => {
    e.preventDefault();
    console.log("Arrow clicked");
    setMobileNavigation(false);
    console.log(mobileNavigation);
  };

  // Handle MODAL display
  // Set state to show or hide the modal component
  const [show, setShow] = useState(false);

  // Function to close the Modal
  const closeModal = () => setShow(false);

  // Handle the SIGN UP FORM data
  // Set States
  const [user, setUser] = useState({
    fullName: "",
    relationship: "",
    username: "",
    password: "",
  });

  const [fullName, setFullName] = useState();
  const [username, setUsername] = useState();
  const [relationship, setRelationship] = useState();
  const [password, setPassword] = useState();

  // Set functions to get the User inputs
  const handleFullNameChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setFullName(e.target.value);
  };

  const handlRelationshipChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setRelationship(e.target.value);
  };
  const handleUsernameChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  // Submit the User input
  const signUpSubmit = (e) => {
    e.preventDefault();
    const userToAdd = {
      fullName: fullName,
      relationship: relationship,
      username: username,
      password: password,
    };
    setUser(userToAdd);
    setModalInfo("signUpMessage");
    console.log(user);
  };

  // Display SIGN UP FORM on Modal
  const showSignUpForm = () => {
    setModalInfo("signUpForm");
    setShow(true);
  };
  // -----------------END ----------------

  // Handle the LOGIN FORM data
  // Set States
  const [newLoginUser, setNewLoginUser] = useState({
    loginUsername: "",
    loginPassword: "",
  });
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Set functions to get the User inputs
  const handleLoginUsernameChange = (e) => {
    e.preventDefault();
    console.log("User to LOGIN Username", e.target.value);
    setLoginUsername(e.target.value);
  };

  const handleLoginPasswordChange = (e) => {
    e.preventDefault();
    console.log("User to LOGIN Password", e.target.value);
    setLoginPassword(e.target.value);
  };
 // Submit the User input
  const loginSubmit = (e) => {
    e.preventDefault();
    const loginUser = {
      loginUsername: loginUsername,
      loginPassword: loginPassword,
    };
    console.log("New USER to login", loginUser);
    setNewLoginUser(loginUser);
    console.log("New USER to login", loginUser);
    console.log("USER in State", newLoginUser);
    setModalInfo("loginMessage");
  };

  // Display LOGIN FORM on Modal
  const showLoginForm = () => {
    setModalInfo("loginForm");
    setShow(true);
  };
  // ----------END-------------

  // Set INFO to display on modal
  // State to define what to display
  const [modalInfo, setModalInfo] = useState("");

  const displayInModal = () => {
    if (modalInfo === "loginForm") {
      return (
        <LoginForm
          changeUsername={handleLoginUsernameChange}
          changePassword={handleLoginPasswordChange}
          loginSubmit={loginSubmit}
        />
      );
    } else if (modalInfo === "signUpForm") {
      return (
        <SignUpForm
          relationship={relationship}
          changeFullName={handleFullNameChange}
          changeRelationship={handlRelationshipChange}
          changeUsername={handleUsernameChange}
          changePassword={handlePasswordChange}
          signUpSubmit={signUpSubmit}
        />
      );
    } else if (modalInfo === "loginMessage") {
      return (
        <div style={{ color: "white" }} className="has-text-centered">
          <span className="mt-0 is-size-4">
            <span>{newLoginUser.loginUsername}</span>, you have logged in
            succesfully.
          </span>
        </div>
      );
    } else if (modalInfo === "signUpMessage") {
      return (
        <div style={{ color: "white" }} className="has-text-centered">
          <span className="mt-0 is-size-4">
            Welcome <span> {user.fullName} </span>
          </span>
        </div>
      );
    }
  };

  // Render
  return (
    <div>
      <Navbar
        showSignUpForm={showSignUpForm}
        showLoginForm={showLoginForm}
        mobileNavigation={mobileNavigation}
        showMobileNavigation={showMobileNavigation}
        closeMobileNavigation={closeMobileNavigation}
      />
      <Modal show={show} close={closeModal} children={displayInModal()} />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default App;
