import React, { Component } from "react";
import { Container, Row } from "react-materialize";
import API from "../utils/API";

class Ski extends Component {
  state = {
    ski: {}
  };

  componentDidMount() {
    this.getSkitails(this.props.match.params.id);
    console.log(this.props.match.params.id);
  }

  getSkitails = id => {
    console.log(id);
    API.getSki(id)
      .then(res => this.setState({ ski: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container>
        <Row>
          {console.log(this.state.ski)}
          <div className="col s12 m12">
            <div className="card medium">
              <div className="card-image">
                <img src={this.state.ski.image} alt="ski model" />
                <span className="card-title">
                  {this.state.ski.brand} <span>{this.state.ski.model} </span>
                </span>
              </div>
              <div className="card-content">
                <h6>{this.state.ski.category}</h6>
                <p>Snow: {this.state.ski.snow_recommendation}</p>
                <p>pace: {this.state.ski.pace_recommendation}</p>
                <p>Turns: {this.state.ski.turns_recommendation}</p>
                <p>Gender: {this.state.ski.gender}</p>
                <p>Description: {this.state.ski.description}</p>
                <p>width: {this.state.ski.width}</p>
                <p>Length: {this.state.ski.length}</p>
                <p>radius: {this.state.ski.radius}</p>
                <p>tip: {this.state.ski.tip}</p>
                <p>tail: {this.state.ski.tail}</p>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    );
  }
}

export default Ski;
