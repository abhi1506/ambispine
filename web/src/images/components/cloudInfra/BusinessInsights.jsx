import React from "react";
import "./BusinessInsights.css";
import businessImage from "../../assets/ccloudinfradiscuss.png";

const BusinessInsights = () => {
  return (
    <section className="business-insights">
      <div className="text-content">
        <h2>Unlocking Business Insights</h2>
        <p>
          Mobulous specializes in providing the best iOS app development
          services to clients. Our experts create feature-rich and custom iOS
          apps tailored to your specific business needs and requirements,
          ensuring leading-edge quality and user satisfaction.
        </p>
      </div>
      <div className="image-content">
        <img src={businessImage} alt="Business Team" />
      </div>
    </section>
  );
};

export default BusinessInsights;
