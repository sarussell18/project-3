import React, { Component } from "react";

import "./App.css";

import NavBar from "./components/pages/NavBar";

import Bodyad from "./components/pages/Bodyad";


class App extends Component {
  render() {
    return (
      <div className="App">
      <div id="wrapper">
      <NavBar />
  
      <Bodyad />
     </div>
      </div>
    );
  }
}

export default App;
