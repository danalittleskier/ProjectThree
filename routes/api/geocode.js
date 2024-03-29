var axios = require("axios");
const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  let geocodeURL = "https://maps.googleapis.com/maps/api/geocode/json?address=";
  let geocodeAddress = req.body.city;
  let geocodeKey = "&key=" + process.env.GEOCODE;
  let geocodeRequest = geocodeURL + geocodeAddress + geocodeKey;

  axios
    .get(geocodeRequest)
    .then(function(response) {
      let geoReturn = response.data.results[0];
      let geoLat = geoReturn.geometry.location.lat;
      let geoLng = geoReturn.geometry.location.lng;

      let queryURL = "http://api.powderlin.es/closest_stations";
      axios
        .get(queryURL, {
          params: {
            data: true,
            days: 1,
            count: 3,
            lat: geoLat,
            lng: geoLng
          }
        })
        .then(function(response) {
          res.send(response.data);
        });
    })
    .catch(error => res.send(error));
});

module.exports = router;
