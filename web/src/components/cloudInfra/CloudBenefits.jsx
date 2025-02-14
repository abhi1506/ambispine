

import React from "react";
import "./CloudBenefits.css";
import CloudInfraBenefits from "../../assets/CloudInfraBenefits.png";
const CloudBenefits = () => {
  return (
    <section className="cloud-benefits_benefi">
      <div className="container-benefits_benefi">
        <h1 className="title-benefits_benefi">
          Benefits of Cloud Infrastructure
        </h1>
        <div className="benefits-content-wrapper_benefi">
          <div className="text-content_benefi">
            <p className="description-benefits_benefi">
              Mobulous specializes in providing the best iOS app development
              services to clients. Our experts create feature-rich and custom
              iOS apps tailored to your specific business needs and
              requirements, ensuring leading-edge quality and user satisfaction.
            </p>
            <p className="description-benefits_benefi">
              Mobulous specializes in providing the best iOS app development
              services to clients. Our experts create feature-rich and custom
              iOS apps tailored to your specific business needs and
              requirements, ensuring leading-edge quality and user satisfaction.
            </p>
            <p className="description-benefits_benefi">
              Mobulous specializes in providing the best iOS app development
              services to clients. Our experts create feature-rich and custom
              iOS apps tailored to your specific business needs and
              requirements, ensuring leading-edge quality and user satisfaction.
            </p>
          </div>
          <div className="image-container_benefi">
            <img
              src={CloudInfraBenefits}
              alt="Cloud Infrastructure"
              className="cloud-image_benefi"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudBenefits;
