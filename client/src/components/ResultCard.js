import React from 'react';
import { Row } from 'react-materialize';

function ResultCard({ station, distance, elevation, snowpack, newsnow, temperature, recommendedSki }) {
  return (

    <Row>
      <div className="col s12 m12">
        <div className="card medium">
          <div className="card-image">
            {console.log(recommendedSki)}
            <img src={recommendedSki.image} />
            <span className="card-title">{station} <span>{distance} miles</span></span>
          </div>
          <div className="card-content">
            <p>Elevation: {elevation}</p>
            <p>New Snow: {newsnow}</p>
            <p>Snow Pack: {snowpack}</p>
            <p>Temperature: {temperature} F</p>
          </div>
          <div className="card-action">
            <a href="#">Ski Details</a>
          </div>
        </div>
      </div>
    </Row>


  )
}

export default ResultCard
