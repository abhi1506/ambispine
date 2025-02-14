import React from "react";
import "./BusinessCloud.css";

const BusinessCloud = () => {
  const mobileButtons = [
    { id: 1, text: "Mobile" },
    { id: 2, text: "Mobile" },
    { id: 3, text: "Mobile" },
    { id: 4, text: "Mobile" },
  ];

  return (
    <section className="cloud-hero-businessCloud">
      <div className="hero-content-businessCloud">
        <h1 className="hero-title-businessCloud">
          Unlock The Cloud Transformation
        </h1>
        <p className="hero-description-businessCloud">
          We bring the cloud experience to all your IT and Business solutions.
          Our combination of public and private cloud infrastructure.
        </p>

        <div className="mobile-buttons-businessCloud">
          {mobileButtons.map((button) => (
            <button key={button.id} className="mobile-btn-businessCloud">
              {button.text}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessCloud;
