import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { withRouter } from 'react-router-dom'
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';


class Register extends Component {
  state={
    email: '',
    password: '',

  }
  
  onSubmit = (e) => {
    console.log(this.state)
    e.preventDefault()
    axios.post('/authRoute/signup', {email: this.state.email, password:this.state.password})
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
      <form>
        <h2>Register</h2>
        <label>
          Email:
          <input name='email' onChange={this.onChange} value={this.state.email}/>
        </label>
        <label>
          Password:
          <input name='password' onChange={this.onChange} value={this.state.password}/>
        </label>
        <button onClick={this.onSubmit} type='submit'>Submit</button>
      </form>

    )
  }
};

export default Register;