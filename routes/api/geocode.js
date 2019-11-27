var axios = require("axios");
const express = require("express");
const router = express.Router();

function callAPIs(city) {


  var geocodeURL = "https://maps.googleapis.com/maps/api/geocode/json?address=";
  var geocodeAddress = city;
  var geocodeKey = "&key=" + process.env.GEOCODE;
  var geocodeRequest = geocodeURL + geocodeAddress + geocodeKey;
  axios.get(geocodeRequest)
    .then(function (response) {
      //console.log(response.data.results[0].geometry.location.lat);
      let geoReturn = response.data.results[0];
      let geoLat = geoReturn.geometry.location.lat;
      let geoLng = geoReturn.geometry.location.lng;


      let queryURL = "http://api.powderlin.es/closest_stations";
      axios.get(queryURL, {
        params: {
          data: true,
          days: 3,
          count: 3,
          lat: geoLat,
          lng: geoLng
        }
      })
        .then(function (response) {
          console.log(response.data);
          let allResults = response.data;
          return allResults;
          // //intensity dropdown
          // let allData = response.data;
          // allData.forEach(element => {
          //   let stationInfo = element.station_information;
          //   console.log(stationInfo);

          //   let stationDetail = element.data;
          //   stationDetail.forEach(detail => {
          //     console.log(detail);
          //     // console.log(detail.Date);
          //     // console.log(detail['Change In Snow Water Equivalent (in)']);
           // });
          //});


        })

    })



}

// router.post("/", (req, res) => {
//   let results = callAPIs(req.body.city);
//   console.log("results");
//   console.log(results);
//   res.json(results);
// })

router.post("/", (req, res) => {
  res.send(callAPIs(req.body.city));
})


module.exports = router;