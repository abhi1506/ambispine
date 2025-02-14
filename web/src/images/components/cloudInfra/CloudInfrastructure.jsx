import React from "react";
import "./CloudInfra.css";
import CloudInfraSolutions from "./CloudInfraSolution";

const CloudInfrastructure = () => {
  return (
    <>
      <div className="cloud-container">
        <div className="background-image"></div>
        <div className="overlay"></div>

        <div className="content-wrapper">
          <div className="text-content">
            <h1 className="main-title">
              Build a Scalable and Secure Cloud Infrastructure
            </h1>
            <p className="subtitle">
              Transform Your Business with Our Cloud Infrastructure Solutions
            </p>
          </div>

          <div className="cloud-animation">
            <div className="neon-cloud">
              <svg viewBox="0 0 240 160" className="cloud-svg">
                {/* Inner cloud */}
                <path
                  className="cloud-inner"
                  d="M 40,120 C 20,120 10,100 20,80 C 20,60 40,50 70,60 C 80,20 150,20 170,60 C 200,50 220,60 220,80 C 230,100 220,120 200,120 Z"
                />
                {/* Outer cloud orbit */}
                <path
                  className="cloud-orbit"
                  d="M 30,130 C 0,130 -10,90 10,60 C 10,30 40,10 80,25 C 90,-20 150,-20 180,25 C 220,10 250,30 250,60 C 270,90 260,130 230,130 Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <CloudInfraSolutions />
    </>
  );
};

export default CloudInfrastructure;
// ===============================
