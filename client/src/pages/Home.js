import React from "react";
import { TextInput, Container, Button } from 'react-materialize';



class Home extends React.Component {
  state = {
    search: ''
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    
  };



  render() {
    return (
      <Container>
        <h1 className="center">Welcome Home</h1>
        <TextInput placeholder="enter a search term" 
          onChange={this.handleInputChange}
        />
        <Button>Submit</Button>
      </Container>
    );

  }
}

export default Home;
