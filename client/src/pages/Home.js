import React from "react";
import API from "../utils/API";
import { TextInput, Container, Button } from 'react-materialize';
import ResultCard from "../components/ResultCard";
import LandingCarousel from "../components/Carousel/Carousel";


class Home extends React.Component {
  state = {
    search: '',
    results: [],
    recommendedSki: {},
    error: ''
  }

  // set state to value of input
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSearchSubmit = async event => {
    event.preventDefault();
    API.getGeocode(this.state.search)
      .then(res => {

        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }

        const apiResults = res.data || [];
        Promise.all(apiResults.map(r => this.findRecommendedSki(r))).then(data => this.setState({ results: data, search: '' })); // reccommended ski object from the database
        // return Promise.all(promises);
        // Promise.all(promises).then(results => this.setState({ results: results.data, search: '' }) );

      })
      // .then(results => {
      //   this.setState({ results: res.data, search: '' }) 
      // })
      .catch(err => this.setState({ error: err.message }));
  }

  findRecommendedSki = async (result) => {

    let snowtype = result.data[1]['Change In Snow Depth (in)'] > 5 ? 'Powder' : 'Groomed';

    return API.getRecommendedSki(snowtype)
      .then(res => {
        result.recommendedSki = res.data;
        return result;
      }
      )
      .catch(err => console.log(err));
  }

  render() {
    return (
      <>
        <LandingCarousel></LandingCarousel>
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
              {/* {console.log(this.state.results)} */}
              {this.state.results.map(result => (

                <ResultCard
                  key={result.station_information.triplet}
                  station={result.station_information.name}
                  distance={Math.floor(result.distance)}
                  elevation={result.station_information.elevation}
                  snowpack={result.data[1]['Snow Depth (in)']}
                  newsnow={result.data[1]['Change In Snow Depth (in)']}
                  temperature={result.data[1]['Observed Air Temperature (degrees farenheit)']}
                  recommendedSki={result.recommendedSki}

                />
              ))}

            </div>
          ) : (
              <h5>{this.state.message}</h5>
            )}

        </Container>
      </>
    );

  }
}

export default Home;
