import React from "react";
import "./CareerHero.css";
import careerHeroImg from "../../assets/careerHeromain.png";

const CareerHero = () => {
  return (
    <div className="hero-container-caree">
      <div className="hero-content-wrappe">
        <div className="hero-content-caree">
          <h1>Build what the world needs.</h1>
          <p>
            We're shaping the future of freight and logistics. If you're excited
            by the prospect of unlocking the world's potential by speeding up
            the way goods move, join us.
          </p>
        </div>

        <div className="career-hero-image-caree">
          <img src={careerHeroImg} alt="Career opportunities" />
        </div>
      </div>
    </div>
  );
};

export default CareerHero;
