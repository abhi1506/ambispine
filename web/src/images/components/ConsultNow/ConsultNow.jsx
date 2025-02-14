import React from "react";
import "./ConsultNow.css";
import consultMeet from "../../assets/consultNowImage.png";

const ConsultNow = () => {
  return (
    <div className="hero-container-consult">
      <div className="hero-content-consult">
        <h1 className="hero-title-consult">
          Bringing the Best Solutions to Our Valued Customers
        </h1>
        <p className="hero-description-consult">
          At the core of our work is a dedication to your success. Our IT
          services are designed to exceed expectations, empowering your business
          with innovative solutions that drive remarkable results in today's
          competitive technology landscape.
        </p>
        <button className="hero-button-consult">Consult Now</button>
      </div>
      <div className="hero-image-container-consult">
        <img
          src={consultMeet}
          alt="IT Professional Working"
          className="hero-image-consult"
        />
      </div>
    </div>
  );
};

export default ConsultNow;
