import React from "react";
import "./ServerRoom.css";
import benefitsImage from "../../assets/BenefitsImage.png";

const ServerRoom = () => {
  return (
    <div className="server-container">
      <div className="content-wrapper">
        <div className="text-section">
          <h1>Technology helps things get better!</h1>
          <p>
            It helps things get smaller, faster, and easier much and much
            better. Your android app has to be one that boosts the image of your
            company. It should have those features that your audience can use
            with ease.
          </p>
        </div>
        <div className="image-section">
          <img
            src={benefitsImage}
            alt="Modern server room with rows of equipment"
            className="server-image"
          />
        </div>
      </div>
    </div>
  );
};

export default ServerRoom;
