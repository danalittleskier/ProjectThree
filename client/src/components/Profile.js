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

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <Fragment>
      <div className="container">

     
      <h2>Welcome, {skier.first_name}!</h2>
      <img src={user.picture} style={{height: 200}} className="responsive-img" alt="Profile" />
      <div className="row">
        <p>Details</p>
        <div className="col s4 card">
          <p>Name: {`${skier.first_name} ${skier.last_name}`}</p>
          <p>Email: {skier.username}</p>
          <p>Skill: {skier.level}</p>
          <p>Gender: {skier.gender}</p>
          <p>Preferred Resort: {skier.resort_preference}</p>
        </div>
      </div>
      {console.log(skier)}
      {/* <code>{JSON.stringify(user, null, 2)}</code> */}
      </div>
    </Fragment>
  );
};

export default Profile;
