import { useEffect, useState } from "react";
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
  };

  // Display SIGN UP FORM on Modal
  const showSignUpForm = () => {
    setModalChildren(
      <SignUpForm
        username={username}
        relationship={relationship}
        fullName={fullName}
        password={password}
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

  });
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [count, setCount] = useState(0);

  // const logUsername = "";
  // const logPassword = "";

  const handleLoginUsernameChange = (e) => {
    e.preventDefault();
    console.log("userNameChange ETV->", e.target.value);
    setLoginUsername(e.target.value);
    console.log("This is the loginUser", loginUsername);
  };

  const handleLoginPasswordChange = (e) => {
    e.preventDefault();
    console.log("passwordChange ETV->", e.target.value);
    setLoginPassword(e.target.value);
    console.log("This is the loginUser", loginUsername);
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    const loginUser = {
      username: loginUsername,
      password: loginPassword
    };
    setNewLoginUser(loginUser);
    setCount(count+1)
    console.log("loginUser about to be submitted to state =->", loginUser);
    console.log("loginUser that should be in state =->", newLoginUser);

    //console.log("This guy is logging in", newLoginUser);
  };

  // Display LOGIN FORM on Modal
  const showLoginForm = () => {
    setModalChildren(
      <LoginForm
        // username={loginUsername}
        // password={loginPassword}
        changeUsername={handleLoginUsernameChange}
        changePassword={handleLoginPasswordChange}
        loginSubmit={loginSubmit}
      />
    );
    setShow(true);
  };
  // ----------END-------------

  // Display Name of NEW USER on Modal
  useEffect(() => {
      console.log(newLoginUser);
      console.log(count);
      setModalChildren(
        <div style={{ color: "white" }}>
          <span>Your are now logged in: </span>
          {newLoginUser.username}
          {newLoginUser.password}
        </div>
      );
  }, [count]);

  return (
    <div>
      <Navbar showSignUpForm={showSignUpForm} showLoginForm={showLoginForm} />
      <Modal show={show} close={closeModal} children={modalChildren} />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default App;
