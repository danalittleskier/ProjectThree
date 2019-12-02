import React from "react";
import API from "../utils/API";
import { TextInput, Container, Button} from 'react-materialize';
import ResultCard from "../components/ResultCard";

class Home extends React.Component {
  state = {
    search: '',
    results: [],
    recommendedSki: '',
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
 
  findRecommendedSki = (snowtype) => {
    console.log(snowtype);
    API.getRecommendedSki(snowtype)
    .then(res =>
      {
        this.setState({ recommendedSki: res.data});
        console.log(" ski  "+ this.state.recommendedSki);
        return this.state.recommendedSki;
      }
      
    )
    .catch(err => console.log(err));
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
              {console.log(this.state.results)}
              {this.state.results.map(result => (
                  <ResultCard 
                    key={result.station_information.triplet}
                    station={result.station_information.name}
                    distance={Math.floor(result.distance)}
                    elevation={result.station_information.elevation}
                    snowpack={result.data[1]['Snow Depth (in)']}
                    newsnow={result.data[1]['Change In Snow Depth (in)']}
                    temperature={result.data[1]['Observed Air Temperature (degrees farenheit)']}
                    recommendedSki={this.findRecommendedSki(result.data[1]['Change In Snow Depth (in)'] > 6 ? 'Powder' : 'Groomed')}
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
