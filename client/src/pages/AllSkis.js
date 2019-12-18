import React from "react";
import API from "../utils/API";
import { Container } from "react-materialize";
import Skis from "../components/Skis";
import "./assets/app-styles.css";

class AllSkis extends React.Component {
  state = {
    skis: [],
    message: "",
    error: "",
    conditions: "",
    filteredConditions: []
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState(
      {
        [name]: value
      },
      () => this.filterSkisByConditions()
    );
  };

  filterSkisByConditions = () => {
    let filtered = this.state.skis.filter(
      ski => ski.snow_recommendation === this.state.conditions
    );
    this.setState({ filteredConditions: [...filtered] });
  };

  componentDidMount() {
    this.loadSkis();
  }

  loadSkis = () => {
    API.getSkis()
      .then(res => this.setState({ skis: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
        <div className="snowflake">
          <Container className="snowflake">
            <select
              className="browser-default"
              name="conditions"
              id="conditions"
              onChange={this.handleInputChange}
              value={this.state.conditions}
            >
              <option value="" disabled defaultValue>
                Snow Conditions
              </option>
              <option value="">All</option>
              <option value="Powder">Powder</option>
              <option value="Crud">Crud</option>
              <option value="Groomed">Groomed</option>
            </select>
            {this.state.filteredConditions.length ? (
              this.state.filteredConditions.map(result => (
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
        </div>
    );
  }
}

export default AllSkis;
