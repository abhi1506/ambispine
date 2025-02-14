import React from "react";
import "./EdgeBenefits.css";

const EdgeBenefits = () => {
  const benefits = [
    { title: "Low Latency", color: "#FFD700" },
    { title: "Enhanced Security", color: "#FFA500" },
    { title: "Real-time Processing", color: "#FF4444" },
    { title: "Scalability", color: "#FFD700" },
    { title: "Improved Reliability", color: "#FFA500" },
  ];

  return (
    <div className="benefits-container">
      <div className="benefits-content">
        <div className="benefits-left">
          <h2>Benefits of Edge Computing</h2>
          <p>
            Edge computing revolutionizes data processing by bringing  
            computation closer to the source, reducing latency and enhancing  
            performance. It ensures **real-time processing**, **stronger security**,  
            and **scalability**, making it an ideal solution for businesses  
            leveraging IoT, AI, and cloud technologies.
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
