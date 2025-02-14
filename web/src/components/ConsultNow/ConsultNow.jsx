import React, { Fragment, useState } from "react";
import "./ConsultNow.css";
import consultMeet from "../../assets/consultNowImage.png";
import QuotationForm from "../form/QuotationForm";

const ConsultNow = () => {
  const [showForm, setShowForm] = useState(false);

  const handleConsultClick = () => {
    setShowForm((prev) => !prev);
  };

  // Callback function to close the form
  const handleFormSubmit = () => {
    setShowForm(false);
  };

  return (
    <Fragment>
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
          <button className="hero-button-consult" onClick={handleConsultClick}>
            {showForm ? "Close Form" : "Consult Now"}
          </button>
        </div>
        <div className="hero-image-container-consult">
          <img
            src={consultMeet}
            alt="IT Professional Working"
            className="hero-image-consult"
          />
        </div>
      </div>
      {showForm && <QuotationForm onFormSubmit={handleFormSubmit} />}
    </Fragment>
  );
};

export default ConsultNow;
