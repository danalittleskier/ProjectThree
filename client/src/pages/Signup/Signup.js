import React from "react";
import { Container, Row, Col, TextInput, Button } from "react-materialize";
import API from "../../utils/API";
import './style.css'

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

    if (!this.state.email.includes("@")) {
      emailError = "Invalid Email Address"
    }
    if (this.state.firstname.length < 1) {
      firstnameError = "First Name is a required field"
    }
    if (this.state.lastname.length < 1) {
      lastnameError = "Last Name is a required field"
    }
    if (this.state.resortPref.length < 1) {
      resortPrefError = "Resort Preference is a required field"
    }

    if (emailError
      || firstnameError
      || lastnameError
      // || passwordError
      || resortPrefError
    ) {
      this.setState({ emailError, firstnameError, lastnameError, resortPrefError });
      return false;
    }
    return true;
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
    };
    API.signup({
      email: this.state.email,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      gender: this.state.gender,
      level: this.state.level,
      resort: this.state.resort
    })
      .then(response => {
        console.log(response.data)
        this.setState(initialState)
      })
      .catch(err => console.log(err))
  };


  render() {
    return (
      <Container className="form-container">
        <h1 className="center">Sign Up!</h1>
        <Row>
          <Col s={6}>

            <label htmlFor="email" className={this.state.emailError ? "errStyle" : null}>Email Address</label>
            <TextInput className={this.state.firstnameError ? "errStyle" : null}
              email
              placeholder="foo@bar.com"
              s={12}
              inputClassName="input-field"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </Col>
         
          <Col s={6}>
            <label htmlFor="firstname" className={this.state.firstnameError ? "errStyle" : null}>First Name</label>
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
            <label htmlFor="lastName" className={this.state.firstnameError ? "errStyle" : null}>Last Name</label>
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
          </Col>
          <Col s={6}>
            <label htmlFor="resort" className={this.state.Error ? "errStyle" : null}>Last Name</label>
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

            {/* <TextInput
              text
              placeholder="Gender"
              s={12}
              inputClassName="input-field"
              id="gender"
              name="gender"
              value={this.state.gender}
              onChange={this.handleInputChange}
            /> */}
            <label htmlFor="resort" className={this.state.genderError ? "errStyle" : null}>Gender</label>
            <select
              className="browser-default"
              name="gender"
              onChange={this.handleInputChange}
              value={this.state.gender}
            >
              <option value="" disabled defaultValue>
                Gender
                </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="">All</option>
            </select>
          </Col>
          <Col s={6}>
            <label htmlFor="resort" className={this.state.genderError ? "errStyle" : null}>Skier Level</label>
            <select
              className="browser-default"
              name="skierLevel"
              onChange={this.handleInputChange}
              value={this.state.skierLevel}
              placeholder="Skier Level"
            >
              <option value="" disabled defaultValue>
                Skier Level
                </option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Expert">Expert</option>
            </select>
            {/* <TextInput
              text
              placeholder="Skier Level"
              s={12}
              inputClassName="input-field"
              id="level"
              name="level"
              value={this.state.level}
              onChange={this.handleInputChange}
            /> */}
          </Col>
        </Row>
        <div style={{ color: "red" }}>
          {this.state.firstnameError}<br />
          {this.state.lastnameError}<br />
          {this.state.emailError}<br />
          {this.state.passwordError}
        </div>
        <Button onClick={this.handleFormSubmit}>Submit</Button>
      </Container>
    );
  }
}

export default Signup;
