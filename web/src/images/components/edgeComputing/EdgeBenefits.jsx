import React from "react";
import "./EdgeBenefits.css";

const EdgeBenefits = () => {
  const benefits = [
    { title: "Email Marketing", color: "#FFD700" },
    { title: "Email Marketing", color: "#FFA500" },
    { title: "Email Marketing", color: "#FF4444" },
    { title: "Email Marketing", color: "#FFD700" },
    { title: "Email Marketing", color: "#FFA500" },
  ];

  return (
    <div className="benefits-container">
      <div className="benefits-content">
        <div className="benefits-left">
          <h2>Benefits of Edge Computing</h2>
          <p>
            Technology helps things get better!! It helps things get smaller,
            faster, and easier much and much better. Your android app has to be
            one that boosts the image of your company. It should have those
            features that your audience can use with ease. Android applications
            help in boosting the revenue and gaining maximum growth. In this era
            of tecTechnology helps things get better!! It helps things get
            smaller, faster, and easier much and much better. Your android app
            has to be one that boosts
          </p>
        </div>

        <div className="benefits-right">
          <div className="diamond-grid">
            {benefits.map((benefit, index) => (
              <div
                className={`diamond-item diamond-${index + 1}`}
                key={index}
                style={{ "--benefit-color": benefit.color }}
              >
                <div className="diamond-content">
                  <span>{benefit.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EdgeBenefits;
