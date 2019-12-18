import React, { Component } from "react";
import { Container, Row } from "react-materialize";
import API from "../utils/API";
import './assets/app-styles.css';


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
          <div className="col s12 m12 card">
            <div className="">
              <div className="card-image">
                <img
                  src={this.state.ski.image}
                  className="responsive-img"
                  alt="ski model"
                />
                <span className="card-title">
                  {this.state.ski.brand} <span>{this.state.ski.model} </span>
                </span>
              </div>
              <div className="row">
                <h5 className="center">{this.state.ski.category}</h5>
              </div>
              <div className="row center">
                <div className="col s6">
                  <h5>Details</h5>
                  <p>Snow: {this.state.ski.snow_recommendation}</p>
                  <p>Pace: {this.state.ski.pace_recommendation}</p>
                  <p>Turns: {this.state.ski.turns_recommendation}</p>
                  <p>Gender: {this.state.ski.gender}</p>
                </div>
                <div className="col s6">
                  <h5>Dimensions</h5>
                  <p>Width: {this.state.ski.width}</p>
                  <p>Length: {this.state.ski.length}</p>
                  <p>Radius: {this.state.ski.radius}</p>
                  <p>Tip: {this.state.ski.tip}</p>
                  <p>Tail: {this.state.ski.tail}</p>
                </div>
              </div>
              <div className="container">
                <p>{this.state.ski.description}</p>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    );
  }
}

export default Ski;
