import React from "react";
import API from "../utils/API";
import { TextInput, Container, Button } from 'react-materialize';



class Home extends React.Component {
  state = {
    search: '',
    results: []
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value, result: [] });
  };

  handleSearchSubmit = event => {
    event.preventDefault();
    API.getGeocode(this.state.search)
      .then(res => {
  
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        res.data ?
          this.setState({ results: res.data }) :
          this.setState({ results: [] });
        console.log(this.state.results);
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
            
              {this.state.results.map(result => (
                <div key={result.station_information.triplet} className="row"  >
               <h5>{result.station_information.name} </h5> 
               <span>Elevation: {result.station_information.elevation}</span>
                {/* {result.data.map(conditions =>  */}
                  <li key={result.data[0].date}>Change in snow pack: {result.data[0]['Change In Snow Depth (in)']}</li>
                </div>
              ))}
            
          </div>
        ) : (
            <h5>{this.state.message}</h5>
          )}
      
      </Container>
    );

  }
}

export default Home;
