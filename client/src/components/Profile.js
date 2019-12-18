// src/components/Profile.js

import React, { Fragment, useState, useEffect } from "react";
import { useAuth0 } from "../react-auth0-spa";
import Skis from "../components/Skis";
import API from "../utils/API";
import Loading from "./Loading";

const Profile = () => {
  const { loading, user } = useAuth0();
  const [skier, setSkier] = useState(user);
  
  if (loading || !user) {
    return <div className="center">
      <Loading />
    </div>;
  }

  const getSkier = async email => {
    let newSkier = await API.login({ email: email });

    let pace = "Moderate";
    switch (newSkier.data.level) {
      case "Beginner":
        pace = "Slow"
        break;
      case "Expert":
        pace = "Fast"
        break;
      case "Intermediate":
        pace = "Moderate"
        break;
      case "Advanced":
        pace = "Fast"
        break;
      default:
        pace = "Moderate"
        break;
    }

    let customSki = await API.getCustomSkis(pace, newSkier.data.gender);
    newSkier.data.ski = customSki.data;
    setSkier(newSkier.data);
  };

  useEffect(() => {
    getSkier(skier.email);
  }, []);

  return (
    <Fragment>
      <div className="container">

     
      <h2>Welcome, {skier.first_name}!</h2>
      <img src={user.picture} style={{height: 200}} className="responsive-img" alt="Profile" />
      <div className="row">
     
        <div className="col s8 card">
          <p>Name: {`${skier.first_name} ${skier.last_name}`}</p>
          <p>Email: {skier.username}</p>
          <p>Skier level : {skier.level}</p>
          <p>Gender: {skier.gender}</p>
          <p>Preferred Resort: {skier.resort_preference}</p>
        </div>
      </div>

        {skier.ski ? (
          <div className="row">
          <h6>Custom Ski Recommendation {skier.ski.brand} {skier.ski.model} </h6>
          <Skis
                id={skier.ski._id}
                key={skier.ski._id}
                brand={skier.ski.brand}
                model={skier.ski.model}
                image={skier.ski.image}
                category={skier.ski.category}
                snow_recommendation={skier.ski.snow_recommendation}
                turns_recommendation={skier.ski.turns_recommendation}
                pace_recommendation={skier.ski.pace_recommendation}
                onClick={skier.getSkitails}
              />
        </div>
        ) : 
        (
          <h5>{"No recommended ski at this time"}</h5>
        )
        }

  </div>
    </Fragment>
  );
};

export default Profile;
