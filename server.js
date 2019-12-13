const express = require("express");
require("dotenv").config();

const mongoose = require("mongoose");
const passport = require('passport');
const session = require('express-session')
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.session({secret: 'secret'}));
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true  }));
app.use(passport.initialize());
app.use(passport.session());
// Add routes, both API and view

app.use(routes);

// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/skiimatik", 
// { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connect(
  "mongodb+srv://gerritt:gerritt@planet-of-scrapes-wmmte.mongodb.net/skitest?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/skiimatik");


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
