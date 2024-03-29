import React from 'react';
import { Link } from 'react-router-dom'
import { Row } from 'react-materialize';

function Skis({ brand, model, image, category, snow_recommendation, turns_recommendation, pace_recommendation, id, onClick }) {
  return (

    <Row>
      <div className="col s12 m12">
        <div className="card medium">
          <div className="card-image">
            <img src={image} alt="ski model"/>
            <span className="card-title">{brand} <span>{model} </span></span>
          </div>
          <div className="card-content">
              <h6>{category}</h6>
            <p>Snow: {snow_recommendation}</p>
            <p>Turns: {turns_recommendation}</p>
            <p>Pace: {pace_recommendation}</p>
           
          </div>
          <div className="card-action">
            <Link to={`/ski/${id}`}  id={id} >Details</Link>
          </div>
        </div>
      </div>
    </Row>


  )
}

export default Skis;