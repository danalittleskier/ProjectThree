import React from "react";
import { Container, Row, Col, TextInput, Button } from "react-materialize";
import API from "../utils/API";

class Signup extends React.Component {
  state = {
    email: "",
    password: ""
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
      this.setState({email: '',
    password: ''})
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
        </Row>
        <Button onClick={this.handleFormSubmit}>Submit</Button>
      </Container>
    );
  }
}

export default Signup;
