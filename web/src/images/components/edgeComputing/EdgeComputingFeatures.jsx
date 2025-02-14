import React from "react";
import "./EdgeComputingFeatures.css";

const EdgeComputingFeatures = () => {
  const features = [
    {
      number: "1",
      title: "Data collection aur processing",
    },
    {
      number: "2",
      title: "Edge devices aur gateways",
    },
    {
      number: "3",
      title: "Cloud connectivity aur integration",
    },
  ];

  return (
    <div className="features-container-edge">
      <div className="features-content">
        <div className="features-left">
          <h2>How Edge Computing Works</h2>
          <p>
            Technology helps things get better! It helps things get smarter,
            faster, and easier much and much better. Your android app has to be
            one that boosts the image of your company. It should have those
            features that your audience can use with ease. Android applications
            help in boosting the revenue and gaining maximum growth. In this era
            of technology helps things get better! It helps things get smaller,
            faster, and easier much and much better. Your android app has to be
            one that boosts the image of your company. It should have those
            features that your audience can use with ease. Android applications
            help in boosting the revenue and gaining maximum growth. In this era
            of tec
          </p>
        </div>

        <div className="features-right">
          {features.map((feature, index) => (
            <div className="feature-item" key={index}>
              <div className="feature-number">{feature.number}</div>
              <div className="feature-title">{feature.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EdgeComputingFeatures;
