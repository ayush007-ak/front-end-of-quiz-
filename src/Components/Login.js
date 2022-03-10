import React, { Component } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom';
import Logincss from '../Css/Login.module.css';

import { Navbar, Navlink, Container, Nav } from 'react-bootstrap';
import axios from 'axios';

export default class Login extends Component {

  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      logindata: '',
      res: ''
    }
    this.handleChangeuser = this.handleChangeuser.bind(this)
    this.handleChangepswd = this.handleChangepswd.bind(this);
    this.sendData = this.sendData.bind(this);
  }


  handleChangeuser(e) {
    // this.setState( {username:e.target.value})
    console.log(e);
    //this.setState({[e.target.value]:e.target.value})
    this.setState({ username: e.target.value })

  }


  handleChangepswd(e) {
    console.log(e)
    this.setState({ password: e.target.value })
  }



  sendData = (event) => {
    event.preventDefault();
    console.log("test")
    axios({
      method: 'POST',
      url: 'http://localhost:8082/quizApp/public/login',
      data: {
     
         

        username: this.state.username,

        password: this.state.password


      }
    })
      .then(response => {
        console.log(response)
        this.setState({ logindata: response.data })
        localStorage.setItem("username",this.state.username)
        localStorage.setItem("password",this.state.password)
        if (this.state.logindata == true) {
          window.location = "./welcome"
        } else {
          this.setState({ res: "You are Entering wrong UserName Password" })
        }
        // this.setState({ res: 'Employee Successfully Registered' })
      })
    // .catch((error) => {
    //   this.setState({ res: error.response.data.employeeError.errorMessage });
    // });

    // let history = useNavigate();
    // history.push('/login')
    //window.location='./login'



  }


  render() {
    return (
      <React.Fragment>


        <body className={Logincss}>

          <div class={Logincss.center}>
            <div class={Logincss.div1}>Welcome to Quiz</div>

            <h1>Login</h1>
            <div style={{ color: "red", fontSize: "20px", marginLeft: "20%" }}>{this.state.res}</div>
            <form>
              <div class={Logincss.txt_field}>
                <input type="text" name="username" id="username" value={this.state.username} onChange={this.handleChangeuser} />
                <span></span>
                <label>Username</label>
              </div>
              <div class={Logincss.txt_field} name="password">
                <input type="password" name="password" id="password" value={this.state.password} onChange={this.handleChangepswd} />
                <span></span>
                <label>Password</label>
              </div>
              <div class={Logincss.pass}>Forgot Password?</div>

              <Nav.Link className={Logincss.my_btn} type='submit' onClick={this.sendData}>Sign In</Nav.Link>

              <div class={Logincss.signup_link}>
                New User? <a href="./Register">Register</a>
              </div>
            </form>
          </div>

        </body>


      </React.Fragment>

    )
  }

}