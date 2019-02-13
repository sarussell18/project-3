import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";

import NavBarjumbo from './components/pages/NavBarjumbo'
import Tiles from './components/pages/Tiles'
import BodyMA from './components/pages/BodyMA'
import BodyER from './components/pages/BodyER'
import BodyFK from './components/pages/BodyFK'
import BodyNM from './components/pages/BodyNM'
import BodyGS from './components/pages/BodyGS'
import BodyQE from './components/pages/BodyQE'
import BodyRP from './components/pages/BodyRP'
import BodySA from './components/pages/BodySA'
import BodyMG from './components/pages/BodyMG'
import BodyRBG from './components/pages/BodyRBG'
import Bodyad from './components/pages/Bodyad'
import BodyMC from './components/pages/BodyMC'
import Jumbotron from './components/pages/Jumbotron'



class App extends Component {
  render() {


    return (
      <div className="App">
      <div id="wrapper">
      <NavBarjumbo  />
      <Jumbotron />
      <Router>
      <Switch>
        <Route path='/marie' component={BodyMC} />
        <Route path='/angela' component={Bodyad} />
        <Route path='/ruth' component={BodyRBG} />
        <Route path='/marty' component={BodyMG} />
        <Route path='/susan' component={BodySA} />
        <Route path='/rosa' component={BodyRP} />
        <Route path='/queen' component={BodyQE} />
        <Route path='/gloria' component={BodyGS} />
        <Route path='/nelson' component={BodyNM} />
        <Route path='/frida' component={BodyFK} />
        <Route path='/eleanor' component={BodyER} />
        <Route path='/mustafa' component={BodyMA} />
        <Route path='/' component={Tiles} />
      </Switch>
      </Router>
     </div>
    </div>
    );
  }
}

export default App;
