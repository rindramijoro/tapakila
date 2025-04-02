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
          <h2>Info Personnels</h2>
          <h4>Prénoms: Thomas</h4>
          <h4>Nom: RAZANAMALALA</h4>
          <h4>E-mail: thomas.raza@yahoo.com</h4>
        </div>
        <div className="activities">
          <h2>Activités</h2>
          <h4>Tickets achetés: 2</h4>
          <h4>Event assisté: 1</h4>
          <h4>Event organisé: 0</h4>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
