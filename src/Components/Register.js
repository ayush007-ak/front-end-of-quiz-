
import React, { Component } from 'react';
import TextField from "./TextField";
import debounce from 'lodash.debounce'
import { singleFieldValidation, allFieldsValidation } from "../utils/validation";
import axios from 'axios';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import '../Css/register.css';

const waitTime = 500;

class Register extends Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handlcity=this.handlcity.bind(this);
}

  state = {
    Datastate:[],
    city:[],
    selectedCity:"",
    selectedState:"",
    UserDetail: {
      FirstName: "",
      LastName: "",
      UserName: "",
      Email: "",
      Password: "",
      Address: "",
      Gender: "",
      Dob: "",
    },
    formErrors: {}
  };

  onChange = (event) => {
    const { name, value } = event.target;
    const { UserDetail } = this.state;
    UserDetail[name] = value;
    this.setState({ UserDetail });
    this.debounceSingleFieldValidation({ name, value });
    
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { isValid, errors } = allFieldsValidation(this.state.UserDetail);
    if (!isValid) {
      this.setState({ formErrors: errors });
    } else {
      alert('No error, form can now submit....');
      this.setState({ formErrors: {} });
    }
    axios({
      method: 'POST',
      url: 'http://localhost:8082/quizApp/public/users',
      data: {
        firstName: this.state.UserDetail.FirstName,
        lastName: this.state.UserDetail.LastName,
        address: this.state.UserDetail.Address,
        userName: this.state.UserDetail.UserName,
        city: this.state.selectedCity,
        dob: this.state.UserDetail.Dob,
        state: this.state.selectedState,
        gender: this.state.UserDetail.Gender,
        emailId: this.state.UserDetail.Email,
        password: this.state.UserDetail.Password,
      }
    })
      .then(response => {
        //console.log(response)
        this.setState({ res: 'Employee Successfully Registered' })
      })
      .catch((error) => {
        this.setState({ res: error.response.data.employeeError.errorMessage });
      });
      window.location="./login"
  };

  debounceSingleFieldValidation = debounce(({ name, value }) => {
    const { formErrors } = this.state;
    const { isValid, errors } = singleFieldValidation({ key: name, value });
    if (!isValid) {
      this.setState({ formErrors: { ...formErrors, [name]: errors[name] } });
    } else {
      this.setState({ formErrors: { ...formErrors, [name]: null } });
    }
  }, waitTime);

//new get api for state and city

componentDidMount(){
  axios.get("/public/state")
  .then(response=>{
      //console.log(response.data);
      //console.log(this.state.Retrieve)
      this.setState({Datastate:response.data});
    
    //  console.log(this.state.Datastate)
     
   
        
     
  }).catch(console.log)
  
}




handleChange(e){
  // this.setState({Datastate:e.target.value})
  // console.log(this.state.Datastate)
  //console.log(e)
  //console.log(e.target.value)

  this.setState({selectedState: e.target.value})
  const index = e.target.selectedIndex;
  const optionElement = e.target.childNodes[index];
  const optionElementId = optionElement.getAttribute('id');

  this.setState({selectedState: e.target.value})
  axios.get("/public/"+optionElementId)
  .then(response =>{
    //  console.log(response.data)
      this.setState({city:response.data});
  //    console.log(this.state.city)
     // console.log(this.state.Datastate)
  }).catch(console.log)
  
}



handlcity(e){
//console.log(e.target.value)
this.setState({selectedCity: e.target.value})
//this.setState({city:e.target.value})
}







  render() {
    const { UserDetail, formErrors } = this.state;
    const { FirstName, LastName, UserName, Email, Password, Dob, State, City, Address, Gender } = UserDetail;
    let options =  this.state.Datastate.map((e)=>(
      <option id={e.stateCode} name={e.stateCode} value={e.stateName} >{e.stateName} </option>
   ))
   
   let optioncity = this.state.city.map((w)=>(
   <option key={w} value={w}>{w}</option>
   ))
    
    return (
      <React.Fragment>
        <div style={{ background: "white", marginTop: "10px", height: "30px", width: "20rem", marginLeft: "10px", borderRadius: "30%" }}>
          <Breadcrumb>
            <Breadcrumb.Item href="/" style={{ marginLeft: "60px", marginTop: "3%" }}>Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/login" style={{ marginTop: "3%" }}>Login</Breadcrumb.Item>
          </Breadcrumb>

      </div>


        <div className="container py-5 h-100">

          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-8 col-xl-6">
              <div className="card rounded-3">

                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2"><center><b>USER REGISTRATION</b></center></h3>
                    <div>{this.state.res}</div>

                  <form className="px-md-2" noValidate onSubmit={this.handleSubmit}>

                  <div class="form-outline mb-4">
                    <label class="form-label" for="form3Example1q"><b>FirstName</b></label>
                    <TextField
                      error={formErrors['FirstName']} type="text" name="FirstName" class="form-control"
                      value={FirstName} onChange={this.onChange} placeholder='Enter First Name' />
                    <br/>
                    <label class="form-label" for="form3Example1q"><b>LastName</b></label>
                    < TextField
                      error={formErrors['LastName']} type="text" name="LastName" class="form-control"
                      value={LastName} onChange={this.onChange} placeholder='Enter Last Name' />
                </div>
                
                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline datepicker">
                      <label class="form-label" for="form3Example1q"><b>Date</b></label>
                        <input
                          error={formErrors['Dob']} type="date" name="Dob" class="form-control"
                          value={Dob} onChange={this.onChange} placeholder='Dob' />
                    </div>
                    <br/>
                    <div class="col-md-6 md-4">
                      <label class="form-label" for="form3Example1q"><b>Gender</b></label>
                      <select class="select" name="Gender" value={Gender}  
                        onChange={this.onChange} error={formErrors['Gender']}>
                          <option value="1" >Not Selected</option>
                          <option value="female">Female</option>
                          <option value="male">Male</option>
                          <option value="other">Other</option>
                        </select>

                    </div>
                  </div>
                </div>

                <div class="form-outline mb-4">
                  <label class="form-label" for="form3Example1q"><b>Address</b></label>
                  < TextField
                    error={formErrors['Address']} type="text" name="Address" class="form-control"
                    value={Address} onChange={this.onChange} placeholder='Address' />
                </div>
                
                <div class="mb-4">
                  <label class="form-label" for="form3Example1q"><b>State</b></label>
                  <select 
                      onChange={this.handleChange}>
                      <option selected="true" disabled="disabled">--Choose State--</option>  
                      {options}
                  </select>
                  
                  <label class="form-label" for="form3Example1q"><b>City</b></label>
                    <select 
                      onChange={this.handlcity}>
                      <option selected="true" disabled="disabled">--Choose City--</option>
                      {optioncity}
                    </select>
                </div>

                <div class="form-outline mb-4">
                  <label class="form-label" for="form3Example1q"><b>Email</b></label>
                  < TextField
                    error={formErrors['Email']} type="text" name="Email" class="form-control"
                    value={Email} onChange={this.onChange} placeholder='Enter Email' />
                </div>

                <div class="form-outline mb-4">
                  <label class="form-label" for="form3Example1q"><b>UserName</b></label>
                  < TextField
                    error={formErrors['UserName']} type="text" name="UserName" class="form-control"
                    value={UserName} onChange={this.onChange} placeholder='Enter User Name' />
                </div>

                <div class="form-outline mb-4">
                  <label class="form-label" for="form3Example1q"><b>Password</b></label>
                  < TextField
                    error={formErrors['Password']} type="password" name="Password" class="form-control"
                    value={Password} onChange={this.onChange} placeholder='Enter Password' />
                </div>

                <button className="btn btn-primary" type="submit">Submit form</button>
              
                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>

      </React.Fragment>

    )
  }
}

export default Register;