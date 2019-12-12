import React from "react";
import { Container, Row, Col, TextInput, Button } from "react-materialize";
import API from "../utils/API";

class Signup extends React.Component {
  state = {
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    resort: "",
    level: ""

  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("email: ", this.state.email, "password: ", this.state.password);
    API.signup({email: this.state.email, 
                password: this.state.password, 
                firstname: this.state.firstname, 
                lastname: this.state.lastname, 
                gender: this.state.gender,
                level: this.state.level,
                resort: this.state.resort})
    .then(response => {
      console.log(response.data)
      this.setState({email: '', password: '', firstname: '', lastname: '', gender: '', level: '', resort: ''})
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
          </Col>
          <Col s={6}>
            <TextInput
              text
              placeholder="LastName"
              s={12}
              inputClassName="input-field"
              id="lastname"
              name="lastname"
              value={this.state.lastname}
              onChange={this.handleInputChange}
            />
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
