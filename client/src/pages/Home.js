import React from "react";
import API from "../utils/API";
import { TextInput, Container, Button } from 'react-materialize';



class Home extends React.Component {
  state = {
    search: '',
    results: []
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleSearchSubmit = event => {
    event.preventDefault();
    API.getGeocode(this.state.search)
      .then(res => {
        console.log(res);
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        res.data ?
          this.setState({ results: res.data }) :
          this.setState({ results: [] });

      })
      .catch(err => this.setState({ error: err.message }));
  }



  render() {
    return (
      <Container>
        <h1 className="center">Welcome Home</h1>
        <TextInput placeholder="enter a search term"
          onChange={this.handleInputChange}
        />
        <Button onClick={this.handleSearchSubmit}>
          Submit
        </Button>
        {this.state.results.length ? (
          <div className="container">
            <div className="row"  >
              {this.state.results.map(result => (
                <p>{result}</p>
              
              ))}
            </div>
          </div>
        ) : (
            <h5>{this.state.message}</h5>
          )}
      
      </Container>
    );

  }
}

export default Home;
