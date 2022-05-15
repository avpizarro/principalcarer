// Import hooks from react
import React, { useState } from "react";

// Import fontawesome and individual icons
import { library } from "@fortawesome/fontawesome-svg-core";
import
{
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
  faLongArrowAltLeft,
  faUpload,
  faPaperPlane,
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
  faMinus,
  faLongArrowAltLeft,
  faUpload,
  faPaperPlane,
);

function App()
{
  // Handle Mobile NavbarDisplay
  const [mobileNavigation, setMobileNavigation] = useState(false);

  const showMobileNavigation = (e) =>
  {
    e.preventDefault();
    setMobileNavigation(true);
  };

  const closeMobileNavigation = (e) =>
  {
    e.preventDefault();
    setMobileNavigation(false);
  };

  // Handle MODAL display
  // Set state to show or hide the modal component
  const [show, setShow] = useState(false);
  // State to define what to display
  const [modalInfo, setModalInfo] = useState("");

  // Function to close the Modal
  const closeModal = () => setShow(false);

  // Display SIGN UP FORM on Modal
  const showSignUpForm = () =>
  {
    setModalInfo("signUpForm");
    setShow(true);
  };

  // Display LOGIN FORM on Modal
  const showLoginForm = () =>
  {
    setModalInfo("loginForm");
    setShow(true);
  };

  // Set INFO to display on modal
  const displayInModal = () =>
  {
    if (modalInfo === "loginForm")
    {
      return (
        <LoginForm />
      );
    } else if (modalInfo === "signUpForm")
    {
      return (
        <SignUpForm />
      );
    } 
  };

  // Render
  return (
    <div className="is-container mt-3">
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
