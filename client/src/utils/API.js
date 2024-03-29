import axios from "axios";

export default {
  // Gets all skis
  getSkis: function() {
    return axios.get("/api/skis");
  },
  // Gets the skis with the given id
  getSki: function(id) {
    return axios.get("/api/ski/" + id);
  },
  // Deletes the skis with the given id
  deleteSki: function(id) {
    return axios.delete("/api/skis/" + id);
  },
  // Saves a ski to the database
  saveSki: function(skiData) {
    return axios.post("/api/skis", skiData);
  },
  getRecommendedSki: snowtype => {
    return axios.post("/api/ski", { snowtype: snowtype });
  },
  getSkiByPace: pace => {
    return axios.post(`/api/${pace}`, { pace: pace });
  },
  getCustomSkis: (level, gender) => {
    return axios.post('api/customskis', {level: level, gender: gender});
  },
  getGeocode: function(city) {
    return axios.post("/api/geocode", { city: city });
  },
  login: ({ email, password }) => axios.post("/login", { email, password }),
  signup: ({ email, firstname, lastname, gender, level, resort }) =>
    axios.post("/signup", { email, firstname, lastname, gender, level, resort })
};
