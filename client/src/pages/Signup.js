import React from "react";
import { Container, Row, Col, TextInput, Button } from "react-materialize";
import API from "../utils/API";
import SignupForm from "../components/signUpForm/signUp";

class Signup extends React.Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    console.log("email: ", this.state.email, "password: ", this.state.password);
    API.signup({email: this.state.email, password: this.state.password})
    .then(response => {
      console.log(response.data)
      this.setState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        location: ''
      })
    })
    .catch(err => console.log(err))
  }; 

  render() {
    return (
      <Container>
        <h1 className="center">Sign Up!</h1>
        <h3 className="center">Login Info</h3>
        <Row>
          <Col s={6}>
            <TextInput
              email
              validate
              placeholder="Email"
              s={12}
              inputClassName="input-field"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
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
        </Row>
        <h3 className="center">About You</h3>
        <Row>
          <Col s={4}>
            <TextInput
              firstName
              validate
              placeholder="First Name"
              s={12}
              inputClassName="input-field"
              id="firstName"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleInputChange}
            />
          </Col>
          <Col s={4}>
            <TextInput
              lastName
              placeholder="Last Name"
              s={12}
              inputClassName="input-field"
              id="lastName"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleInputChange}
            />
          </Col>
          <Col s={4}>
            <TextInput
              location
              placeholder="Enter your Location"
              s={12}
              inputClassName="input-field"
              id="location"
              name="location"
              value={this.state.location}
              onChange={this.handleInputChange}
            />
          </Col>
        </Row>
        {/* <SignupForm/> */}
        <Button onClick={this.handleFormSubmit}>Sign Up!</Button>
        </Container>
    );
  }
}

export default Signup;
