import axios from "axios";

export default {
  // Gets all books
  getSkis: function() {
    return axios.get("/api/skis");
  },
  // Gets the book with the given id
  getSki: function(id) {
    return axios.get("/api/skis/" + id);
  },
  // Deletes the book with the given id
  deleteSki: function(id) {
    return axios.delete("/api/skis/" + id);
  },
  // Saves a book to the database
  saveSki: function(skiData) {
    return axios.post("/api/skis", skiData);
  },
  getGeocode: function(city){
    console.log("city "+city);
    return axios.post("/api/geocode", {city: city});
  }
};
