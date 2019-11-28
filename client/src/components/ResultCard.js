import React from 'react'

function ResultCard({ station, elevation, snowpack}) {
    return (
        
  <div className="row">
  <div className="col s12 m12">
    <div className="card">
      <div className="card-image">
        <img src="https://materializecss.com/images/sample-1.jpg" />
        <span className="card-title">{station}</span>
      </div>
      <div className="card-content">
        <p>Elevation: {elevation}</p>
        <p>snow pack: {snowpack}</p>
      </div>
      <div className="card-action">
        <a href="#">Find a ski</a>
      </div>
    </div>
  </div>
</div>
    )
}

export default ResultCard
