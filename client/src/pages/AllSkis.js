import React from "react";
import API from "../utils/API";
import { Container } from "react-materialize";
import Skis from "../components/Skis";
import Ski from "./Ski";

class AllSkis extends React.Component {
  state = {
    skis: [],
    message: "",
    error: "",
    pace: "",
    filteredPace: []
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState(
      {
        [name]: value
      },
      () => this.filterSkisByPace()
    );
  };

  filterSkisByPace = () => {
    let filtered = this.state.skis.filter(
      ski => ski.pace_recommendation === this.state.pace
    );
    this.setState({ filteredPace: [...filtered] });
    console.log(this.state.pace);
  };

  componentDidMount() {
    this.loadSkis();
  }

  loadSkis = () => {
    API.getSkis()
      .then(res => this.setState({ skis: res.data }))
      .catch(err => console.log(err));
  };

  getSkitails = event => {
    const { id } = event.target
    console.log(id)
    API.getSki(id)
    .then(res =>  console.log(res.data))
    .catch(err => console.log(err));
  }
  render() {
    return (
      <Container>
        <select
          className="browser-default"
          name="pace"
          onChange={this.handleInputChange}
          value={this.state.pace}
        >
          <option value="" disabled defaultValue>
            SKi Pace
          </option>
          <option value="">All</option>
          <option value="Slow">Slow</option>
          <option value="Moderate">Moderate</option>
          <option value="Fast">Fast</option>
        </select>
        {this.state.filteredPace.length ? (
          this.state.filteredPace.map(result => (
            <div className="container center" key={result._id}>
              <Skis
                brand={result.brand}
                model={result.model}
                image={result.image}
                category={result.category}
                snow_recommendation={result.snow_recommendation}
                turns_recommendation={result.turns_recommendation}
                pace_recommendation={result.pace_recommendation}
                id={result._id}
                onClick={this.getSkitails}
              />
            </div>
          ))
        ) : this.state.skis.length ? (
          <div className="container center">
            {this.state.skis.map(result => (
              <Skis
                id={result._id}
                key={result._id}
                brand={result.brand}
                model={result.model}
                image={result.image}
                category={result.category}
                snow_recommendation={result.snow_recommendation}
                turns_recommendation={result.turns_recommendation}
                pace_recommendation={result.pace_recommendation}
                onClick={this.getSkitails}
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

export default AllSkis;
