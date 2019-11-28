import React from "react";
import API from "../utils/API";
import { TextInput, Container, Button} from 'react-materialize';
import ResultCard from "../components/ResultCard";

class Home extends React.Component {
  state = {
    search: '',
    results: [],
    error: ''
  }

 // set state to value of input
 handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSearchSubmit = event => {
    event.preventDefault();
    API.getGeocode(this.state.search)
      .then(res => {
        
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        res.data ?
          this.setState({ results: res.data, search: ''}) :
          this.setState({ results: []});
        console.log(this.state.results);
      })
      .catch(err => this.setState({ error: err.message }));
  }



  render() {
    return (
      <Container>
        <h3 className="center">Snow Station Report</h3>
        <TextInput 
        placeholder="enter a city to get the closest snow station report"
          onChange={this.handleInputChange}
          name="search"
          id="search"
          value={this.state.search}
        />
        <Button onClick={this.handleSearchSubmit}>
          Submit
        </Button>
        {this.state.results.length ? (
          <div className="container center">
            
              {this.state.results.map(result => (
                  <ResultCard 
                    key={result.station_information.triplet}
                    station={result.station_information.name}
                    distance={Math.floor(result.distance)}
                    elevation={result.station_information.elevation}
                    snowpack={result.data[0]['Snow Depth (in)']}
                    newsnow={result.data[0]['Change In Snow Depth (in)']}
                    temperature={result.data[0]['Observed Air Temperature (degrees farenheit)']}
                  />
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
