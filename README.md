# Skiimatik

* ⛷ ⛷ ⛷

A MERN Ski recommendation application, that allows the user to enter a location, and the app will return recommended skis based on the snow conditions of the entered location.

### Deployed Site
[https://skiimatik.herokuapp.com/](https://skiimatik.herokuapp.com/)


## Built With

### Languages
HTML, CSS, JavaScript, MongoDB, Node,React

### Libraries/Packages
Axios, Express, Mongoose, Materialize, Bcrypt

## Code Overview

### Frontend
React app created with `create-react-app`. components are rendered using using class components. Routing is handled with `React Router`. Each page is rendered when the corresponding route is visited. `API` utility is used to call axios requests for `GET, POST`.  User enters a location into the search field, and coordinates are parsed from google geolocation. geolocation data is used to return ski conditions from the 3 nearest snow stations using SNOTEL API. Each ski has a details link, that the user can click to view expanded ski details from Home page and from Skis pages.  
### Backend
Server is created with Express backed with a MongoDB database. database modeling is implemented with Mongoose. Mongoose Models are used to model data for `User`, `Skier`,  and `Ski`. 
Controllers are used to pass DB search methods to corresponding routes, to get desired data to pass to the frontend. 
User signup and login routes handle validation of user details. Bcrypt is used to encrypt user password prior to storing in the database.  Bcrypt compares encypted password to plaintext password at login, to verify if the password is match. 

### NPM Packages
* [axios](https://www.npmjs.com/package/axios) - Promise based HTTP client for the browser and node.js
* [express](https://www.npmjs.com/package/express) - Fast, unopinionated, minimalist web framework for node
* [mongoose](https://www.npmjs.com/package/mongoose) -   a [MongoDB](https://www.mongodb.org/) object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks.

## Author

* **Gerritt Black** - *routing, server logic, React, styling* - [gmocore](https://github.com/gmocore)
* **Dana Alexandrescu** - *routing, controllers, models, React, Styling* - [danalittleskier](https://github.com/danalittleskier)
* **Trevor Brown** - *components, React, Styling, Validation* - [tr3vbr0w](https://github.com/tr3vbr0w)