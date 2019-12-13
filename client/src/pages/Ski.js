import React from "react";
import { Row } from "react-materialize";

function Ski({
  brand,
  model,
  image,
  category,
  snow_recommendation,
  turns_recommendation,
  pace_recommendation,
  gender,
  description,
  width,
  length,
  radius,
  tip,
  tail,
  id
}) {
  return (
    <Row>
      <div className="col s12 m12">
        <div className="card medium">
          <div className="card-image">
            <img src={image} alt="ski model" />
            <span className="card-title">
              {brand} <span>{model} </span>
            </span>
          </div>
          <div className="card-content">
            <h6>{category}</h6>
            <p>Snow: {snow_recommendation}</p>
            <p>pace: {pace_recommendation}</p>
            <p>Turns: {turns_recommendation}</p>
            <p>Gender: {gender}</p>
            <p>Description: {description}</p>
            <p>width: {width}</p>
            <p>Length: {length}</p>
            <p>radius: {radius}</p>
            <p>tip: {tip}</p>
            <p>tail: {tail}</p>
          </div>
        </div>
      </div>
    </Row>
  );
}

export default Ski;
