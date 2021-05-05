import { useState } from "react";
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
  const [newUser, setNewUser] = useState({
    fullName: "",
    relationship: "",
    username: "",
    password: "",
  });
  const [newLoginUser, setNewLoginUser] = useState({});

  const [fullName, setNewUserFullName] = useState();
  const [username, setNewUsername] = useState();
  const [relationship, setNewUserRelationship] = useState();
  const [password, setNewUserPassword] = useState();
  const [loginUsername, setLoginUsername] = useState();
  const [loginPassword, setLoginPassword] = useState();

  const setFullName = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setNewUserFullName(e.target.value);
  };
  const setRelationship = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setNewUserRelationship(e.target.value);
  };
  const setUsername = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setNewUsername(e.target.value);
  };
  const setPassword = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setNewUserPassword(e.target.value);
  };

  const SignUpSubmit = (e) => {
    e.preventDefault();
    const user = {
      fullName: fullName,
      relationship: relationship,
      username: username,
      password: password,
    };
    setNewUser(user);
    console.log(newUser);
  };
  
  const setNewLoginUsername = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setLoginUsername(e.target.value);
  };
  
  const setNewLoginPassword = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setLoginPassword(e.target.value);
  }
  
  const LoginSubmit = (e) => {
    e.preventDefault();
    const loginUser = {
      username: loginUsername,
      password: loginPassword,
    };
    setNewLoginUser(loginUser);
    console.log(newLoginUser);
  };

  // Set state to show or hide the modal component
  const [show, setShow] = useState(false);
  const [modalChildren, setModalChildren] = useState(<></>);

  // Function to close the Modal
  const closeModal = () => setShow(false);

  // Display the submit form on Modal
  const ShowSignUpForm = () => {
    setModalChildren(
      <SignUpForm
        username={username}
        relationship={relationship}
        fullName={fullName}
        password={password}
        setFullName={setFullName}
        setRelationship={setRelationship}
        setUsername={setUsername}
        setPassword={setPassword}
        SignUpSubmit={SignUpSubmit}
      />
    );
    setShow(true);
  };

  // Display login form on Modal
  const ShowLoginForm = () => {
    setModalChildren(
      <LoginForm
        Username={loginUsername}
        password={loginPassword}
        setPassword={setNewLoginPassword}
        setUsername={setNewLoginUsername}
        SignUpSubmit={LoginSubmit}
      />
    );
    setShow(true);
  };

  return (
    <div>
      <Navbar ShowSignUpForm={ShowSignUpForm} ShowLoginForm={ShowLoginForm} />
      <Modal
        show={show}
        close={closeModal}
        children={modalChildren}
      />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default App;
