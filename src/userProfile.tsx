import React from "react";
import profilePic from "./ImageSrc/profilePic.jpeg";
import "./userProfileStyles.css";

const UserProfile: React.FC = () => {
  return (
    <div>
      <div className="header">
        <img src={profilePic} alt="profile picture" className="pfp" />
      </div>
      <div className="body">
        <div className="personalInfo">
          <h1>RAZANAMALALA Thomas</h1>
          <p>thomas.raza@yahoo.com</p>
        </div>
        <div className="activities">
          <div className="events">
            <h1>Mes Activités</h1>
            <h2>Les events auxquelles vous avez assisté</h2>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
                harum eveniet optio maiores! Alias unde nam voluptates eligendi
                accusamus eaque voluptatum. Excepturi repellat voluptates
                provident beatae deleniti laboriosam quibusdam tempora.
              </p>
            </div>
          </div>
          <div className="tickets">
            <h2>Les tickets que vous avez acheté</h2>
            <ul>
                <p>Standard: 2</p>
                <p>Early Bird: 0</p>
                <p>VIP: 5</p>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
