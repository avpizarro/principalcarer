import { useState } from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPalette, faTimes, faExpandAlt, faExpandArrowsAlt, faPlus, faEnvelope, faLock, faCheck, faUser, faClock } from '@fortawesome/free-solid-svg-icons';
import 'bulma/css/bulma.css';

import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import MainContainer from "./views/MainContainer";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import Footer from "./components/Footer";

import './App.css';

library.add(faPalette, faTimes, faExpandAlt,faExpandArrowsAlt, faPlus, faEnvelope, faLock, faCheck, faUser, faClock );

function App() {
  // Set state to show or hide the modal component
  const [show, setShow] = useState(false);
  // Set state for Modal message

  // const [modalMessage, setModalMessage] = useState("I am a modal message");

  const [modalChildren, setModalChildren] = useState(<></>);

   // Function to close the Modal
   const closeModal = () => setShow(false);
   // {
   //   socket.on('modalToShow', message => setShow(message));
   //   socket.emit("modalClient", false)
   // }

  const ShowSignUpForm = () => {
    setModalChildren(<SignUpForm/>);
    setShow(true);
  };
  
  const ShowLoginForm = () => {
    setModalChildren(<LoginForm/>);
    setShow(true);
  };

  return (
    <div>
      <Navbar ShowSignUpForm={ShowSignUpForm} ShowLoginForm={ShowLoginForm} />
      <Modal show={show} close={closeModal} children={modalChildren}/>
      <MainContainer />
      <Footer />
    </div>
  );
}

export default App;
