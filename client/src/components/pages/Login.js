import React, { Component, Fragment } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';
import UploadPage from '../../UploadPage';
var apiBaseUrl = "http://localhost:4000/api/";

class Login extends Component {
  render() {
    return(
      <Fragment>
        <h1>Login Page</h1>

      </Fragment>
    )
  }
};

export default Login;