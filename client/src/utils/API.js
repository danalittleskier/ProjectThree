import axios from "axios";

export default {
  // Gets all skis
  getSkis: function() {
    return axios.get("/api/skis");
  },
  // Gets the skis with the given id
  getSki: function(id) {
    return axios.get("/api/skis/" + id);
  },
  // Deletes the skis with the given id
  deleteSki: function(id) {
    return axios.delete("/api/skis/" + id);
  },
  // Saves a ski to the database
  saveSki: function(skiData) {
    return axios.post("/api/skis", skiData);
  },
  getRecommendedSki: (snowtype) => 
  {
    return axios.post("/api/ski", {snowtype: snowtype})
  },

  login: ({email, password}) => axios.post("/login", {email, password}),
  signup: ({email, password, firstname, lastname, gender, level, resort })  => axios.post('/signup', {email, password, firstname, lastname, gender, level, resort}),
  getGeocode: function(city){
    console.log("city "+city);
    return axios.post("/api/geocode", {city: city});
  }
};
