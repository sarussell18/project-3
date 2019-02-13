import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import "./App.css";

import NavBarjumbo from './components/pages/NavBarjumbo'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
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
import Donorcomponentcontainer from './components/pages/Donorcomponentcontainer'
import Jumbotron from './components/pages/Jumbotron'
import NavBar from './components/pages/NavBar'
import Footer from './components/pages/Footer'


class App extends Component {
  state={
    isLoggedIn: false
  }

  logUserIn = (user) => {
    console.log(user)
    this.setState({
      isLoggedIn: true,
      user: user
    })

  }
  render() {

    console.log(this.state)
    return (
      <div className="App">
      <div id="wrapper">
      <NavBarjumbo  />

      {this.props.location.pathname === '/' ? <Jumbotron />: "" }

      <Switch>
        <Route path='/register' render={(props) => <Register logUserIn={(user) => this.logUserIn(user)} {...props}/>} />
        <Route path='/login' component={Login} />
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
        <Route path='/donate' component={Donorcomponentcontainer}/>
        <Route path='/' component={Tiles} />
      </Switch>
      <Footer />
     </div>
    </div>
    );
  }
}

export default withRouter(App);
