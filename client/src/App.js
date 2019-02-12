import React, { Component } from "react";

import "./App.css";

import NavBarjumbo from "./components/pages/NavBarjumbo";
import Bodyad from "./components/pages/Bodyad";
import Footer from "./components/pages/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
      <div id="wrapper">
      <NavBarjumbo />
      <Bodyad />>
      <Footer />
     </div>
      </div>
    );
  }
}

export default App;
