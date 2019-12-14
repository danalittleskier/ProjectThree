import React from "react";
import { Container, Row, Col, TextInput, Button } from "react-materialize";
import API from "../utils/API";

const initialState = {
  email: "",
  password: "",
  firstname: "",
  lastname: "",
  resortPref: "",
  level: "",
  firstnameError: "",
  lastnameError: "",
  emailError: "",
  passwordError: "",
  resortPrefError: "",


};

class Signup extends React.Component {
  state = initialState;
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  validate = () => {
    let firstnameError = "";
    let lastnameError = "";
    let emailError = "";
    let resortPrefError = "";

    if (!this.state.email.includes("@")){
      emailError = "Invalid Email Address"
    }
    if (this.state.firstname.length < 1){
      firstnameError = "First Name is a required field"
    }
    if (this.state.lastname.length < 1){
      lastnameError = "Last Name is a required field"
    }
    if (this.state.resortPref.length < 1){
      resortPrefError = "Resort Preference is a required field"
    }

    if (emailError 
        || firstnameError
        || lastnameError
        // || passwordError
        || resortPrefError
        ){
     this.setState ({emailError, firstnameError, lastnameError, resortPrefError});
     return false;
    }
    return true;
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const isValid= this.validate();
    if(isValid){
      console.log("email: ", this.state.email, "password: ", this.state.password);
    };
    API.signup({email: this.state.email, 
                password: this.state.password, 
                firstname: this.state.firstname, 
                lastname: this.state.lastname, 
                gender: this.state.gender,
                level: this.state.level,
                resort: this.state.resort})
    .then(response => {
      console.log(response.data)
      this.setState(initialState)
    })
    .catch(err => console.log(err))
  };

 
  render() {
    return (
      <Container>
        <h1 className="center">Sign Up!</h1>
        <Row>
          <Col s={6}>
            <TextInput
              email
              placeholder="Email"
              s={12}
              inputClassName="input-field"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
            <div style={{color: "red"}}>
                {this.state.emailError}
                </div>
           
          </Col>
          <Col s={6}>
            <TextInput
              password
              placeholder="Password"
              s={12}
              inputClassName="input-field"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
            
          </Col>
          <Col s={6}>
            <TextInput
              text
              placeholder="FirstName"
              s={12}
              inputClassName="input-field"
              id="firstname"
              name="firstname"
              value={this.state.firstname}
              onChange={this.handleInputChange}
            />
            <div style={{color: "red"}}>
                {this.state.firstnameError}
                </div>
          </Col>
          <Col s={6}>
            <TextInput
              text
              placeholder="Last Name"
              s={12}
              inputClassName="input-field"
              id="lastname"
              name="lastname"
              value={this.state.lastname}
              onChange={this.handleInputChange}
            />
            <div style={{color: "red"}}>
                {this.state.lastnameError}
                </div>
          </Col>
          <Col s={6}>
            <TextInput
              text
              placeholder="Resort Preference"
              s={12}
              inputClassName="input-field"
              id="resort"
              name="resort"
              value={this.state.resort}
              onChange={this.handleInputChange}
            />
            <div style={{color: "red"}}>
                {this.state.resortPrefError}
                </div>
          </Col>
          <Col s={6}>
            <TextInput
              text
              placeholder="Gender"
              s={12}
              inputClassName="input-field"
              id="gender"
              name="gender"
              value={this.state.gender}
              onChange={this.handleInputChange}
            />
          </Col>
          <Col s={6}>
            <TextInput
              text
              placeholder="Skier Level"
              s={12}
              inputClassName="input-field"
              id="level"
              name="level"
              value={this.state.level}
              onChange={this.handleInputChange}
            />
          </Col>
        </Row>
        <Button onClick={this.handleFormSubmit}>Submit</Button>
      </Container>
    );
  }
}

export default Signup;
