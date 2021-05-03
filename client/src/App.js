import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPalette, faTimes, faExpandAlt, faExpandArrowsAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import 'bulma/css/bulma.css'
import MainContainer from "./components/MainContainer";
import './App.css';

library.add(faPalette, faTimes, faExpandAlt,faExpandArrowsAlt, faPlus );

function App() {

  return (
    <MainContainer />
  );
}

export default App;
