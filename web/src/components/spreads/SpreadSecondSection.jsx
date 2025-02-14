import React from "react";
import spreadproduct from "./../../assets/content-5.jpeg";
import "./SpreadSecondSection.css";

export default function SpreadSecondSection() {
  return (
    <div>
      {/* Second Section */}
      <div className="spread-second-section">
        <div className="spread-second-section-left">
          <h1 className="spread-second-section-header">
            Explore what's <br /> possible <br /> with{" "}
            <span className="spread-text">Spreads</span> ads
          </h1>
          <p className="spread-second-section-subtitle">
            The cost to advertise is up to you. Select a budget <br /> that fits
            your business goals and update it at any time.
          </p>
          {/* <div className="second-section-button-container">
            <button className="second-section-button" >Learn More</button>
          </div> */}
        </div>
        <div className="spread-second-section-right">
          <div className="spread-second-right-img-container">
            <img
              src={spreadproduct}
              alt="Spread Product"
              className="spread-second-right-img"
            />
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className="spread-third-section">
        <div className="spread-third-section-left">
          <h1 className="spread-second-section-header">
            Explore what's <br /> possible <br /> with{" "}
            <span className="spread-text">Spreads</span> ads
          </h1>
          <p className="spread-second-section-subtitle">
            The cost to advertise is up to you. Select a budget <br /> that fits
            your business goals and update it at any time.
          </p>
        </div>
        <div className="spread-third-section-right">
          <div>
            <img
              src={spreadproduct}
              alt="Spread Product 1"
              className="spread-third-section-right-1"
            />
            <img
              src={spreadproduct}
              alt="Spread Product 2"
              className="spread-third-section-right-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
