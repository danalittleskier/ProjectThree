import React from 'react';
import { Row } from 'react-materialize';
import { Link } from 'react-router-dom'

function ResultCard({ station, distance, elevation, snowpack, newsnow, temperature, recommendedSki }) {
  return (

    <Row>
      <div className="col s12 m12">
        <div className="card medium">
          <div className="card-image">
            <img src={recommendedSki.image} alt={recommendedSki.model}/>
            <span className="card-title">{recommendedSki.brand} - {recommendedSki.model}</span>
          </div>
          <div className="card-content">
            <p>Snow Station: {station} <span>{distance} miles</span></p>
            <p>Elevation: {elevation} ft</p>
            <p>New Snow: {newsnow ? newsnow : 0} in</p>
            <p>Snow Pack: {snowpack ? snowpack + " in": "N/A"} </p>
            <p>Temperature: {temperature} F</p>
          </div>
          <div className="card-action">
            <Link to={`/ski/${recommendedSki._id}`}>Ski Details</Link>
          </div>
        </div>
      </div>
    </Row>


  )
}

export default ResultCard
