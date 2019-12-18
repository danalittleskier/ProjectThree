# Skiimatik

* ⛷ ⛷ ⛷

A MERN Ski recommendation application, that allows the user to enter a location, and the app will return recommended skis based on current snow conditions from near by SNOTEL snow stations.

### Deployed Site
[https://skiimatik.herokuapp.com/](https://skiimatik.herokuapp.com/)


## Built With

### Languages
HTML, CSS, JavaScript, MongoDB, Node, React

### Libraries/Packages
Axios, Express, Mongoose, Materialize, React-Materialize, Auth0

## Code Overview

### Frontend
React app created with `create-react-app`. components are rendered using using class components. Routing is handled with `React Router`. Each page is rendered when the corresponding route is visited. `API` utility is used to call axios requests for `GET, POST`.\  User enters a location into the search field, and coordinates are parsed from google geolocation.\ Latitude and longitude data is used to return ski conditions from the 3 nearest snow stations using SNOTEL API.\ Each ski has a details link, that the user can click to view expanded ski details from Home page and from Skis pages.\  
Log in page is handled with `Auth0`. User profile details are only visible to logged in users by way of a private route, which is toggled by authentication through `Auth0`. 
Skier details are set and stored via the signup page, where user details and preferences are entered and saved in the database. 

### Backend
Server is created with Express backed with a MongoDB database. Database modeling is implemented with the Mongoose ODM. Mongoose Models are used to model data for  `Skier`  and `Ski`. 
Controllers are used to pass DB search methods to corresponding routes, to pass desired data to the frontend. 


### NPM Packages
* [axios](https://www.npmjs.com/package/axios) - Promise based HTTP client for the browser and node.js
* [express](https://www.npmjs.com/package/express) - Fast, unopinionated, minimalist web framework for node
* [mongoose](https://www.npmjs.com/package/mongoose) -   [MongoDB](https://www.mongodb.org/) object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks.
* [Auth0)](https://auth0.com/docs/) - Authentication & authorization platform
* [react-materialize](https://www.npmjs.com/package/react-materialize) - Material design components for react 

## Author

* **Gerritt Black** - *routing, server logic, React, styling, database* - [gmocore](https://github.com/gmocore)
* **Dana Alexandrescu** - *routing, controllers, models, React, Auth0, geocode API* - [danalittleskier](https://github.com/danalittleskier)
* **Trevor Brown** - *components, React, styling, validation* - [tr3vbr0w](https://github.com/tr3vbr0w)