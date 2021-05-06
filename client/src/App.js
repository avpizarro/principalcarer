import { useState } from "react";
// import { useEffect } from "react";

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
} from "@fortawesome/free-solid-svg-icons";
import "bulma/css/bulma.css";

import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import MainContainer from "./views/MainContainer";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import Footer from "./components/Footer";

import "./App.css";

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
  faClock
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
  const [modalChildren, setModalChildren] = useState(<></>);

  // Function to close the Modal
  const closeModal = () => setShow(false);

  // Handle the SIGN UP FORM data
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

  const signUpSubmit = (e) => {
    e.preventDefault();
    const userToAdd = {
      fullName: fullName,
      relationship: relationship,
      username: username,
      password: password,
    };
    setUser(userToAdd);
    console.log(user);
    setModalChildren(
      <div style={{ color: "white" }} className="has-text-centered">
        <span className="mt-0 is-size-4">
          Welcome <span> {userToAdd.fullName} </span>
        </span>
      </div>
    );
  };

  // Display SIGN UP FORM on Modal
  const showSignUpForm = () => {
    setModalChildren(
      <SignUpForm
        relationship={relationship}
        changeFullName={handleFullNameChange}
        changeRelationship={handlRelationshipChange}
        changeUsername={handleUsernameChange}
        changePassword={handlePasswordChange}
        signUpSubmit={signUpSubmit}
      />
    );
    setShow(true);
  };
  // -----------------END ----------------

  // Handle the LOGIN FORM data
  const [newLoginUser, setNewLoginUser] = useState({
    loginUsername: "",
    loginPassword: "",
  });
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // const logUsername = "";
  // const logPassword = "";

  const handleLoginUsernameChange = async (e) => {
    e.preventDefault();
    console.log("User to LOGIN Username", e.target.value);
    await setLoginUsername(e.target.value);
  };

  const handleLoginPasswordChange = async (e) => {
    e.preventDefault();
    console.log("User to LOGIN Password", e.target.value);
    await setLoginPassword(e.target.value);
  };

  const loginSubmit = async (e) => {
    e.preventDefault();
    const loginUser = {
      loginUsername: loginUsername,
      loginPassword: loginPassword,
    };
    await setNewLoginUser(loginUser);
    console.log("New USER to login", loginUser);
    console.log("USER in State", newLoginUser);
    setModalChildren(
      <div style={{ color: "white" }} className="has-text-centered">
        <span className="mt-0 is-size-4">
       <span>{loginUser.loginUsername}</span>, you have logged in succesfully
        </span>
      </div>
    );
  };

  // Display LOGIN FORM on Modal
  const showLoginForm = () => {
    setModalChildren(
      <LoginForm
        changeUsername={handleLoginUsernameChange}
        changePassword={handleLoginPasswordChange}
        loginSubmit={loginSubmit}
      />
    );
    setShow(true);
  };
  // ----------END-------------

  // Display Name of NEW USER on Modal
  // useEffect(() => {
  //   console.log(newLoginUser);
  //   );
  // }, [modalChildren]);

  return (
    <div>
      <Navbar
        showSignUpForm={showSignUpForm}
        showLoginForm={showLoginForm}
        mobileNavigation={mobileNavigation}
        showMobileNavigation={showMobileNavigation}
        closeMobileNavigation={closeMobileNavigation}
      />
      <Modal show={show} close={closeModal} children={modalChildren} />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default App;
