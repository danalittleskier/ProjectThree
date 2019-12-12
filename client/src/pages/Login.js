import React, { Component } from "react";
import { Container, Row, Col, TextInput, Button } from "react-materialize";
import API from '../utils/API'

class Login extends Component {
    state = {
        email: '',
        password: ''
    }

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
        console.log('email: ', this.state.email, 'password: ', this.state.password);
        API.login({email: this.state.email, password: this.state.password})
            .then(response => {
              localStorage.setItem('token', response.data.token);
              localStorage.setItem('user', JSON.stringify(response.data.user)); 
              //localStorage.getItem('user')
              //JSON.parse(localStorage.getItem('user'))._id
              console.log(response.data);
              this.setState({
                email: '',
                password: ''
              })
            })
            .catch(err => console.log(err))
      };
    
    
    
    render() {
        return (
          <Container>
              <h3 className="center">Login</h3>
            <Row>
              <Col s={6}>
                <TextInput 
                email 
                validate 
                placeholder="Email" 
                name="email" s={12} 
                inputClassName="input-field"
                onChange={this.handleInputChange}
                value={this.state.email}
                />
              </Col>
              <Col s={6}>
                <TextInput 
                password  
                placeholder="Password" 
                name="password" 
                s={12} 
                inputClassName="input-field"
                onChange={this.handleInputChange}
                value={this.state.password}
                />
              </Col>
            </Row>
            <Button onClick={this.handleFormSubmit}>Submit</Button>
          </Container>
        );
    }
}

export default Login;
