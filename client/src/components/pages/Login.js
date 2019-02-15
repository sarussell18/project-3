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
  state={
    email: '',
    password: '',

  }

  onSubmit = (e) => {
    console.log(this.state)
    e.preventDefault()
    axios.post('/authRoute/login', {email: this.state.email, password:this.state.password})
      .then(result => {
        console.log(result)
        this.props.logUserIn(this.state.email)
        this.props.history.push('/')
      })
      .catch(error => console.log(error))
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    return(
      <Fragment>
        <form>
        <h1>Login Page</h1>
        <label>
          Email:
          <input name='email' onChange={this.onChange} value={this.state.email}/>
        </label>
        <label>
          Password:
          <input name='password' type='password' onChange={this.onChange} value={this.state.password}/>
        </label>
        <button onClick={this.onSubmit} type='submit'>Submit</button>
      </form>
      </Fragment>
    )
  }
};

export default Login;