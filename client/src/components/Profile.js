// src/components/Profile.js

import React, { Fragment, useState, useEffect } from "react";
import { useAuth0 } from "../react-auth0-spa";
import API from "../utils/API";

const Profile = () => {
  const { loading, user } = useAuth0();
  const [skier, setSkier] = useState(user);
  

  const getSkier = email => {
    API.login({ email: email })
      .then(response => {
        setSkier(response.data);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getSkier(skier.email);
  }, []);

  const [ski, setCustomSki] = useState(null);
  

  const getCustomSki = (level, gender) => {
    API.getCustomSkis({ level: level, gender: gender})
      .then(response => {
        console.log(response.data);
        setCustomSki(response.data);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getCustomSki(skier.level, skier.gender);
  }, [])
  

  if (loading || !user) {
    return <div>Loading...</div>;
  }

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
      </div>
    </Fragment>
  );
};

export default Profile;
